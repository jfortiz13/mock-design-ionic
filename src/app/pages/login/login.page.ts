import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonCard,IonCardContent, IonText, IonToolbar, IonButtons, IonHeader, IonModal, IonTitle,
  IonCardHeader, IonCardTitle, IonRouterLink, IonCardSubtitle, IonToggle, } from '@ionic/angular/standalone';
import { FooterComponent } from "../../layout/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonCard, IonCardContent, IonCardSubtitle, IonText, IonToggle,
    IonCardHeader, IonCardTitle,  FooterComponent, HeaderComponent, NavbarComponent, IonHeader, IonModal, IonTitle, IonButtons, IonToolbar,
    RouterModule, IonRouterLink],
})
export class LoginPage implements OnInit {
  public folder!: string;
  public terminosAceptados = false;
  @ViewChild(IonModal) modal!: IonModal;

  constructor() {}

  ngOnInit() {
    this.folder = 'SIGAM';

  }

  abrirTerminos() {
    this.terminosAceptados = true;
  }

  cancelar() {
    this.modal.dismiss(null, 'Cancelar');
  }

  aceptar() {
    this.modal.dismiss(null, 'Aceptar');
  }


}
