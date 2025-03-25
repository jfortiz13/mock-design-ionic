import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonList, IonRouterLink,  } from '@ionic/angular/standalone';
import { AlertService } from 'src/app/services/notifications/alert.service';

@Component({
  selector: 'app-captura-datos-movil',
  templateUrl: './captura-datos-movil.component.html',
  styleUrls: ['./captura-datos-movil.component.scss'],
  imports: [IonContent, IonItem, IonButton, IonList, IonLabel,
      IonRouterLink, RouterModule, IonInput, FormsModule, CommonModule],
})
export default class CapturaDatosMovilComponent  implements OnInit {

  constructor( private alert: AlertService,  private router: Router,) { }

  ngOnInit() {}

  guardar() {
    const alertButtons = [
      {
        text: 'Aceptar',
        role: 'cancel',
        handler: () => {
          this.router.navigate(['/login']);
        },
      }];
    this.alert.success('Registro exitoso.', '', alertButtons);
  }

}
