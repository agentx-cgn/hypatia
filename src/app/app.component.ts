import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { APP_CONFIG } from '@hypatia/core/injection-tokens';
import { IConfig } from '@hypatia/core/interfaces';
import { DOCUMENT } from '@angular/common';

import { NgxFullscreenDirective } from '@hypatia/core/ngx-fullscreen.directive';

import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public window: Window | null;

  public counter = 0;
  public routeLanguage: string | null = null;
  public userLanguage: string | null = null;

  public opened = false;
  public mode: MatDrawerMode   = 'push';

  private readonly config: IConfig;

  // public title = 'hyp-frontend';

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  @ViewChild('fullscreen') fullscreen!: NgxFullscreenDirective;

  constructor (
    @Inject(APP_CONFIG) config: IConfig,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.config = config;
    this.window = this.document.defaultView;
  }

  ngOnInit (): void {
    // do nothing
  }

  ngAfterViewInit (): void {
    this.fullscreen.errors.subscribe((err: string) => {
      // e.g. "Failed to execute 'requestFullscreen' on 'Element'"
      console.log('App.fullscreen.error', err);
    });
  }

  toggle (): void {
    console.log('toggle')
    void this.sidenav?.toggle();
  }

  toggleFullscreen (): void {
    // works on Chrome, not Safari
    console.log('toggleFullscreen');
    // this.fullscreen.toggle();
    void this.fullscreen.enter();
    // if ( this.isFullscreen ) {
    //   this.isFullscreen = false;
    //   void this.fullscreen.exit();
    // } else {
    //   this.isFullscreen = true;
    //   void this.fullscreen.enter();
    // }
  }

}
