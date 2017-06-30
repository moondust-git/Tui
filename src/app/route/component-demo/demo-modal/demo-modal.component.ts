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
    this.layer.show(modal);
  }

}
