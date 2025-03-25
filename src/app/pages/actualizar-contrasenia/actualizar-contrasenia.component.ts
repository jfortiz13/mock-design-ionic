import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonItem, IonText, IonButton, IonRouterLink,  } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { AlertService } from 'src/app/services/notifications/alert.service';
@Component({
  selector: 'app-actualizar-contrasenia',
  templateUrl: './actualizar-contrasenia.component.html',
  styleUrls: ['./actualizar-contrasenia.component.scss'],
  imports: [IonContent, IonItem, IonGrid, IonRow, IonCol, IonText, IonButton, IonRouterLink, RouterModule,
      IonInput,],
})
export default class ActualizarContraseniaComponent  implements OnInit {

  constructor( private alert: AlertService) { }

  ngOnInit() {}

  actualizar() {
    this.alert.success('Actualización exitosa.', '');
  }

}
