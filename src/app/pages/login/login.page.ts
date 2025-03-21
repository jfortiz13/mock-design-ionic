import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonCard,IonCardContent, IonText, IonModal,
  IonCardHeader, IonCardTitle, IonRouterLink, IonCardSubtitle, IonAlert,
   } from '@ionic/angular/standalone';
import { FooterComponent } from "../../layout/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';
import { AlertService } from 'src/app/services/notifications/alert.service';
import { DEFAULT_INTERRUPTSOURCES, Idle, KeepaliveSvc } from '@ng-idle/core';
import { IdleService } from 'src/app/services/idle.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonInput, IonRow, IonGrid, IonCol, IonButton, IonItem, IonCard, IonCardContent, IonCardSubtitle, IonText, IonAlert,
    IonCardHeader, IonCardTitle,  FooterComponent, HeaderComponent, NavbarComponent,
    RouterModule, IonRouterLink],
})
export class LoginPage implements OnInit {
  alertButtons = ['Action'];
  public folder!: string;
  @ViewChild(IonModal) modal!: IonModal;
  public sesionCorrecta: boolean = false;
  public credencialesIncorrectas: boolean = false;
  constructor(private router: Router, private alert: AlertService) {

  }

  ngOnInit() {
    this.folder = 'SIGAM';
  }


  iniciarSesion() {
    if (this.credencialesIncorrectas) {
      this.alert.error('Por favor verifique su usuario y/o contraseña.', 'Inicio de sesión incorrecto.');
      return;
    }
    if (this.sesionCorrecta)
      this.router.navigate(['/terminos-condiciones']);
    else {
      const alertButtons = [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Alert cancel');
            this.router.navigate(['login'], { queryParams: { sesionCorrecta: this.sesionCorrecta } });
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            console.log('Alert si');
            this.router.navigate(['validar-codigo'], { queryParams: { sesionCorrecta: this.sesionCorrecta } });
          },
        },
      ];
      this.alert.info('¿Desea registrarlo?', 'Este móvil no esta registrado', alertButtons);
    }
  }

}
