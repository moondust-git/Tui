import {
  Component, HostBinding, Inject, Input, OnDestroy, OnInit
} from '@angular/core';
import {AccordionComponent} from './accordion.component';
import {animate, state, style, transition, trigger} from "@angular/animations";

/*
 * ### Accordion heading

 Instead of using `heading` attribute on the `accordion-group`, you can use an `accordion-heading` attribute on `any` element inside of a group that will be used as group's header template.

 * */

@Component({
  selector: 'Taccordion-group',
  template: `
    <div (click)="toggleOpen($event)" style="cursor: pointer">
      <ng-content select="[accordion-heading]"></ng-content>
    </div>
    <TCollapse [active]="isOpen">
      <ng-content></ng-content>
    </TCollapse>
  `
})
export class AccordionPanelComponent implements OnInit, OnDestroy {
  /** if <code>true</code> — disables accordion group */
  @Input() public isDisabled: boolean;

  /** Is accordion group open or closed */
  @Input()
  public get isOpen(): boolean {
    return this._isOpen;
  }

  public set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOtherPanels(this);
    }
  }

  protected _isOpen: boolean;

  protected accordion: AccordionComponent;

  public constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;
  }

  public ngOnInit(): any {
    this.accordion.addGroup(this);
  }

  public ngOnDestroy(): any {
    this.accordion.removeGroup(this);
  }

  public toggleOpen(event: Event): any {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }
}
