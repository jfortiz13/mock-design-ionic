import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, } from '@ionic/angular/standalone';
import { ToastService } from 'src/app/services/notifications/toast.service';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton,]
})
export default class ToastPage {
  constructor(private toast: ToastService) { }

  showSuccess(message: string) {
    this.toast.success(message);
  }

  showError(message: string) {
    this.toast.error(message);
  }

  showInfo(message: string) {
    this.toast.info(message);
  }

  async showWarning(message: string) {
    this.toast.warning(message);
  }

}
