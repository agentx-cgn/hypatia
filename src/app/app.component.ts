import { Component, Inject, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { APP_CONFIG } from '@hypatia/core/injection-tokens';
import { IConfig } from '@hypatia/core/interfaces';
import { DOCUMENT } from '@angular/common';
import { AppService } from '@hypatia/core/app.service'

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

  @ViewChild('sidenav')    sidenav!:    MatSidenav;
  @ViewChild('fullscreen') fullscreen!: NgxFullscreenDirective;

  constructor (
    @Inject(APP_CONFIG) config: IConfig,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly service: AppService,
    private readonly cdref: ChangeDetectorRef,

  ) {
    this.config = config;
    this.window = this.document.defaultView;
  }

  ngOnInit (): void {
    // do nothing
  }

  ngAfterViewInit (): void {
    this.service.sidenav    = this.sidenav;
    this.service.fullscreen = this.fullscreen;
    this.fullscreen.errors.subscribe((err: string) => {
      // e.g. "Failed to execute 'requestFullscreen' on 'Element'"
      console.log('App.fullscreen.error', err);
    });
    // triggers hyp-header
    this.cdref.detectChanges();
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
