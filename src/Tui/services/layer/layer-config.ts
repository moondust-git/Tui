/**
 * Created by tc949 on 2017/7/5.
 */
import {Injectable} from '@angular/core';
@Injectable()
export class TLayerConfig {
  backdrop?: boolean | string = false;
  keyboard? = false;
  shadow?: boolean = true;
  size?: string = 'md';
}
