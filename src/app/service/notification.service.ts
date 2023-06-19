import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  onDefault(message: string): void {
    this.notifier.notify(Type.DEFAULT, message);
  }

  onSucces(message: string): void {
    this.notifier.notify(Type.SUCCESS, message);
  }

  onWarning(message: string): void {
    this.notifier.notify(Type.WARNING, message);
  }

  onInfo(message: string): void {
    this.notifier.notify(Type.INFO, message);
  }

  onError(message: string): void {
    this.notifier.notify(Type.ERROR, message);
  }

}

enum Type {
  DEFAULT = 'default',
  INFO = 'info',
  WARNING = 'warning',
  SUCCESS = 'success',
  ERROR = 'error',
}
