import {Component, OnInit} from '@angular/core';
import {TLayer} from '../../../../Tui/services/layer/layer';

@Component({
  selector: 'app-demo-modal',
  templateUrl: './demo-modal.component.html',
  styleUrls: ['./demo-modal.component.css']
})
export class DemoModalComponent implements OnInit {

  constructor(public layer: TLayer) {
  }

  ngOnInit() {
  }

  showLayer(modal: any) {
    this.layer.show(modal, {size: 'sm', shadow: true, keyboard: false});

  }

  showAlert() {
    this.layer.alert("sdasd")
      .ok(() => {
        console.log('ok')
      })
      .cancel(() => {
        console.log('cancel')
      })
      .dismiss(() => {
        console.log('dismiss')
      });
  }
}
