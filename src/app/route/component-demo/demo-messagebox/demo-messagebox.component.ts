import {Component, OnInit} from '@angular/core';
import {TMessageModule} from '../../../../Tui/components/message/index';
import {TMessageBox} from '../../../../Tui/components/message/message';

@Component({
  selector: 'app-demo-messagebox',
  templateUrl: './demo-messagebox.component.html',
  styleUrls: ['./demo-messagebox.component.css']
})
export class DemoMessageboxComponent implements OnInit {

  constructor(private messageBox: TMessageBox) {
  }

  ngOnInit() {
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
