import {AfterViewInit, Component, ElementRef, Input, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {TAlertConfig} from './config';
import {copyWithOutOverwrite} from '../../util/util';
/**
 * Created by tc949 on 2017/7/5.
 */
@Component({
  selector: 'TAlert',
  template: `
    <div #alertContent class="alert alert-{{level}}  fade" role="alert" [ngClass]="{'alert-dismissible':dismiss}">
      <button *ngIf="dismiss" type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="hide()">
        <span aria-hidden="true">&times;</span>
      </button>
      <ng-content></ng-content>
    </div>
  `
})
export class TAlertCmt implements AfterViewInit, OnDestroy {


  @Input('level')
  level: string;

  @Input('dismiss')
  dismiss: boolean;


  @ViewChild('alertContent')
  alertContent: ElementRef;

  private isShow: boolean = false;

  private showTimeOut: any;
  private hideTimeOut: any;


  constructor(private config: TAlertConfig, private renderer: Renderer2) {
    copyWithOutOverwrite(config, this);
  }

  hide() {
    this.renderer.removeClass(this.alertContent.nativeElement, 'show');
    this.hideTimeOut = setTimeout(() => {
      this.renderer.setStyle(this.alertContent.nativeElement, 'display', 'none');
      this.isShow = false;
    }, 300)
  }

  show() {
    this.renderer.setStyle(this.alertContent.nativeElement, 'display', 'block');
    this.renderer.addClass(this.alertContent.nativeElement, 'show');
    this.isShow = true;
  }

  toggle() {
    if (this.isShow) {
      this.hide();
    } else {
      this.show();
    }
  }

  ngAfterViewInit(): void {
    this.showTimeOut = setTimeout(() => {
      this.show();
    }, 1)
  }

  ngOnDestroy(): void {
    if (this.showTimeOut) {
      clearTimeout(this.showTimeOut)
    }
    if (this.hideTimeOut) {
      clearTimeout(this.hideTimeOut)
    }
  }
}
