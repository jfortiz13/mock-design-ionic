import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonCard,IonCardContent, IonFooter, IonToolbar,
  IonCardHeader, IonCardTitle, IonRouterLink, IonCardSubtitle } from '@ionic/angular/standalone';
import { FooterComponent } from "../../layout/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonCard, IonCardContent, IonCardSubtitle,
    IonCardHeader, IonCardTitle,  FooterComponent, HeaderComponent, NavbarComponent,
    RouterModule, IonRouterLink],
})
export class LoginPage implements OnInit {
  public folder!: string;
  @ViewChild('contPie', { static: false }) pie!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.folder = 'SIGAM';

  }

}
