import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { combineLatest, Subscription } from 'rxjs';

import { ApiService } from '@hypatia/core/api.service';
import { I18n } from '@hypatia/core/i18n.module';
import { StateService } from '@hypatia/core/state.service';

@Component({
  selector: 'hy-page-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss']
})
export class StartPage implements OnInit, OnDestroy {

  private readonly routeSubscription: Subscription | undefined;


  public trans = {
    search_button_label:  $localize`:@@page.start.search.button.label:`,
  };

  constructor (
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly title:  Title,
    private readonly i18n:   I18n,
    private readonly api:    ApiService,
    private readonly state:  StateService,
    ) {
  }

  public ngOnDestroy (): void {
    this.routeSubscription?.unsubscribe();
  }

  ngOnInit (): void {

    this.title.setTitle($localize`:@@page.start.title.short:`);

    combineLatest([
      // this.api.get<IFachgruppe[]>('/fachabteilungen', { lang: this.i18n.locale }),
      this.route.queryParams,
    ]).subscribe( result => {

      // const [response, queryParams] = result;
      // const params: IQueryParams = queryParams;

      // this.data = response.data;

    });

  }

}
