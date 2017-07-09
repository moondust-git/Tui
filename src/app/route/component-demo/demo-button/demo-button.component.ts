import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.css']
})
export class DemoButtonComponent implements OnInit {
  active: boolean = false;

  constructor() {
  }


  ngOnInit() {
  }

}
