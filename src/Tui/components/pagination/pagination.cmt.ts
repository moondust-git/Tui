import {Component, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
@Component({
  selector: 'Tpagination',
  template: `
    <li class="page-item" [ngClass]="{'disabled':page<=1}">
      <a class="page-link" href="javascript:void(0);" (click)="previous()">Previous</a>
    </li>
    <li class="page-item" *ngFor="let p of pages" [ngClass]="{'active':p.active}">
      <a class="page-link" (click)="selectPage(p.number)"
         href="javascript:void(0);">{{p.number}}</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="javascript:void(0);" (click)="next()">Next</a>
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

  private onChange: any = Function.prototype;
  private onTouched: any = Function.prototype;
  public pages: any = [];

  private page: number;

  public totalPage: number = 20;

  public maxSize: number = 5;

  public rotate: boolean = true;

  writeValue(v: number): void {
    if (!isNullOrUndefined(v)) {
      this.page = v;
      this.pages = this.getPages(this.page, this.totalPage);
      console.log(this.pages)
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

  }

  next() {

  }

  selectPage(page: number) {
    this.writeValue(page);
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
