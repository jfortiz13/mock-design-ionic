import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonList, IonRouterLink,  } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
@Component({
  selector: 'app-resgitro',
  templateUrl: './resgitro.component.html',
  styleUrls: ['./resgitro.component.scss'],
  imports: [HeaderComponent, IonContent, IonItem, IonButton, IonList, IonLabel,
    IonRouterLink, RouterModule, IonInput, FooterComponent, FormsModule, CommonModule],
})
export class ResgitroComponent  implements OnInit {
  private router = inject(Router);
  constructor() {

  }

  ngOnInit() {

  }

  ionViewWillEnter() {
  }

  siguiente() {
    this.router.navigate(['/captura-fotos-usuario'])
  }
}
