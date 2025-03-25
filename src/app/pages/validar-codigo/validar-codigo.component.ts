import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonContent, IonInput, IonItem,  IonButton, IonList, IonRouterLink, IonLabel, } from '@ionic/angular/standalone';
import { AlertService } from 'src/app/services/notifications/alert.service';

@Component({
  selector: 'app-validar-codigo',
  templateUrl: './validar-codigo.component.html',
  styleUrls: ['./validar-codigo.component.scss'],
   imports: [IonContent, IonItem, IonButton, IonList, IonLabel,
      IonRouterLink, RouterModule, IonInput,]
})
export default class ValidarCodigoComponent  implements OnInit {
  public sesionCorrecta: string | null = null;
  public validado: boolean = true;
  disabled: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private alert: AlertService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      console.log("params: ", params)
      this.sesionCorrecta = params.sesionCorrecta;
      console.log(this.sesionCorrecta)
    });
  }

  validar() {
    if (this.sesionCorrecta === 'false') {
      const alertButtons = [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Alert no');
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            const alertButton = [
              {
                text: 'Aceptar',
                role: 'confirm',
                handler: () => {
                  this.router.navigate(['/login']);
                },
              }];
            this.alert.success('Actualización exitosa.', '', alertButton);
          },
        },
      ];
      this.alert.info('¿Está seguro que desea actualizar los datos del móvil?', '', alertButtons);
      return;
    }
    if (this.validado) {
      this.router.navigate(['/registar-usuario']);
    } else {
      this.alert.error('Por favor verifique su Clave de Técnico y/o Código.', 'Validación incorrecta.');
    }
  }

  buscar() {
    this.alert.error('Técnico no encontrado', '');
  }


}
