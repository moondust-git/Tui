import {Component, OnInit} from '@angular/core';
import {TConfirm} from '../../../../Tui/components/confirm/confirm.service';

@Component({
  selector: 'app-demo-confirm',
  templateUrl: './demo-confirm.component.html',
  styleUrls: ['./demo-confirm.component.css']
})
export class DemoConfirmComponent implements OnInit {

  constructor(private confirm: TConfirm) {
  }

  ngOnInit() {
  }
  confirms() {
    this.confirm.confirm('nihao');
  }
}
