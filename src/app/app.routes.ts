import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'validar-codigo',
    loadComponent: () =>
      import('./pages/validar-codigo/validar-codigo.component').then((m) => m.ValidarCodigoComponent),
  },
  {
    path: 'registar-usuario',
    loadComponent: () =>
      import('./pages/resgitro/resgitro.component').then((m) => m.ResgitroComponent),
  },
  {
    path: 'captura-fotos-usuario',
    loadComponent: () =>
      import('./pages/captura-fotos-usuario/captura-fotos-usuario.component').then((m) => m.CapturaFotosUsuarioComponent),
  },
  {
    path: 'captura-datos-movil',
    loadComponent: () =>
      import('./pages/captura-datos-movil/captura-datos-movil.component').then((m) => m.CapturaDatosMovilComponent),
  },
  {
    path: 'restablecer-contrasenia',
    loadComponent: () =>
      import('./pages/restablecer-contrasenia/restablecer-contrasenia.component').then((m) => m.RestablecerContraseniaComponent),
  },
  {
    path: 'actualizar-contrasenia',
    loadComponent: () =>
      import('./pages/actualizar-contrasenia/actualizar-contrasenia.component').then((m) => m.ActualizarContraseniaComponent),
  },
  {
    path: 'card',
    loadComponent: () =>
      import('./pages/card/card.component').then((m) => m.CardComponent),
  },
];
