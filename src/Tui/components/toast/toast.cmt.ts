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
      toast.event.emit('show');
    }, 1);
    setTimeout(() => {
        this.removeToast(toast.id);
      },
      toast.options.timeLong ? toast.options.timeLong : 3000);
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
    this.toasts.forEach((t: ToastEntity) => {
      if (t.id === toastId) {
        if (t.isVisible) {
          t.isVisible = false;
          setTimeout(() => {
            this.toasts = this.toasts.filter((toast) => {
              return toast.id !== toastId;
            });
            t.event.emit('hide');
          }, 300);
        }
      }
    });
  }

  /**
   * remove all toasts
   * @param toastId number of toast id
   */
  removeAllToasts() {
    this.toasts.forEach((t: ToastEntity) => {
      this.removeToast(t.id);
    });
  }

  /**
   * check has any toast
   * @return boolean
   */
  hasToast(): boolean {
    return this.toasts.length > 0;
  }
}
