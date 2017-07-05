import {Injectable} from '@angular/core';
/**
 * Created by tc949 on 2017/7/5.
 */
@Injectable()
export class TAlertConfig {
  level?: 'success' | 'info' | 'warning' | 'danger' = 'success';
  dismiss?: boolean = true;
}
