import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideNgIdle } from '@ng-idle/core';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideNgIdleKeepalive } from '@ng-idle/keepalive';
import { provideHttpClient } from '@angular/common/http';
import { provideStorage, Storage } from '@ionic/storage-angular';

import { PLATFORM_ID, inject } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideNgIdle(),
    provideNgIdleKeepalive(),
    provideHttpClient(),
    {
      provide: Storage,
      useFactory: () => provideStorage(inject(PLATFORM_ID), { name: 'bdApp' })
    }
  ],
});
