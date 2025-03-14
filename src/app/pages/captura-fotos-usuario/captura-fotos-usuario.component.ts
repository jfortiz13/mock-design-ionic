import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonItem, IonLabel, IonButton, IonList, IonRouterLink, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonIcon,   } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, close, image } from 'ionicons/icons';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-captura-fotos-usuario',
  templateUrl: './captura-fotos-usuario.component.html',
  styleUrls: ['./captura-fotos-usuario.component.scss'],
  imports: [HeaderComponent, IonContent, IonItem, IonButton, IonList, IonLabel, IonIcon,
      IonRouterLink, RouterModule, FooterComponent, FormsModule, CommonModule],
})
export class CapturaFotosUsuarioComponent  implements OnInit {
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
