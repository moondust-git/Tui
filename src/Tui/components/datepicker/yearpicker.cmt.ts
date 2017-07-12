import {AfterViewInit, Component, EventEmitter, Input, Output} from "@angular/core";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
/**
 * Created by tc949 on 2017/7/11.
 */
@Component({
  selector: "Tyearpicker",
  template: `
    <table class="table-condensed">
      <thead>
      <tr>
        <th class="prev" style="visibility: visible;" (click)="prepage()">&lt;</th>
        <th colspan="5" class="switch">{{date | date:format}}</th>
        <th class="next" style="visibility: visible;" (click)="nextpage()">&gt;</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td colspan="7">
          <span class="year" *ngFor="let year of years" (click)="changeValue(year.num)"
                [ngClass]="{'active':date&&year.num==date.getFullYear()}">{{year.num}}</span>

        </td>
      </tr>
      </tbody>
    </table>
  `
})
export class YearpickerComponent implements AfterViewInit {
  @Input("date")
  date: Date = new Date()
  years: any[] = [];
  readonly: boolean;

  @Input("format")
  format: string = 'yyyy';

  @Output("onChange")
  public onChange: any = new EventEmitter<Date>();

  constructor(private timepicker: TDatetimePickerComponent) {
    this.getyears();
  }

  ngAfterViewInit(): void {
  }

  changeValue(number) {
    this.date = new Date(this.date.getTime());
    this.date.setFullYear(number);
    this.onChange.emit(this.date);
    this.timepicker.nextPicker("month");
  }


  getyears() {
    this.years = [];
    const thisyear = this.date.getFullYear();
    for (let i = thisyear - 5; i <= thisyear + 6; i++) {
      this.years.push({num: i});
    }
  }

  prepage() {
    for (const i in this.years) {
      this.years[i].num = this.years[i].num - 9;
    }
  }

  nextpage() {
    for (const i in this.years) {
      this.years[i].num = this.years[i].num + 9;
    }
  }
}
