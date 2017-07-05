import {Injectable} from '@angular/core';
/**
 * Created by tc949 on 2017/6/26.
 */
@Injectable()
export class TConfirmConfig {
  okClass: string = 'btn-success';
  cancelClass: string = 'btn-danger';
  okText: string = 'OK';
  cancelText: string = 'CANCEL'
  showClose: boolean = false;
}
