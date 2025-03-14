import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonItem, IonText, IonButton, IonRouterLink,  } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
@Component({
  selector: 'app-actualizar-contrasenia',
  templateUrl: './actualizar-contrasenia.component.html',
  styleUrls: ['./actualizar-contrasenia.component.scss'],
  imports: [HeaderComponent, IonContent, IonItem, IonGrid, IonRow, IonCol, IonText, IonButton, IonRouterLink, RouterModule,
      IonInput, FooterComponent],
})
export class ActualizarContraseniaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
