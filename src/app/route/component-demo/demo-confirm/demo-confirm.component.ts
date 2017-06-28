import {Component, OnInit} from '@angular/core';
import {TConfirm} from '../../../../Tui/components/confirm/confirm.service';
import {ConfirmConfig} from '../../../../Tui/components/confirm/confirm.config';

@Component({
  selector: 'app-demo-confirm',
  templateUrl: './demo-confirm.component.html',
  styleUrls: ['./demo-confirm.component.css']
})
export class DemoConfirmComponent implements OnInit {

  constructor(private confirm: TConfirm, private confirmConfig: ConfirmConfig) {
    confirmConfig.okText = '确认';
  }

  ngOnInit() {
  }

  confirms() {
    // this.confirm.confirm('nihao',{okText:'yes',cancelText:'no'})
    //   .ok(() => {
    //     console.log('ok')
    //   })
    //   .cancel(() => {
    //     console.log('cancel')
    //   })
    //   .dismiss(() => {
    //     console.log('dismiss')
    //   });
  }
}
