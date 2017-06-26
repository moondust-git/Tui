import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-timepicker',
  templateUrl: './demo-timepicker.component.html',
  styleUrls: ['./demo-timepicker.component.css']
})
export class DemoTimepickerComponent implements OnInit {
  protected timeChoose: Date = new Date;

  constructor() {
  }

  ngOnInit() {
  }

}
