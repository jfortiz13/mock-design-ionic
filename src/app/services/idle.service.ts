import { inject, Injectable } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  private idle = inject(Idle); // Inyectar Idle en standalone

  constructor() {
    this.setupIdle();
  }

  private setupIdle() {
    this.idle.setIdle(300); // 5 minutos de inactividad
    this.idle.setTimeout(10); // 10 segundos de cuenta regresiva
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onTimeout.subscribe(() => {
      console.log('⏳ Usuario inactivo. Cerrando sesión o mostrando alerta.');
      // Aquí puedes cerrar sesión o mostrar un modal de advertencia
    });

    this.idle.watch(); // Iniciar la detección de inactividad
  }

  reset() {
    this.idle.watch(); // Reinicia el temporizador de inactividad
  }
}
