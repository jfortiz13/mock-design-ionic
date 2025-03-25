import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonList, IonBadge, IonGrid, IonCol, IonRow, IonIcon,  } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { camera, cardSharp, cloudDownloadSharp, listCircle, locateSharp, navigateSharp, personCircleSharp, syncCircleSharp } from 'ionicons/icons';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  imports: [IonCol, IonGrid, IonContent, IonCard, IonBadge, IonRow, IonCardContent, IonIcon,
    IonItem,
    IonLabel,
    IonList,
]
})
export default class PrincipalComponent  implements OnInit {

  constructor() {
    addIcons({ camera, listCircle, personCircleSharp, cloudDownloadSharp, locateSharp, navigateSharp, syncCircleSharp, cardSharp });
  }

  ngOnInit() {}

  onClick() {
    console.log("click")
  }
}
