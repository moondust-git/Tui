import {Component, EventEmitter, forwardRef, Input, Output} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
import {TPaginationConfig} from "./pagination.config";
import {copyWithOutOverwrite} from "../../util/util";
@Component({
  selector: 'Tpagination',
  template: `
    <li class="page-item" *ngIf="firstText" [ngClass]="{'disabled':page<=1}">
      <a class="page-link" href="javascript:void(0);" (click)="selectPage(1)" [innerHtml]="firstText"></a>
    </li>
    <li class="page-item" [ngClass]="{'disabled':page<=1}" *ngIf="previousText">
      <a class="page-link" href="javascript:void(0);" (click)="previous()" [innerHtml]="previousText"></a>
    </li>
    <li class="page-item {{pageBtnClass}}" *ngFor="let p of pages" [ngClass]="{'active':p.active}">
      <a class="page-link" (click)="selectPage(p.number)"
         href="javascript:void(0);">{{p.number}}</a>
    </li>
    <li class="page-item" *ngIf="nextText" [ngClass]="{'disabled':page>=totalPage}">
      <a class="page-link" href="javascript:void(0);" (click)="next()" [innerHtml]="nextText"></a>
    </li>

    <li class="page-item" *ngIf="lastText" [ngClass]="{'disabled':page>=totalPage}">
      <a class="page-link" href="javascript:void(0);" (click)="selectPage(totalPage)" [innerHtml]="lastText"></a>
    </li>
  `,
  host: {"class": "pagination"},
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TPaginationComponent),
    multi: true
  }]
})
export class TPaginationComponent implements ControlValueAccessor {


  @Input("totalPage")
  totalPage: number;

  @Input("maxSize")
  maxSize: number;

  @Input("rorate")
  rotate: boolean;

  @Input("firstText")
  firstText: string;

  @Input("lastText")
  lastText: string;

  @Input("previousText")
  previousText: string;

  @Input("nextText")
  nextText: string;

  @Input("pageBtnClass")
  pageBtnClass: string;

  @Output("change")
  changeEvent: any = new EventEmitter<number>();
  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;
  public pages: any = [];

  private _page: number;
  set page(value: number) {
    if (!isNullOrUndefined(this.page)) this.changeEvent.emit(value);
    this._page = value;
    this.onChange(value);
  }

  get page(): number {
    return this._page;
  }

  constructor(private config: TPaginationConfig) {
    copyWithOutOverwrite(config, this);
  }

  writeValue(v: number): void {
    if (!isNullOrUndefined(v)) {
      this.page = v;
      this.pages = this.getPages(this._page, this.totalPage);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }


  previous() {
    this.selectPage(this._page - 1);
  }

  next() {
    this.selectPage(this._page + 1);
  }


  selectPage(page: number) {
    if (page <= this.totalPage && page >= 1 && this._page != page) {
      this.writeValue(page);
    }
  }

  protected getPages(currentPage: number, totalPages: number): any[] {
    let pages: any[] = [];
    // Default page limits
    let startPage = 1;
    let endPage = totalPages;
    let isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      if (this.rotate) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
        endPage = startPage + this.maxSize - 1;

        // Adjust if limit is exceeded
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - this.maxSize + 1;
        }
      } else {
        // Visible pages are paginated with maxSize
        startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;

        // Adjust last page if limit is exceeded
        endPage = Math.min(startPage + this.maxSize - 1, totalPages);
      }
    }

    // Add page number links
    for (let num = startPage; num <= endPage; num++) {
      let page = this.makePage(num, num.toString(), num === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && !this.rotate) {
      if (startPage > 1) {
        let previousPageSet = this.makePage(startPage - 1, '...', false);
        pages.unshift(previousPageSet);
      }

      if (endPage < totalPages) {
        let nextPageSet = this.makePage(endPage + 1, '...', false);
        pages.push(nextPageSet);
      }
    }

    return pages;
  }

  protected makePage(num: number, text: string, active: boolean): { number: number, text: string, active: boolean } {
    return {text, number: num, active};
  }
}
