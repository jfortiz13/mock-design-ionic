import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonCard,IonCardContent, IonText, IonModal,
  IonCardHeader, IonCardTitle, IonRouterLink, IonCardSubtitle, IonToggle, } from '@ionic/angular/standalone';
import { FooterComponent } from "../../layout/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonCard, IonCardContent, IonCardSubtitle, IonText, IonToggle,
    IonCardHeader, IonCardTitle,  FooterComponent, HeaderComponent, NavbarComponent,
    RouterModule, IonRouterLink],
})
export class LoginPage implements OnInit {
  public folder!: string;
  @ViewChild(IonModal) modal!: IonModal;
  public sesionCorrecta: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.folder = 'SIGAM';
  }


  iniciarSesion() {
    if (this.sesionCorrecta)
      this.router.navigate(['/terminos-condiciones']);
    else
    this.router.navigate(['validar-codigo'], { queryParams: { sesionCorrecta: this.sesionCorrecta } });
  }

}
