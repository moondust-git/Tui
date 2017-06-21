import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TTabs} from './tab';
import {TTabHeaders, TTabHeadersItem} from './headers.cmt';
/**
 * Created by tc949 on 2017/6/21.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [TTabs, TTabHeaders, TTabHeadersItem],
  exports: [TTabs, TTabHeadersItem, TTabHeaders],
  providers: []
})
export class TTabsModule {

}
