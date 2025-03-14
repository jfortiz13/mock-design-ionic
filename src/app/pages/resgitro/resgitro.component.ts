import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonList, IonRouterLink, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView  } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
@Component({
  selector: 'app-resgitro',
  templateUrl: './resgitro.component.html',
  styleUrls: ['./resgitro.component.scss'],
  imports: [HeaderComponent, IonContent, IonItem, IonButton, IonList, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel, IonSegment,
    IonRouterLink, RouterModule, IonInput, FooterComponent, FormsModule, CommonModule],
})
export class ResgitroComponent  implements OnInit {
  selectedSegment: string = '';
  permitirMovil: boolean = true;
  constructor() { }

  ngOnInit() {
    this.selectedSegment = '1';
  }

  ionViewWillEnter() {
    // this.selectedSegment = 'usuario'
    // console.log(this.selectedSegment)
  }

  onSegmentChange(event: any) {
    console.log(event)
    event.preventDefault();
    // if (event.detail.value === 'movil' && !this.permitirMovil) {
    //   console.log("entro")
    //   this.selectedSegment = 'registro'; // Evita que se cambie manualmente
    // }
  }
  bloquearSegmento(event: Event) {
    // event.preventDefault();
    // return
    if (!this.permitirMovil) {
      event.preventDefault(); // Evita el cambio de segmento
      console.log("Evento: ", event)
      this.selectedSegment = 'usuario';
    }
  }

  siguiente() {
    this.permitirMovil = false; // Habilita el segmento 'móvil'
    // this.selectedSegment = 'movil'; // Cambia el segmento a 'móvil'
    this.selectedSegment = '2'
  }
}
