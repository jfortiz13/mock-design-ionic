import { style } from '@angular/animations';
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'MockSenasicaApp',
  webDir: 'www',
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: "DEFAULT"
    },
  },
};

export default config;
