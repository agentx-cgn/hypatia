import { Component, Inject, ViewChild } from '@angular/core';
import { APP_CONFIG } from '@hypatia/core/injection-tokens';
import { IConfig } from '@hypatia/core/interfaces';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public counter = 0;
  public routeLanguage: string | null = null;
  public userLanguage: string | null = null;

  public opened = true;

  private readonly config: IConfig;

  // public title = 'hyp-frontend';

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor (
    @Inject(APP_CONFIG) config: IConfig
  ) {
    this.config = config;
  }

  ngOnInit (): void {
    // do nothing
  }

  toggle (): void {
    console.log('toggle')
    void this.sidenav?.toggle();
  }

}
