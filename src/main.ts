import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import packageJson from '../package.json';
import configJson from './assets/config.json';

import { APP_CONFIG } from './app/core/injection-tokens';
import { AppModule } from './app/app.module';
import { IConfig } from './app/core/interfaces';

const version = packageJson.version;
const envname = environment.name;

console.debug('%cHypatia', 'color: darkgreen; font-weight: 800', envname, version);
console.debug('Environment', environment);

// https://offering.solutions/blog/articles/2021/11/11/loading-configuration-before-your-angular-app-starts/

void ( async () => {

  await fetch('assets/config.json')
    .then((res) => {
      if ( res.status !== 200 ) {
        console.error('Fetch Config failed, using default');
      }
      return res;
    })
    .then((res) => res.status === 200 ? res.json() : configJson)
    .then((config: IConfig) => {

      if (environment.enableProdMode) {
        enableProdMode();
      }

      console.debug('Config', config);

      platformBrowserDynamic([{ provide: APP_CONFIG, useValue: config }])
        .bootstrapModule(AppModule)
        .catch((err) => console.error(err));
    })
    .catch( err => {
      console.error(err)
    })

})()