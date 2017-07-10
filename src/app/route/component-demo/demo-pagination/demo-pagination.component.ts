import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-pagination',
  templateUrl: './demo-pagination.component.html',
  styleUrls: ['./demo-pagination.component.css']
})
export class DemoPaginationComponent implements OnInit {
  page: number = 10;

  constructor() {
  }

  ngOnInit() {
  }

  alert($e) {
    console.log($e);
  }

}
