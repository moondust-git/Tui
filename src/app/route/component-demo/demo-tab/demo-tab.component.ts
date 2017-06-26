import {Component, OnInit} from '@angular/core';
import {Tab} from '../../../../Tui/components/tab/Tab';

@Component({
  selector: 'app-demo-tab',
  templateUrl: './demo-tab.component.html',
  styleUrls: ['./demo-tab.component.css']
})
export class DemoTabComponent implements OnInit {

  constructor() {
  }


  tabs: any[] = [
    {heading: 'Title 1', content: 'Content 1', active: true},
    {heading: 'Title 2', content: 'Content 2'},
    {heading: 'Title 3', content: 'Content 3'},
    {heading: 'Title 4', content: 'Content 4', removable: true}
  ];

  deselectLog(tab: Tab): void {
    console.log('Deselected:', tab.heading);
  }

  selectLog(tab: Tab): void {
    console.log('Selected:', tab.heading);
  }

  removeLog(tab: Tab): void {
    console.log('Removed:', tab.heading);
  }

  ngOnInit() {
  }
}
