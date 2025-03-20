import { Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private readonly SUCCESS_ALERT_CSS_CLASS = 'success-alert';
  private readonly DANGER_ALERT_CSS_CLASS = 'danger-alert';
  private readonly INFO_ALERT_CSS_CLASS = 'info-alert';
  private readonly WARNING_ALERT_CSS_CLASS = 'warning-alert';
  private readonly SUCCESS_ALERT_HEADER = 'Éxito';
  private readonly DANGER_ALERT_HEADER = 'Error';
  private readonly INFO_ALERT_HEADER = 'Información';
  private readonly WARNING_ALERT_HEADER = 'Advertencia';
  private readonly BUTTON_ACEPTAR = 'Aceptar';

constructor(private alertController: AlertController) { }


  success(message: string, header: string = this.SUCCESS_ALERT_HEADER, buttons: Array<string> | Array<AlertButton> = [this.BUTTON_ACEPTAR]) {
    this.createAlert(message, this.SUCCESS_ALERT_CSS_CLASS, header, buttons);
  }

  error(message: string, header: string = this.DANGER_ALERT_HEADER, buttons: Array<string> | Array<AlertButton> = [this.BUTTON_ACEPTAR]) {
    this.createAlert(message, this.DANGER_ALERT_CSS_CLASS, header, buttons);
  }

  info(message: string, header: string = this.INFO_ALERT_HEADER, buttons: Array<string> | Array<AlertButton> = [this.BUTTON_ACEPTAR]) {
    this.createAlert(message, this.INFO_ALERT_CSS_CLASS, header, buttons);
  }

  warning(message: string, header: string = this.WARNING_ALERT_HEADER, buttons: Array<string> | Array<AlertButton> = [this.BUTTON_ACEPTAR]) {
    this.createAlert(message, this.WARNING_ALERT_CSS_CLASS, header, buttons);
  }

  private async createAlert(message: string, cssClass: string, header: string, buttons: Array<string> | Array<AlertButton>) {

    const alert = await this.alertController.create({
      header,
      message,
      cssClass,
      buttons: buttons
    });

    await alert.present();
  }
}
