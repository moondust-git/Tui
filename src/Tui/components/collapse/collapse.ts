import {Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
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
      transition('down => up', [
        style({height: '*'}),
        animate(200, style({
          height: 0
        }))
      ]),
      transition('up => down', [
        style({height: 0}),
        animate(200, style({
          height: '*'
        }))
      ])
    ])
  ],
  host: {
    'role': 'accordion-tab',
    'style': 'overflow:hidden'
  },
  encapsulation: ViewEncapsulation.None,
  exportAs: 'TCollapse'
})
export class TCollapse {

  private _active: boolean = false;

  @Input()
  get active(): boolean {
    return this._active;
  }

  @Output('show')
  onShow = new EventEmitter<void>();

  @Output('hide')
  OnHide = new EventEmitter<void>();

  set active(value) {
    this._active = value;
  }

  slide(): string {
    return this.active ? 'down' : 'up';
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
