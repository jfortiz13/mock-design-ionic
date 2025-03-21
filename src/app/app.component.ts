
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink,
  IonTitle, IonToolbar, IonHeader } from '@ionic/angular/standalone';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp,
  warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, } from 'ionicons/icons';
import { Subscription } from 'rxjs';
import { AlertService } from './services/notifications/alert.service';

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

  //Idle
  idleState = 'No iniciado.';
  timedOut = false; //tiempo de espera agotado
  subscription$!: Subscription;
  lastPing?: Date = undefined;

  constructor(private idle: Idle, private keepalive: Keepalive, private alert: AlertService,
  ) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
    this.init();
  }

  ngOnInit() { }

  init() {
    console.log("empezamos")
  let idleTimeout = localStorage.getItem('idleTimeout');
  let defaultTimeout = 15 * 60; //total 15 minutos
  let systemIdleTimeout = defaultTimeout;
  // if (idleTimeout) systemIdleTimeout = +idleTimeout * 60;


    // Establece los valores de inactividad y tiempo de espera.
  this.idle.setIdle(systemIdleTimeout); // inactividad en segundos
  this.idle.setTimeout(15); //Tiempo de espera en segundos
  this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);//eventos que considera para interrumpir la inactividad

  // Define responses to idle events
  this.idle.onIdleEnd.subscribe(() => this.handleIdleEnd());
  this.idle.onTimeout.subscribe(() => this.handleTimeout());
  this.idle.onIdleStart.subscribe(() => this.handleIdleStart());
  this.idle.onTimeoutWarning.subscribe((countdown: number) => this.handleTimeoutWarning(countdown));

  // Establece el intervalo de ping en 15 segundos.
  //Se utiliza si quieres estar enviando peticiones al backend para decirle que sigues activo durante 15 segundos
  this.keepalive.interval(15);
  this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

  //cuando el usuario inicie sesion hace un next(true) al subject, aqui cacho el valor e inicio el tiempo de inactividad
  // si hago logout hago un next(false) y paro el tiempo de inactividad para evitar consumir recursos
 // this.authService.user?.subscribe((user) => {
    //  if (user) {
     //   idle.watch();
     //  this.timedOut = false;
    //  } else {
    //    idle.stop();
    //  }
    //});

    this.idle.watch();
  }

  handleIdleEnd() {//Restablece el estado cuando el usuario vuelve a estar activo.
    this.idleState = 'Ya no esta inactivo';
    this.resetearTiempoInactividad();
    //Cerrar alerta
  }

  handleTimeout() {//Cierra la sesión del usuario y muestra una advertencia de tiempo de espera.
    this.idleState = 'Tiempo agotado!';
    this.timedOut = true;
    //this.authService.logout();
    this.alert.warning('Tiempo agotado!', 'Tu sesión ha expirado y necesitas volver a iniciar sesión.!');
    console.log('Tiempo agotado!')
  }

  handleIdleStart() {//Advierte al usuario que su sesión se cerrará pronto.
    // this.idleState = 'Pronto cerrará sesión!';
    this.idleState = 'Cerrarás sesión en 15 segundos!';
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
          console.log('Alert si');
          this.permanecerEnLaSesion();
        },
      },
    ];
    this.alert.warning(this.idleState, 'Tiempo de espera agotado.', alertButtons)
  }

  handleTimeoutWarning(countdown: number) {//Actualiza el mensaje de advertencia a medida que se acerca el tiempo de espera.
    this.idleState = `¡Se te cerrará la sesión en 5 ${countdown} segundos!`;
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  resetearTiempoInactividad() {
    this.idle.watch();
    this.timedOut = false;
  }

  permanecerEnLaSesion() {
    this.resetearTiempoInactividad();
  }
}
