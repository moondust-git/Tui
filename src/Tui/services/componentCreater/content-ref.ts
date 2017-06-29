import {ComponentRef, ViewRef} from '@angular/core';
/**
 * Created by tc949 on 2017/6/29.
 */
export class ContentRef {
  constructor(public nodes: any[], public viewRef?: ViewRef, public componentRef?: ComponentRef<any>) {
  }
}
