import {Component, OnInit} from '@angular/core';
import {TToast} from '../../../Tui/components/toast/toast';
import {TMessageBox} from '../../../Tui/components/message/message';
import {TConfirm} from '../../../Tui/components/confirm/confirm.service';
import {Tab} from '../../../Tui/components/tab/Tab';

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css']
})
export class ComponentDemoComponent implements OnInit {

  constructor(private toast: TToast, private messageBox: TMessageBox, private confirms: TConfirm) {
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


  confirm() {
    this.confirms.confirm('nihao');

  }

  to() {
    this.toast.toast('hello world', {postion: 'center'})
      .onShow((data) => {
        console.log('onshow toast' + data)
      })
      .onClick((data) => {
        console.log('onclick toast' + data)
      })
      .onHide((data) => {
        console.log(' onhide toast' + data)
      })
  }

  mes() {
    this.messageBox.message({
      title: 'Welcome',
      message: 'hello world',
      icon: 'http://img1.gtimg.com/sports/pics/hv1/152/186/2218/144273032.jpg'
    }, {timeLong: 10000})
      .onShow((data) => {
        console.log(' onshow messageBox' + data)
      })
      .onHide((data) => {
        console.log(' onhide messageBox' + data)
      })
      .onClick((data) => {
        console.log(' onClick messageBox' + data)
      })
  }
}
