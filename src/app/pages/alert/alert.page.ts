import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, } from '@ionic/angular/standalone';
import { AlertService } from 'src/app/services/notifications/alert.service';
import { IonButton } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, ]
})
export default class AlertPage implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit() {
  }

  showSuccess(message: string) {
    this.alert.success(message);
  }

  showError(message: string) {
    this.alert.error(message);
  }

  showInfo(message: string) {
    this.alert.info(message);
  }

  showWarning(message: string) {
    this.alert.warning(message);
  }

}
