/**
 * Created by tc949 on 2017/6/20.
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {MessageEntity} from './message.entity';
/**
 * Created by tc949 on 2017/6/20.
 */

@Component({
  selector: 'Tmessage',
  templateUrl: 'message.html',
  styleUrls: ['message.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent {
  messages: MessageEntity[] = [];
  maxShown = 8;
  postion: string;

  addToast(toast: MessageEntity): number {
    setTimeout(() => {
      toast.isVisible = true;
    }, 1);
    setTimeout(() => {
      this.removeMessage(toast.id);
    }, toast.options.timeLong ? toast.options.timeLong : 5000);
    this.messages.push(toast);
    if (this.messages.length > this.maxShown) {
      this.messages[0].isVisible = false;
      setTimeout(() => {
        this.messages.splice(0, (this.messages.length - this.maxShown));
      }, 250);
    }
    return toast.id;
  }

  removeMessage(messageId: number) {
    this.messages.forEach((t: MessageEntity) => {
      if (t.id === messageId) {
        if (t.isVisible) {
          t.isVisible = false;
          setTimeout(() => {
            this.messages = this.messages.filter((message) => {
              return message.id !== messageId;
            });
            t.onhide.emit(messageId);
          }, 300);
        }
      }
    });

  }

  removeAllMessage() {
    this.messages.forEach((t: any) => {
      this.removeMessage(t.id);
    });
  }

  hasMessage(): boolean {
    return this.messages.length > 0;
  }
}
