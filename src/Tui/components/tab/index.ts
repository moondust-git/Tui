/**
 * Created by tc949 on 2017/6/26.
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TabSet} from './TabSet';
import {Tab} from './Tab';

@NgModule({
  imports: [CommonModule],
  declarations: [TabSet,Tab],
  exports: [TabSet,Tab],
})

export class TTabsetModule {

}
