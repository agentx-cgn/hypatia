import { Component, Inject } from '@angular/core';
import { APP_CONFIG } from '@hypatia/core/injection-tokens';
import { IConfig } from '@hypatia/core/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public counter = 0;
  public routeLanguage: string | null = null;
  public userLanguage: string | null = null;

  private readonly config: IConfig;

  // public title = 'hy-frontend';

  constructor (
    @Inject(APP_CONFIG) config: IConfig
  ) {
    this.config = config;
  }

  ngOnInit (): void {
    // do nothing
  }

}
