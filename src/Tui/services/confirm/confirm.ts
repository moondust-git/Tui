import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
import {TActiveModal} from '../modal/modal-ref';
import {TConfirmConfig} from './confirm.config';
import {isNullOrUndefined} from 'util';
@Component({
  selector: 'modal-confim',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button *ngIf="showClose" type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('dismiss')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" [innerHtml]="content">
    </div>
    <div class="modal-footer">
      <button class="btn {{okClass}}" (click)="activeModal.close('ok')">{{okText}}</button>
      <button class="btn {{cancelClass}}" *ngIf="isConfirm" (click)="activeModal.dismiss('cancel')">{{cancelText}}</button>
    </div>
  `,
})
export class ConfirmCmt implements AfterViewInit, OnDestroy {
  public title: string = '提示';
  public content: string = '';
  public okText: string;
  public cancelText: string;
  public okClass: string;
  public cancelClass: string;
  public showClose: boolean;
  public isConfirm: boolean = false;

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  constructor(public activeModal: TActiveModal, protected config: TConfirmConfig) {
    if (!this.okText) this.okText = config.okText;
    if (!this.cancelText) this.cancelText = config.cancelText;
    if (!this.okClass) this.okClass = config.okClass;
    if (!this.cancelClass) this.cancelClass = config.cancelClass;
    if (isNullOrUndefined(this.showClose)) this.showClose = config.showClose;
  }
}
