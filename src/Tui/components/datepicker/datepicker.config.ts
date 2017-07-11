import {Injectable} from '@angular/core';

@Injectable()
export class DatepickerConfig {
  public datepickerMode: string = 'day';
  public startingDay: number = 0;
  public yearRange: number = 20;
  public minMode: string = 'day';
  public maxMode: string = 'year';
  public showWeeks: boolean = false;
  public formatDay: string = 'dd';
  public formatMonth: string = 'MMMM';
  public formatYear: string = 'yyyy';
  public formatDayHeader: string = 'dd';
  public formatDayTitle: string = 'MMMM yyyy';
  public formatMonthTitle: string = 'yyyy';
  public onlyCurrentMonth: boolean = false;
  public monthColLimit: number = 3;
  public yearColLimit: number = 5;
  public shortcutPropagation: boolean = false;
}
