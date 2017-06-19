import {Component, Input} from '@angular/core';
import {AccordionPanelComponent} from './accordion-group.component';

/** Displays collapsible content panels for presenting information in a limited amount of space. */
@Component({
  selector: 'Taccordion',
  template: `
    <ng-content></ng-content>`,
  // tslint:disable-next-line
  host: {
    '[attr.aria-multiselectable]': 'closeOthers',
  }
})
export class AccordionComponent {

  /** if `true` expanding one item will close all others */
  @Input() public closeOthers: boolean = true;

  protected groups: AccordionPanelComponent[] = [];

  public constructor() {
  }

  public closeOtherPanels(openGroup: AccordionPanelComponent): void {
    if (!this.closeOthers) {
      return;
    }

    this.groups.forEach((group: AccordionPanelComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  public addGroup(group: AccordionPanelComponent): void {
    this.groups.push(group);
  }

  public removeGroup(group: AccordionPanelComponent): void {
    let index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
