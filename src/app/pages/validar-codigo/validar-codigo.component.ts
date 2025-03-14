import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonContent, IonGrid, IonRow, IonCol, IonInput, IonItem, IonLabel, IonText, IonButton, IonTextarea, IonList, IonRouterLink, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView  } from '@ionic/angular/standalone';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-validar-codigo',
  templateUrl: './validar-codigo.component.html',
  styleUrls: ['./validar-codigo.component.scss'],
   imports: [HeaderComponent, IonContent, IonItem, IonGrid, IonRow, IonCol, IonText, IonButton, IonTextarea, IonList, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel, IonSegment,
      IonRouterLink, RouterModule, IonInput, FooterComponent],
})
export class ValidarCodigoComponent  implements OnInit {
  public tipoRegistro: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.tipoRegistro = params.tipoRegistro;
      console.log(this.tipoRegistro)
    });
  }

}
