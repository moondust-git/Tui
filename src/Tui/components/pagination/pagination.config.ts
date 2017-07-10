// todo: split
import {Injectable} from '@angular/core';

/** Provides default values for Pagination and pager components */
@Injectable()
export class TPaginationConfig {
  totalPage: number = 10;
  maxSize: number = 5;
  firstText: string = 'First';
  lastText: string = 'Last';
  previousText: string = '«';
  nextText: string = '»';
  pageBtnClass: string = '';
  rotate: boolean = true;
}
