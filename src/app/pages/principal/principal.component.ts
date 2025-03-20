import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonBadge, IonGrid, IonCol, IonRow, IonButton, IonIcon, IonNote } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { camera, listCircle } from 'ionicons/icons';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  imports: [IonCol, IonGrid, IonContent, FooterComponent, HeaderComponent, IonCard, IonBadge, IonRow, IonCardContent, IonButton, IonIcon, IonNote,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
]
})
export class PrincipalComponent  implements OnInit {

  constructor() {
    addIcons({ camera, listCircle });
  }

  ngOnInit() {}

}
