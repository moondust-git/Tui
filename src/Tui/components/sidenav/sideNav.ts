import {
  AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy,
  OnInit, Output,
  Renderer2, ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {ESCAPE} from "../../util/keycodes";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {SideNavCallback} from "./callback";
import {animate, state, style, transition, trigger} from "@angular/animations";
/**
 * Created by tc949 on 2017/5/26.
 */
@Component({
  moduleId: module.id,
  selector: 'Tsidenav',
  // TODO(mmalerba): move template to separate file.
  template: `
    <div #sidenav class="sidenav {{placement}} {{active?'show':'hide'}}" [@nav_ani]="active?'show':'hide'">
      <ng-content select="[sidenav]"></ng-content>
    </div>
    <div #content class="sidenav-content">
      <ng-content select="[content]"></ng-content>
    </div>
  `,
  host: {
    '(keyup.esc)': 'hide()',
    'tabIndex': '-1'
  },
  animations: [
    trigger('nav_ani', [
      // state 控制不同的状态下对应的不同的样式
      state('show', style({transform: 'translateX(0)'})),
      state('hide', style({transform: 'translateX(-100%)'})),
      // transition 控制状态到状态以什么样的方式来进行转换
      transition('show => hide', animate('600ms')),
      transition('hide => show', animate('300ms')),
    ])
  ],
  styleUrls: ['./sidenav.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TSidenav implements AfterViewInit, OnDestroy, OnInit {


  @Input()
  set placement(value) {
    this._placement = value;
  }

  @Input()
  set active(value: boolean) {
    this._active = value;
  }

  @Output("show") AfterShow = new EventEmitter<void>();
  @Output("hide") AfterHide = new EventEmitter<void>();

  public toggle() {
    if (this.active) {
      this.hide();
    } else {
      this.show();
    }
  }

  public show() {
    if (!this.active) {
      this._active = true;
      console.log('show');
    }
  }

  public hide() {
    if (this.active) {
      this._active = false;
      console.log('hide');
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


  ngAfterViewInit(): void {
  }

  private _placement: 'left' | 'right' | 'top' | 'bottom' = 'left';
  private _active: boolean = false;

  get placement() {
    return this._placement;
  }

  get active(): boolean {
    return this._active;
  }
}
