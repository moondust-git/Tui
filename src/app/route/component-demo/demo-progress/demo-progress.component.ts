import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-progress',
  templateUrl: './demo-progress.component.html',
  styleUrls: ['./demo-progress.component.css']
})
export class DemoProgressComponent implements OnInit {
  value: number = 10;

  constructor() {
  }

  ngOnInit() {
  }

}
