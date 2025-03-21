import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemporizadorSegundoPlanoService {
  private timeoutId: any | null = null;
  private readonly SEGUNDOS_POR_MINUTO = 60;
  private readonly MILISEGUNDOS = 1000;
  private subjectTemporizador = new Subject<void>();

  constructor() { }

  public iniciarTemporizador(tiempo: number = 5) {
    // Limpiar cualquier timeout existente primero
    //this.cancelarTemporizador();

    console.log('===iniciarTemporizadorSegundoPlano===');
    this.timeoutId = setTimeout(() => {
      // this.ngZone.run(() => {
        console.log('Timeout alcanzado - cerrando sesión');
        this.subjectTemporizador.next();
      // });
    }, tiempo * this.SEGUNDOS_POR_MINUTO * this.MILISEGUNDOS);
  }

  public cancelarTemporizador() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  public getObserver() {
    return this.subjectTemporizador.asObservable();
  }

}
