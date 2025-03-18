import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonContent, IonInput, IonItem,  IonButton, IonList, IonRouterLink, IonLabel, IonToolbar, IonToggle, IonButtons, IonTitle, IonModal, IonHeader } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-validar-codigo',
  templateUrl: './validar-codigo.component.html',
  styleUrls: ['./validar-codigo.component.scss'],
   imports: [IonHeader, IonModal, IonTitle, IonButtons, IonToggle, IonLabel, HeaderComponent, IonContent, IonItem, IonButton, IonList, IonToolbar,
      IonRouterLink, RouterModule, IonInput, FooterComponent],
})
export class ValidarCodigoComponent  implements OnInit {
  public tipoRegistro: string = '';
  public terminosAceptados = false;
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.tipoRegistro = params.tipoRegistro;
      console.log(this.tipoRegistro)
    });
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
