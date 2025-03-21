import { inject, Injectable } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { AlertService } from './notifications/alert.service';

@Injectable({
  providedIn: 'root',
})
export class IdleService {
  //Idle
  private idleState = 'No iniciado.';
  private lastPing?: Date = undefined;
  private readonly SEGUNDOS_POR_MINUTO = 60;
  private readonly TIEMPO_DE_ESPERA_EN_SEGUNDOS = 15;

  constructor(   private alert: AlertService, private idle: Idle, private keepalive: Keepalive, /*opcional, usar si envias peticiones de actividad al back*/) {}

  initIdlePrimerPlano(tiempo: number = 5) {
    console.log('===initIdlePrimerPlano===');
    const defaultTimeout = tiempo * this.SEGUNDOS_POR_MINUTO; //total 5 en minutos

    // Establece los valores de inactividad y tiempo de espera.
    this.idle.setIdle(defaultTimeout); // inactividad en segundos
    this.idle.setTimeout(this.TIEMPO_DE_ESPERA_EN_SEGUNDOS); //Tiempo de espera en segundos
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); //eventos que considera para interrumpir la inactividad

    // Define responses to idle events
    this.idle.onIdleEnd.subscribe(() => this.handleIdleEnd());
    this.idle.onTimeout.subscribe(() => this.handleTimeout());
    this.idle.onIdleStart.subscribe(() => this.handleIdleStart());
    this.idle.onTimeoutWarning.subscribe((countdown: number) =>
      this.handleTimeoutWarning(countdown)
    );

    /*------OPCIONAL-----*/
    /* Establece el intervalo de ping en 15 segundos.
       Se utiliza si quieres estar enviando peticiones al backend para decirle que sigues activo durante 15 segundos*/
    this.keepalive.interval(this.TIEMPO_DE_ESPERA_EN_SEGUNDOS);
    this.keepalive.onPing.subscribe(() => (this.lastPing = new Date()));
    /*------------------*/

    /*cuando el usuario inicie sesion hace un next(true) al subject, aqui cacho el valor e inicio el tiempo de inactividad
      si hago logout hago un next(false) y paro el tiempo de inactividad para evitar consumir recursos*/
    /* this.authService.user?.subscribe((user) => {
        if (user) {
          this.resetearOIniciarTiempoInactividad();
        } else {
          this.detener();
        }
      }); */
  }

  handleIdleEnd() {
    //Restablece el estado cuando el usuario vuelve a estar activo.
    this.idleState = 'Ya no esta inactivo';
    this.resetearOIniciarTiempoInactividad();
  }

  handleTimeout() {
    //Cierra la sesión del usuario y muestra una advertencia de tiempo de espera agotado.
    this.idleState = 'Tiempo agotado!';
    //this.authService.logout();
    this.alert.warning(
      'Tiempo agotado!',
      'Tu sesión ha expirado y necesitas volver a iniciar sesión.!'
    );
    console.log(this.idleState);
  }

  handleIdleStart() {
    //Advierte al usuario que su sesión se cerrará pronto.
    this.idleState = 'Cerrarás sesión en 15 segundos!';

    //Pasar alerts al AppComponent
    const alertButtons = [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          this.detener();
        }
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
    this.alert.warning(this.idleState, 'Tiempo de espera agotado.', alertButtons);
  }

  handleTimeoutWarning(countdown: number) {
    //Actualiza el mensaje de advertencia a medida que se acerca el tiempo de espera.
    this.idleState = `¡Se te cerrará la sesión en ${countdown} segundos!`;
    console.log(this.idleState)
  }

  resetearOIniciarTiempoInactividad() {// Reinicia el temporizador de inactividad
    this.idle.watch();
  }

  detener() {
    console.log("detenido")
    this.idle.stop();
  }

  permanecerEnLaSesion() {
    this.resetearOIniciarTiempoInactividad();
  }
}
