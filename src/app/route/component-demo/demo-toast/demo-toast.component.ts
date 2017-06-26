import {Component, OnInit} from '@angular/core';
import {TToast} from '../../../../Tui/components/toast/toast';

@Component({
  selector: 'app-demo-toast',
  templateUrl: './demo-toast.component.html',
  styleUrls: ['./demo-toast.component.css']
})
export class DemoToastComponent implements OnInit {

  constructor(private toast: TToast) {
  }

  ngOnInit() {
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

}
