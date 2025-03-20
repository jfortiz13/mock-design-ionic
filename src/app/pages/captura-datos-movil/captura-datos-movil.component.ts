import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonList, IonRouterLink,  } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { AlertService } from 'src/app/services/notifications/alert.service';

@Component({
  selector: 'app-captura-datos-movil',
  templateUrl: './captura-datos-movil.component.html',
  styleUrls: ['./captura-datos-movil.component.scss'],
  imports: [HeaderComponent, IonContent, IonItem, IonButton, IonList, IonLabel,
      IonRouterLink, RouterModule, IonInput, FooterComponent, FormsModule, CommonModule],
})
export class CapturaDatosMovilComponent  implements OnInit {

  constructor( private alert: AlertService) { }

  ngOnInit() {}

  guardar() {
    this.alert.success('Registro exitoso.', '');
  }

}
