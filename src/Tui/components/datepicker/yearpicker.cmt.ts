import {AfterViewInit, Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
/**
 * Created by tc949 on 2017/7/11.
 */
@Component({
  selector: "Tyearpicker",
  template: `
    <button class="btn " (click)="prepage()">pre</button>
    <button *ngFor="let year of years" class="btn " (click)="changeValue(year)">{{year}}</button>
    <button class="btn " (click)="nextpage()">next</button>
    <label>{{date}}</label>
  `
})
export class YearpickerComponent implements AfterViewInit {

  @Input("date")
  date: Date = new Date();
  years: number[] = [];
  readonly: boolean;

  @Output("onChange")
  public onChange: any = new EventEmitter<Date>();

  constructor() {
    this.getyears();
  }

  ngAfterViewInit(): void {
  }

  changeValue(number) {
    console.log(number)
    this.date = new Date(this.date.getTime());
    this.date.setUTCFullYear(number);
    this.onChange.emit(this.date);
  }

  getyears() {
    this.years = [];
    const thisyear = this.date.getFullYear();
    for (let i = thisyear - 4; i <= thisyear + 4; i++) {
      this.years.push(i);
    }
  }

  prepage() {
    for (const i in this.years) {
      this.years[i] = this.years[i] - 9;
    }
  }

  nextpage() {
    for (const i in this.years) {
      this.years[i] = this.years[i] + 9;
    }
  }
}
