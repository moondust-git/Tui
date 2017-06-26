import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
import {TActiveModal} from '../modal/modal-ref';
@Component({
  selector: 'modal-confim',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('close')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" [innerHtml]="content">
    </div>
    <div class="modal-footer">
      <button class="btn btn-default" (click)="activeModal.close('ok')">Okay</button>
      <button class="btn btn-default" *ngIf="isConfirm" (click)="activeModal.dismiss('cancel')">Cancel</button>
    </div>
  `,
})
export class ConfirmCmt implements AfterViewInit, OnDestroy {


  title: string = '提示';

  content: string = '';

  isConfirm: boolean = false;


  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
  }

  constructor(private _elRef: ElementRef, public activeModal: TActiveModal) {
  }
}
