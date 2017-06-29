import {Component, OnInit} from '@angular/core';
import {TToast} from '../../../Tui/services/toast/toast';
import {TMessageBox} from '../../../Tui/services/message/message';
import {TConfirm} from '../../../Tui/services/confirm/confirm.service';
import {Tab} from '../../../Tui/components/tab/Tab';

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.component.html',
  styleUrls: ['./component-demo.component.css']
})
export class ComponentDemoComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }

}
