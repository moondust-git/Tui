import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-timepicker',
  templateUrl: './demo-timepicker.component.html',
  styleUrls: ['./demo-timepicker.component.css']
})
export class DemoTimepickerComponent implements OnInit {
  timeChoose: Date;

  constructor() {
    this.timeChoose = new Date();
  }

  ngOnInit() {
  }

  change(d) {
    console.log(d);
  }

}
