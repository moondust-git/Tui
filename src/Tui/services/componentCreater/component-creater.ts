import {
  Injector,
  TemplateRef,
  ViewRef,
  ViewContainerRef,
  Renderer2,
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver, ApplicationRef, ReflectiveInjector, Provider, Injectable
} from '@angular/core';
import {isString} from 'util';
import {ContentRef} from './content-ref';


@Injectable()
export class ComponentCreater<T> {
  private _windowFactory: ComponentFactory<T>;
  private _windowRef: ComponentRef<T>;
  private _contentRef: ContentRef;
  private _containerSelector: string = 'body';
  private _viewContainerRef?: ViewContainerRef;


  constructor(type: any,
              private _injector: Injector,
              private _renderer: Renderer2,
              private componentFactoryResolver: ComponentFactoryResolver,
              private _applicationRef: ApplicationRef) {
    this._windowFactory = componentFactoryResolver.resolveComponentFactory<T>(type);
  }


  setContainerRef(containerRef: ViewContainerRef) {
    this._viewContainerRef = containerRef;
  }

  open(content?: string | TemplateRef<any>, context?: any, providers?: Provider[]): ComponentRef<T> {
    this._contentRef = this._getContentRef(content, context, providers);
    if (this._viewContainerRef) {
      this.createByDirective();
    } else {
      this.createByService();
    }
    return this._windowRef;
  }

  remove() {
    if (this._windowRef) {
      this._windowRef.destroy();
    }
    if (this._contentRef && this._contentRef.viewRef) {
      this._contentRef.viewRef.destroy();
    }
    this._windowRef = null;
    this._contentRef = null;
  }

  private createByDirective() {
    if (!this._windowRef) {
      this._windowRef = this._viewContainerRef.createComponent(this._windowFactory, 0, this._injector, this._contentRef.nodes);
    }
  }

  private createByService() {
    if (!this._windowRef) {
      const containerEl = document.querySelector(this._containerSelector);
      if (!containerEl) {
        throw new Error(`The specified modal container "${this._containerSelector}" was not found in the DOM.`);
      }
      this._windowRef = this._windowFactory.create(this._injector, this._contentRef.nodes);
      this._applicationRef.attachView(this._windowRef.hostView);
      containerEl.appendChild(this._windowRef.location.nativeElement);
    }
  }

  private _getContentRef(content: string | TemplateRef<any> | any, context?: any, providers?: Provider[]): ContentRef {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(context);
      this._applicationRef.attachView(viewRef);
      return new ContentRef([viewRef.rootNodes], viewRef);
    } else if (isString(content)) {
      return new ContentRef([[this._renderer.createText(`${content}`)]]);
    } else {
      const contentCmptFactory = this.componentFactoryResolver.resolveComponentFactory(content);
      const modalContentInjector = ReflectiveInjector.resolveAndCreate(providers, this._injector);
      const componentRef = contentCmptFactory.create(modalContentInjector);
      this._applicationRef.attachView(componentRef.hostView);
      return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    }
  }
}



