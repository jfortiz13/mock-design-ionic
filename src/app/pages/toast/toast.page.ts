import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonToast } from '@ionic/angular/standalone';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [FooterComponent, HeaderComponent, IonContent, CommonModule, FormsModule, IonButton, IonToast]
})
export class ToastPage {
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
