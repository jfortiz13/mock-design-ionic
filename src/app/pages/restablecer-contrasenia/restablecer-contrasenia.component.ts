import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonItem, IonText, IonButton, IonRouterLink,  } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-restablecer-contrasenia',
  templateUrl: './restablecer-contrasenia.component.html',
  styleUrls: ['./restablecer-contrasenia.component.scss'],
  imports: [HeaderComponent, IonContent, IonItem, IonGrid, IonRow, IonCol, IonText, IonButton, IonRouterLink, RouterModule,
    IonInput, FooterComponent],
})
export class RestablecerContraseniaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
