import {Component, OnInit} from "@angular/core";
import {TLayer} from "../../../../Tui/services/layer/layer";

@Component({
  selector: 'app-demo-confirm',
  templateUrl: './demo-confirm.component.html',
  styleUrls: ['./demo-confirm.component.css']
})
export class DemoConfirmComponent implements OnInit {

  constructor(private confirm: TLayer) {
  }

  ngOnInit() {

  }
  confirms() {
    this.confirm.alert('nihao')
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
