import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonRouterOutlet, IonContent, IonToolbar, IonFooter, IonRow, IonGrid, IonCol, IonHeader, IonTitle, } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [IonContent, IonRouterOutlet, FooterComponent, HeaderComponent, RouterModule,
  ]
})
export default class LayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
