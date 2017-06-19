import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
import {TActiveModal} from '../modal/modal-ref';
@Component({
  selector: 'div.modal-confim',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('close')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p [innerHtml]="content"></p>
    </div>
    <div class="modal-footer ">
      <button type="button" class="btn btn-success" (click)="activeModal.close('ok')">确认</button>
      <button type="button" *ngIf="isConfirm" class="btn btn-secondary " (click)="activeModal.dismiss('cancel')">取消
      </button>
    </div>
  `
})
export class ConfirmCmt implements AfterViewInit, OnDestroy {

  title: string = 'alert';

  content: string = '';

  isConfirm: boolean = false;


  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  constructor(private _elRef: ElementRef, public activeModal: TActiveModal) {
  }
}
