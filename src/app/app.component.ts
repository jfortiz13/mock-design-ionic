import { IdleService } from 'src/app/services/idle.service';
import { TemporizadorSegundoPlanoService } from './services/temporizador-segundo-plano.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink,
  IonTitle, IonToolbar, IonHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp,
  warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, } from 'ionicons/icons';
import { Subscription } from 'rxjs';
import { AlertService } from './services/notifications/alert.service';
import { App } from '@capacitor/app';
import { InactividadService } from './services/Inactividad.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet,
    IonTitle, IonToolbar, IonHeader
  ],
})
export class AppComponent implements OnInit, OnDestroy{
  public appPages = [
    { title: 'Alerta', url: 'alert', icon: 'mail' },
    { title: 'Toast', url: 'toast', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  //Temporisador segundo plano
  private subscriptionTemporizador$!: Subscription;
  private tiempoDeInactividad: number = 15;

  constructor(
    private alert: AlertService,
    private temporizadorSegundoPlanoService: TemporizadorSegundoPlanoService,
    private idleService: IdleService,
    private inactividad: InactividadService
  ) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp,
               warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });

    this.initListennerAppState();
  }

  ngOnInit() {
    this.idleService.initIdlePrimerPlano(this.tiempoDeInactividad);
    this.idleService.resetearOIniciarTiempoInactividad();
    this.subscriptionTemporizador$ = this.temporizadorSegundoPlanoService.getObserver().subscribe(() => {
      // if (this.authService.estaAutenticado())
      //   this.authService.cerrarSesion();
      this.alert.success('Sesión cerrada en segundo plano exitosa.')
    });
   }

  initListennerAppState() {
    console.log("INICIAMOS")
    App.addListener('appStateChange', (evento) => {
      if (evento.isActive) {//app en primer plano
        this.temporizadorSegundoPlanoService.cancelarTemporizador();
        this.idleService.initIdlePrimerPlano(this.tiempoDeInactividad);
        this.idleService.resetearOIniciarTiempoInactividad();
      } else {//app en segundo plano
        this.idleService.detener();
        this.temporizadorSegundoPlanoService.iniciarTemporizador(this.tiempoDeInactividad);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptionTemporizador$.unsubscribe();
    App.removeAllListeners();
  }
}
