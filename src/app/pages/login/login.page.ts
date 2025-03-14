import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonLabel, IonCard,IonCardContent, IonAlert, IonModal, IonButtons, IonToolbar, IonTitle,IonHeader, IonRadio, IonRadioGroup,
  IonCardHeader, IonCardTitle, IonRouterLink, IonCardSubtitle } from '@ionic/angular/standalone';
import { FooterComponent } from "../../layout/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonLabel, IonCard, IonCardContent, IonCardSubtitle,
    IonCardHeader, IonCardTitle,  FooterComponent, FooterComponent, HeaderComponent, NavbarComponent, IonAlert,IonModal, IonButtons, IonToolbar,IonTitle, IonHeader, IonRadio, IonRadioGroup,
    RouterModule, IonRouterLink],
})
export class LoginPage implements OnInit {
  public folder!: string;
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router) {}

  ngOnInit() {
    this.folder = 'SIGAM';
  }

  onWillDismiss(event: any) {

  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
    this.router.navigate(['validar-codigo'], { queryParams: { tipoRegistro: 'ACTUALIZAR' }});
  }

}
