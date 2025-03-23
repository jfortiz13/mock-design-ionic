import { Injectable } from '@angular/core';
import { App } from '@capacitor/app';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class InactividadService {
  private readonly VARIABLE_TIEMPO = 'tiempoInactividad';
  constructor(private storage: StorageService) {
    this.monitorEstadoApp();
  }

  private monitorEstadoApp() {
    App.addListener('appStateChange', (state) => {
      if (state.isActive) {
        this.veriricaTiempoActividad();
      } else {
        this.setHoraInactividad();
      }
    });
  }

  private setHoraInactividad(): void {
    this.storage.set(this.VARIABLE_TIEMPO, new Date().getTime());
  }

  private async veriricaTiempoActividad() {
    const tiempoFinal = new Date().getTime();
    const tiempoInicial = await this.storage.get(this.VARIABLE_TIEMPO);
    const diferenciaTiempo = this.diferenciaTiempo(tiempoFinal, tiempoInicial);
    console.log('Diferencia de tiempo', diferenciaTiempo);
    if(diferenciaTiempo > 5) {
      console.log('Se cierra sesión');
    }
  }

  private diferenciaTiempo(tiempoFinal: number, tiempoInicial: number): number {
    if(!tiempoFinal || !tiempoInicial) {
      return -1;
    }
    const diffMs = Math.abs(tiempoFinal - tiempoInicial);
    return Math.floor(diffMs / (1000 * 60));
  }
}
