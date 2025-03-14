import { Component, OnInit } from '@angular/core';
import {
  IonButton, IonCol, IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { FooterComponent } from "../../layout/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonButton, FooterComponent, IonCol, IonRow, HeaderComponent]
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
