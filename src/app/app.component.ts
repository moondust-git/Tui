import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TModal} from '../Tui/components/modal/modal';
import {TConfirm} from '../Tui/components/confirm/confirm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  @ViewChild('modal')
  content;

  constructor(private confirm: TConfirm) {
  }

  ngAfterViewInit() {
    this.confirm.alert('hello world');
  }

}
