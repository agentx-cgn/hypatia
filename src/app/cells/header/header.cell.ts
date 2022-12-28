import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { APP_CONFIG } from '@hypatia/core/injection-tokens';
import { IConfig } from '@hypatia/core/interfaces';
import { I18n } from '@hypatia/core/i18n.module';
import { filter, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { AppService } from '@hypatia/core/app.service'

@Component({
  selector: 'hyp-cell-header',
  templateUrl: './header.cell.html',
  styleUrls: ['./header.cell.scss'],
})
export class HeaderCell implements OnInit {

  public window: Window | null;

  public logoLink = '';
  public readonly helpButtonLabel = $localize`:@@header.hilfe.button.label:`
  public readonly helpButtonLink  = $localize`:@@header.hilfe.button.page:`

  private readonly config: IConfig;

  constructor (
    @Inject(APP_CONFIG) config: IConfig,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly router: Router,
    private readonly i18n: I18n,
    public readonly appservice: AppService,
  ) {
    this.config = config;
    this.window = this.document.defaultView;
  }

  ngOnInit (): void {

    // Wait for router to set lokale in links
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      tap( () => this.updateLinks() )
    ).subscribe();

  }

  updateLinks (): void {
    // do nothing
  }

  btnClick (): void {
    void this.router.navigate([this.i18n.locale, this.helpButtonLink]);
  }

  toggleSidenav (): void {
    console.log('header.toggle.sidenav')
    void this.appservice.sidenav?.toggle();
  }

  toggleDatetime (): void {
    console.log('header.toggle.datetime')
    this.appservice.expanded = !this.appservice.expanded;
    // void this.appservice.sidenav?.toggle();
  }

  toggleFullscreen (): void {
    // works on Chrome, not Safari
    console.log('toggleFullscreen');
    // this.fullscreen.toggle();
    void this.appservice.fullscreen.enter();
    // if ( this.isFullscreen ) {
    //   this.isFullscreen = false;
    //   void this.fullscreen.exit();
    // } else {
    //   this.isFullscreen = true;
    //   void this.fullscreen.enter();
    // }
  }

}
