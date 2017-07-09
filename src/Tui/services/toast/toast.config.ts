import {Injectable} from "@angular/core";
/**
 * Created by tc949 on 2017/7/9.
 */
@Injectable()
export class TToastConfig {
  timeLong?: number = 3000;
  postion?: 'top' | 'center' | 'bottom' = "bottom"
}
