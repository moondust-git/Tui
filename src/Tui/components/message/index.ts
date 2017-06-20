/**
 * Created by tc949 on 2017/6/20.
 */
/**
 * Created by tc949 on 2017/6/20.
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MessageComponent} from './message.cmt';
import {TMessageBox} from './message';


@NgModule({
  imports: [CommonModule],
  declarations: [MessageComponent],
  entryComponents: [MessageComponent],
  providers: [TMessageBox]
})

export class TMessageModule {

}
