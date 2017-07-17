import {AfterViewInit, Component, EventEmitter, OnDestroy} from "@angular/core";
import {TConfirmConfig} from "./confirm.config";
import {copyWithOutOverwrite} from "../../util/util";
@Component({
  selector: 'modal-confim',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button *ngIf="showClose" type="button" class="close" aria-label="Close" (click)="close()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" [innerHtml]="content">
    </div>
    <div class="modal-footer">
      <button class="btn {{okClass}}" (click)="ok()">{{okText}}</button>
      <button class="btn {{cancelClass}}" *ngIf="isConfirm" (click)="cancel()">{{cancelText}}
      </button>
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

  eventEmit: EventEmitter<string> = new EventEmitter<string>();

  ngOnDestroy(): void {
  }


  ngAfterViewInit(): void {
  }

  constructor(protected config: TConfirmConfig) {
    copyWithOutOverwrite(config, this);
  }

  ok() {
    this.eventEmit.emit("ok")
  }

  cancel() {
    this.eventEmit.emit("cancel")

  }

  close() {
    this.eventEmit.emit();
  }


}
