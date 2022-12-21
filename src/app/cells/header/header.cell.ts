import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { APP_CONFIG } from '@hypatia/core/injection-tokens';
import { IConfig } from '@hypatia/core/interfaces';
import { I18n } from '@hypatia/core/i18n.module';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'hy-cell-header',
  templateUrl: './header.cell.html',
  styleUrls: ['./header.cell.scss'],
})
export class HeaderCell implements OnInit {

  public logoLink = '';
  public readonly helpButtonLabel = $localize`:@@header.hilfe.button.label:`
  public readonly helpButtonLink  = $localize`:@@header.hilfe.button.page:`

  private readonly config: IConfig;

  constructor (
    @Inject(APP_CONFIG) config: IConfig,
    private readonly router: Router,
    private readonly i18n: I18n
  ) {
    this.config = config;
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

}
