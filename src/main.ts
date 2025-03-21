import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { KeepaliveSvc, provideNgIdle } from '@ng-idle/core';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideNgIdleKeepalive } from '@ng-idle/keepalive';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideNgIdle(),
    provideNgIdleKeepalive(),
    provideHttpClient()
  ],
});
