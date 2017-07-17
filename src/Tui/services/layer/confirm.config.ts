import {Injectable} from '@angular/core';
import {TLayerConfig} from "./layer-config";
/**
 * Created by tc949 on 2017/6/26.
 */
@Injectable()
export class TConfirmConfig extends TLayerConfig {
  okClass?: string = 'btn-success';
  cancelClass?: string = 'btn-danger';
  okText?: string = 'OK';
  cancelText?: string = 'CANCEL';
  showClose?: boolean = false;
  title?: string = '提示';
  content?: string = '';
  isConfirm?: boolean = false;
}
