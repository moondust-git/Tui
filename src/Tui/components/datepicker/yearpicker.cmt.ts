import {AfterViewInit, Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
/**
 * Created by tc949 on 2017/7/11.
 */
@Component({
  selector: "Tyearpicker",
  template: `
    <p>
      <button class="btn " (click)="prepage()">pre</button>
      <button *ngFor="let year of years" class="btn " (click)="changeValue(year.num)">{{year.num}}</button>
      <button class="btn " (click)="nextpage()">next</button>
    </p>
  `
})
export class YearpickerComponent implements AfterViewInit {
  @Input("date")
  date: Date = new Date();
  years: any[] = [];
  readonly: boolean;

  @Output("onChange")
  public onChange: any = new EventEmitter<Date>();

  constructor() {
    this.getyears();
  }

  ngAfterViewInit(): void {
  }

  changeValue(number) {
    this.date = new Date(this.date.getTime());
    this.date.setUTCFullYear(number);
    this.onChange.emit(this.date);
  }

  getyears() {
    this.years = [];
    const thisyear = this.date.getFullYear();
    for (let i = thisyear - 4; i <= thisyear + 4; i++) {
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
