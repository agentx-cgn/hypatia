import { registerLocaleData } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { Meta } from '@angular/platform-browser'
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { environment } from './../../environments/environment';

import { APP_CONFIG } from '@hypatia/core/injection-tokens';
import { IAPIResponse, IConfig, ITokens } from '@hypatia/core/interfaces';
import { firstValueFrom } from 'rxjs';

const DEBUG = false;

export interface II18n {
  locale: string
  setLocale: () => Promise<void>
}

interface IDefaultStr { default: string}
interface IDefaultRec { default: Record<string, string>}

@Injectable({
  providedIn: 'root',
})
export class I18n {

  public locale = '';
  private readonly config: IConfig;

  constructor (
    @Inject(APP_CONFIG) config: IConfig,
    private readonly meta: Meta,
    private readonly http: HttpClient,
  ) {
    this.config = config;
    this.locale = config.defaultLocale;
  }

  sanitizeUrl (): string {

    const pages: string[] = this.config.pages;
    const path1 = location.pathname.split('/').filter(Boolean).slice(0, 1)[0];

    let userLanguage: string  = navigator.language; // || navigator.userLanguage || null;
    let localLanguage = localStorage.getItem('locale') ?? '';
    let pathLanguage  = location.pathname.split('/').filter(Boolean).slice(0, 1)[0];
    let pageDetected  = location.pathname.split('/').filter(Boolean).slice(1, 2)[0];

    // sanitize
    if (!this.config.availableLocale.includes(userLanguage))  { userLanguage = ''; }
    if (!this.config.availableLocale.includes(pathLanguage))  { pathLanguage = ''; }
    if (!this.config.availableLocale.includes(localLanguage)) { localLanguage = ''; }
    if (!pages.includes(pageDetected)) {
      if (!pages.includes(path1)) {
        pageDetected = '';
      } else {
        pageDetected = path1;
      }
    }

    if (pageDetected === this.config.errorPage) {
      // don't work on this page
      return this.locale;
    }

    if (pathLanguage && pageDetected) {
      // this looks good
      return pathLanguage;
    }

    if (pathLanguage && !pageDetected) {
      // wrong page, good lang
      location.href = `/${pathLanguage}/${this.config.errorPage}`;
    }

    if (!pathLanguage && pageDetected) {
      // wrong lang, good page
      const newLanguge = userLanguage || localLanguage || this.config.defaultLocale;
      const newURL = `/${newLanguge}/${pageDetected}`;
      location.href = newURL;
    }

    if (!pathLanguage && !pageDetected) {
      // wrong lang, wrong page : start over
      const newLanguge = userLanguage || localLanguage || this.config.defaultLocale;
      const newURL = `/${newLanguge}/${this.config.defaultPage}`;
      location.href = newURL;
    }

    console.error('i18n.sanitizeURL', 'Could not process language and path', pathLanguage);

    return this.locale;

  }

  async setLocale (): Promise<void> {

    this.locale = this.sanitizeUrl();

    // TODO: Inject DOCUMENT
    document.querySelector('html')?.setAttribute('lang', 'de');

    // remember this
    localStorage.setItem('locale', this.locale);

    // Use web pack magic string to only include required locale data
    const localeModule: Promise<IDefaultStr> = await import(
      /* webpackInclude: /(de|en|es)\.mjs$/ */
      `/node_modules/@angular/common/locales/${this.locale}.mjs`
    ) as Promise<IDefaultStr>;

    // Set locale for built in pipes, etc.
    registerLocaleData((await localeModule).default);

    // Load local translation file
    // const localeTranslationsModule: Promise<IDefaultRec> = await import(`src/assets/i18n/${this.locale}.json`) as Promise<IDefaultRec>;
    // DEBUG && console.debug('i18n', this.locale, JSON.parse(JSON.stringify(localeTranslationsModule)));
    // Load translations for the current locale at run-time
    // loadTranslations((await localeTranslationsModule).default);

    const endpoint = `${environment.apiroot}/tokens`;
    // const promise = this.http.get(endpoint, { params: { lang: this.locale } }).toPromise() as Promise<IAPIResponse<Record<string, string>>>;
    // const source$ = this.http.get<IAPIResponse<Record<string, string>>>(endpoint, { params: { lang: this.locale } });

    try {
      // const tokens = (await promise).data;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      // const tokens: Record<string, string> = (await firstValueFrom(source$, { defaultValue: {} })).data;
      // DEBUG && console.debug('i18n', this.locale, JSON.parse(JSON.stringify(tokens)));
      // loadTranslations( tokens  );

    } catch (error) {
      loadTranslations( {} );

    }

  }

}
