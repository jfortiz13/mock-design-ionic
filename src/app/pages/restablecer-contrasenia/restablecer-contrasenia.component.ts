import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonItem, IonText, IonButton, IonRouterLink,  } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-restablecer-contrasenia',
  templateUrl: './restablecer-contrasenia.component.html',
  styleUrls: ['./restablecer-contrasenia.component.scss'],
  imports: [IonContent, IonItem, IonGrid, IonRow, IonCol, IonText, IonButton, IonRouterLink, RouterModule,
    IonInput,],
})
export default class RestablecerContraseniaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
