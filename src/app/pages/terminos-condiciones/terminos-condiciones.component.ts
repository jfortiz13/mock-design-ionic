import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonRouterLink,  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.scss'],
  imports: [IonContent, IonGrid, IonRow, IonCol, IonButton, IonRouterLink, RouterModule,
      ],
})
export default class TerminosCondicionesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
