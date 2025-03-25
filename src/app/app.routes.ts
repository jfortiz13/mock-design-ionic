import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children:  [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page')
      },
      {
        path: 'terminos-condiciones',
        loadComponent: () =>
          import('./pages/terminos-condiciones/terminos-condiciones.component'),
      },
      {
        path: 'bienvenidos',
        loadComponent: () =>
          import('./pages/principal/principal.component'),
      },
      {
        path: 'validar-codigo',
        loadComponent: () =>
          import('./pages/validar-codigo/validar-codigo.component'),
      },
      {
        path: 'registar-usuario',
        loadComponent: () =>
          import('./pages/resgitro/resgitro.component'),
      },
      {
        path: 'captura-fotos-usuario',
        loadComponent: () =>
          import('./pages/captura-fotos-usuario/captura-fotos-usuario.component'),
      },
      {
        path: 'captura-datos-movil',
        loadComponent: () =>
          import('./pages/captura-datos-movil/captura-datos-movil.component'),
      },
      {
        path: 'restablecer-contrasenia',
        loadComponent: () =>
          import('./pages/restablecer-contrasenia/restablecer-contrasenia.component'),
      },
      {
        path: 'actualizar-contrasenia',
        loadComponent: () =>
          import('./pages/actualizar-contrasenia/actualizar-contrasenia.component'),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./pages/card/card.component'),
      },
      {
        path: 'alert',
        loadComponent: () => import('./pages/alert/alert.page')
      },
      {
        path: 'toast',
        loadComponent: () => import('./pages/toast/toast.page')
      },
      {
        path: '**',
        redirectTo: 'login'
      }
   ],
  },

];
