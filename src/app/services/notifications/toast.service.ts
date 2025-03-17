import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
private readonly TOAST_DURATION = 5000;
private readonly SUCCESS_TOAST_CSS_CLASS = 'success-toast';
private readonly DANGER_TOAST_CSS_CLASS = 'danger-toast';
private readonly INFO_TOAST_CSS_CLASS = 'info-toast';
private readonly WARNING_TOAST_CSS_CLASS = 'warning-toast';

private activeToast?: HTMLIonToastElement;

constructor(private toastController: ToastController) { }


  success(message: string) {
    this.createToast(message, this.SUCCESS_TOAST_CSS_CLASS)
  }

  error(message: string) {
    this.createToast(message, this.DANGER_TOAST_CSS_CLASS);
  }

  info(message: string) {
    this.createToast(message, this.INFO_TOAST_CSS_CLASS);
  }

  warning(message: string) {
    this.createToast(message, this.WARNING_TOAST_CSS_CLASS);
  }

  private async createToast(message: string, cssClass: string) {

    if (this.activeToast) {
      await this.activeToast.dismiss();
    }

    const toast = await this.toastController.create({
      message,
      cssClass,
      duration: this.TOAST_DURATION,
      position: 'bottom',
      buttons: [
        {
          text: 'x',
          role: 'cancel'
        }
      ],
      mode: 'ios'
    });

    this.activeToast = toast;
    await toast.present();
  }
}
