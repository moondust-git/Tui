import {Injectable} from "@angular/core";
/**
 * Created by tc949 on 2017/7/9.
 */
@Injectable()
export class TButtonGroupConfig {

  size: 'md' | 'lg' | 'sm' = 'md';

  readonly: boolean = false;

  vertical: boolean = false;
}
