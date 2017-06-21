import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  moduleId: module.id,
  selector: 'TCollapse',
  template: `
    <div class="t-collapse-body" [@slide]="slide()" style="overflow: hidden">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('slide', [
      state('up', style({height: 0})),
      state('down', style({height: '*'})),
      state('left', style({width: 0})),
      state('right', style({width: '*'})),
      transition('down => up', [
        style({height: '*'}),
        animate(300, style({
          height: 0
        }))
      ]),
      transition('up => down', [
        style({height: 0}),
        animate(300, style({
          height: '*'
        }))
      ]),
      transition('right => left', [
        style({width: '*'}),
        animate(300, style({
          width: 0
        }))
      ]),
      transition('left => right', [
        style({width: 0}),
        animate(300, style({
          width: '*'
        }))
      ])
    ])
  ],
  host: {
    'role': 'accordion-tab'
  },
  encapsulation: ViewEncapsulation.None
})
export class TCollapseComponent {

  private _active: boolean = false;


  @Input()
  get active(): boolean {
    return this._active;
  }

  @Input()
  public postion: 'h' | 'v';

  @Output('show')
  onShow = new EventEmitter<void>();

  @Output('hide')
  OnHide = new EventEmitter<void>();

  set active(value) {
    this._active = value;
  }

  slide(): string {
    if ('h' === this.postion) {
      return this.active ? 'right' : 'left';
    } else {
      return this.active ? 'down' : 'up';
    }
  }

  constructor() {
  }

  show() {
    this._active = true;
    this.onShow.emit();
  }

  hide() {
    this._active = false;
    this.OnHide.emit();
  }

  toggle() {
    if (this._active) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Find index of specific tab of accordion
   * @return index number of this tab
   */
  findTabIndex() {
    let index = -1;
    return index;
  }
}
