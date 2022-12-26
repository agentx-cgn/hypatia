// copied from here: https://github.com/agentx-cgn/ngx-fullscreen
// to circumvent older package.json issues (--legacy-peer-deps)
// and allow special events for safari

import { NgModule } from '@angular/core';
import { NgxFullscreenDirective } from './ngx-fullscreen.directive';

@NgModule({
  declarations: [NgxFullscreenDirective],
  exports: [NgxFullscreenDirective],
})
export class NgxFullscreenModule {}
