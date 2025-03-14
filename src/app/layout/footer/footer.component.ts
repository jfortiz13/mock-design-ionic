import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonFooter, IonRow, IonGrid, IonCol,
 } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonToolbar, IonFooter, IonRow, IonGrid, IonCol, ],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
