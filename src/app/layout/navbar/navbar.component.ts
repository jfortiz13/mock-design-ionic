import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonHeader, IonRow, IonCol,IonImg, IonGrid } from '@ionic/angular/standalone';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [IonRow, IonCol,IonImg, IonToolbar, IonHeader, IonGrid
  ],
})
export class NavbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
