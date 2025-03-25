import { Component, OnInit } from '@angular/core';
import {
  IonButton, IonCol, IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonButton, IonCol, IonRow,]
})
export default class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
