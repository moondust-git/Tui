import {Component, OnInit} from '@angular/core';
import {DatePickerInnerComponent} from './datepicker-inner.cmt';

// write an interface for template options
const TEMPLATE_OPTIONS: any = {
  'bs4': {
    ARROW_LEFT: '&lt;',
    ARROW_RIGHT: '&gt;'
  }
};

@Component({
  selector: 'daypicker',
  templateUrl: './daypicker.html'
})
export class DayPickerComponent implements OnInit {

  public labels: any[] = [];
  public title: string;
  public rows: any[] = [];
  public datePicker: DatePickerInnerComponent;
  public CURRENT_THEME_TEMPLATE: any;

  public constructor(datePicker: DatePickerInnerComponent) {
    this.CURRENT_THEME_TEMPLATE = TEMPLATE_OPTIONS.bs4;
    this.datePicker = datePicker;
  }


  /*protected getDaysInMonth(year:number, month:number) {
   return ((month === 1) && (year % 4 === 0) &&
   ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
   }*/
  public ngOnInit(): void {
    let self = this;

    this.datePicker.stepDay = {months: 1};

    this.datePicker.setRefreshViewHandler(function (): void {
      let year = this.activeDate.getFullYear();
      let month = this.activeDate.getMonth();
      let firstDayOfMonth = new Date(year, month, 1);
      let difference = this.startingDay - firstDayOfMonth.getDay();
      let numDisplayedFromPreviousMonth = (difference > 0)
        ? 7 - difference
        : -difference;
      let firstDate = new Date(firstDayOfMonth.getTime());

      if (numDisplayedFromPreviousMonth > 0) {
        firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
      }

      // 42 is the number of days on a six-week calendar
      let _days: Date[] = self.getDates(firstDate, 42);
      let days: any[] = [];
      for (let i = 0; i < 42; i++) {
        let _dateObject = this.createDateObject(_days[i], this.formatDay);
        _dateObject.secondary = _days[i].getMonth() !== month;
        _dateObject.uid = this.uniqueId + '-' + i;
        days[i] = _dateObject;
      }

      self.labels = [];
      for (let j = 0; j < 7; j++) {
        self.labels[j] = {};
        self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
        self.labels[j].full = this.dateFilter(days[j].date, 'EE');
      }


      self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
      self.rows = this.split(days, 7);
    }, 'day');
    this.datePicker.setCompareHandler(function (date1: Date, date2: Date): number {
      let d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
      let d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
      return d1.getTime() - d2.getTime();
    }, 'day');

    this.datePicker.refreshView();
  }

  protected getDates(startDate: Date, n: number): Date[] {
    let dates: Date[] = new Array(n);
    let current = new Date(startDate.getTime());
    let i = 0;
    let date: Date;
    while (i < n) {
      date = new Date(current.getTime());
      date = this.datePicker.fixTimeZone(date);
      dates[i++] = date;
      current = new Date(current.getFullYear(), current.getMonth(), current.getDate() + 1);
    }
    return dates;
  }

  protected getISO8601WeekNumber(date: Date): number {
    let checkDate = new Date(date.getTime());
    // Thursday
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    let time = checkDate.getTime();
    // Compare with Jan 1
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
  }

  // todo: key events implementation
}
