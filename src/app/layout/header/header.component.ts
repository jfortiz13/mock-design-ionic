import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
    imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonTitle],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
