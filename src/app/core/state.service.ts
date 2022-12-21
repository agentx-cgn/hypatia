import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

export interface IState {
  id_fagrp?:  string    // Filter, FASC Gruppe
  id_fach?:   string    // Filter, Fachabteilung
  plz?:       string    // Filter
  merkmale?:  string    // Filter, comma seperated
  umkreis?:   number    // Filter, in km
  lang?:      string    // Anzeige, Sprache
  sort?:      string    // Anzeige, column index, asc or desc
  page?:      number    // Anzeige, 1 - n
  length?:    number    // Anzeige, 1 -n
  view?:      'liste' | 'karte' | '' // Anzeige
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state: IState = {
      view:     '',
      id_fagrp: '3400',
      sort:     '0,asc',
      length:   30
    };

  get (prop: keyof IState): string | number | undefined {
    return this.state[prop];
  }

  all (): IState {
    return this.state;
  }

  update ( params: IState ): IState {

    this.state = Object.assign( {}, this.state, params );
    return this.state;

  }

}
