import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonList, IonRouterLink,  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-resgitro',
  templateUrl: './resgitro.component.html',
  styleUrls: ['./resgitro.component.scss'],
  imports: [IonContent, IonItem, IonButton, IonList, IonLabel,
    IonRouterLink, RouterModule, IonInput, FormsModule, CommonModule],
})
export default class ResgitroComponent  implements OnInit {
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
