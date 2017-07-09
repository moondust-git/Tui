import { Injectable } from '@angular/core';

@Injectable()
export class TTabsetConfig {
  /** provides default navigation context class: 'tabs' or 'pills' */
  public type: string = 'tabs';
}
