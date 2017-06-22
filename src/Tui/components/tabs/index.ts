import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TTabs} from './tab';
import {TTabHeaders, TTabHeadersItem} from './headers.cmt';
import {BodyItem, TTabBody} from './body.cmt';
/**
 * Created by tc949 on 2017/6/21.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [TTabs, TTabHeaders, TTabHeadersItem, TTabBody, BodyItem],
  exports: [TTabs, TTabHeadersItem, TTabHeaders, TTabBody, BodyItem],
  providers: []
})
export class TTabsModule {

}
