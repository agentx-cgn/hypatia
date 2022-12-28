import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NgxFullscreenDirective } from './ngx-fullscreen.directive';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _sidenav!:    MatSidenav;
  private _fullscreen!: NgxFullscreenDirective;
  private _expanded = false;

  private readonly _datetime = new Date();

  constructor () {
    // do noting
  }

  set expanded (expanded: boolean) {
    this._expanded = expanded
  }

  get expanded (): boolean {
    return this._expanded;
  }

  set sidenav (sidenav: MatSidenav) {
    this._sidenav = sidenav
  }

  get sidenav (): MatSidenav {
    return this._sidenav;
  }

  set fullscreen (fullscreen: NgxFullscreenDirective) {
    this._fullscreen = fullscreen
  }

  get fullscreen (): NgxFullscreenDirective {
    return this._fullscreen;
  }

  get datetime (): Date {
    return this._datetime;
  }

}
