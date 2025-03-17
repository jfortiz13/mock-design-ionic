import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

constructor(private alertController: AlertController) { }


  success(message: string) {
    this.createAlert(message, this.SUCCESS_ALERT_CSS_CLASS, this.SUCCESS_ALERT_HEADER);
  }

  error(message: string) {
    this.createAlert(message, this.DANGER_ALERT_CSS_CLASS, this.DANGER_ALERT_HEADER);
  }

  info(message: string) {
    this.createAlert(message, this.INFO_ALERT_CSS_CLASS, this.INFO_ALERT_HEADER);
  }

  warning(message: string) {
    this.createAlert(message, this.WARNING_ALERT_CSS_CLASS, this.WARNING_ALERT_HEADER);
  }

  private async createAlert(message: string, cssClass: string, header: string) {

    const alert = await this.alertController.create({
      header,
      message,
      cssClass,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
