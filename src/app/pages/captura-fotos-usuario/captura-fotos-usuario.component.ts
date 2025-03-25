import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonItem, IonLabel, IonButton, IonList, IonRouterLink, IonIcon,   } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, close, image } from 'ionicons/icons';

@Component({
  selector: 'app-captura-fotos-usuario',
  templateUrl: './captura-fotos-usuario.component.html',
  styleUrls: ['./captura-fotos-usuario.component.scss'],
  imports: [IonContent, IonItem, IonButton, IonList, IonLabel, IonIcon,
      IonRouterLink, RouterModule, FormsModule, CommonModule],
})
export default class CapturaFotosUsuarioComponent  implements OnInit {
  private router = inject(Router);

  constructor() {
    addIcons({ camera, image, close });
  }

  ngOnInit() {}

  remove() {

  }

  siguiente() {
    this.router.navigate(['/captura-datos-movil'])
  }

}
