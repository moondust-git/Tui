import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-tooltip',
  templateUrl: './demo-tooltip.component.html',
  styleUrls: ['./demo-tooltip.component.css']
})
export class DemoTooltipComponent implements OnInit {
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
