import {Component, ViewEncapsulation} from '@angular/core';
import {ToastEntity} from './toast.entity';
/**
 * Created by tc949 on 2017/6/20.
 */

@Component({
  selector: 'Ttoast',
  templateUrl: 'toast.html',
  styleUrls: ['toast.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent {
  toasts: ToastEntity[] = [];
  maxShown = 5;
  postion: string;

  /**
   * add toast
   * @param toast toast object with all parameters
   */
  addToast(toast: ToastEntity): number {
    setTimeout(() => {
      toast.isVisible = true;
    }, 1);
    toast.onhide.subscribe((id) => {
      this.removeToast(id);
    });
    this.toasts.push(toast);
    if (this.toasts.length > this.maxShown) {
      this.toasts[0].isVisible = false;
      setTimeout(() => {
        this.toasts.splice(0, (this.toasts.length - this.maxShown));
      }, 250);
    }
    return toast.id;
  }

  /**
   * remove toast
   * @param toastId number of toast id
   */
  removeToast(toastId: number) {
    this.toasts.forEach((t: any) => {
      if (t.id === toastId) {
        t.isVisible = false;
      }
    });
    setTimeout(() => {
      this.toasts = this.toasts.filter((toast) => {
        return toast.id !== toastId;
      });
    }, 300);
  }

  /**
   * remove all toasts
   * @param toastId number of toast id
   */
  removeAllToasts() {
    this.toasts.forEach((t: any) => {
      t.isVisible = false;
    });
    setTimeout(() => {
      this.toasts = [];
    }, 250);
  }

  /**
   * check has any toast
   * @return boolean
   */
  hasToast(): boolean {
    return this.toasts.length > 0;
  }
}
