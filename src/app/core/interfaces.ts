
export interface IRecord extends Record<string, string | number> {}

export interface IFeature {
  label: string
  childs: string[]
}

export interface IConfig {
  defaultLocale: 'de' | 'en'
  availableLocale: string[]
  apiroot: string
  pages: string[]
  defaultPage: string
  errorPage: string
}

export interface ITokens {
  token: string
  locale: string
}
export interface IAPIMessage {
  text:     string
  severity: string
  code:     string
}

type IAPIPaging = null | {
  pages:            number       // Total Number of Pages
  page:             number       // Current Page Number
  length:           number       // Number of Rows per Page
  total:            number       // Total Number of Elements/Rows
  first:            boolean      // is first page
  last:             boolean      // is last Page
  sorted:           boolean       // sorting was applied
}

interface IAPIMeta {
  response_time:     number  // msecs from request to response
  version:    string  // API Version
  lang:       string  // gelieferte Sprache: de-de, en_gb
}

// type TAPIData = any[] | any;  // [] or {} or [...] or {...}

export interface IAPIResponse<T> {
  messages: IAPIMessage[]
  paging:   IAPIPaging
  meta:     IAPIMeta
  data:     T // siehe TAPIData,
}

export interface IQueryParams {
  lang?:      string
  id_fagrp?:  string    // FASC Gruppe
  id_fach?:   string    // Fachabteilung
  view?:      'liste' | 'karte' | ''
  merkmale?:  string
  plz?:       string
  umkreis?:   string
  sort?:      string
  page?:      string
  length?:    string
}

export interface IState extends Omit<IQueryParams, 'merkmale' | 'umkreis' | 'page' | 'length'> {
  merkmale?:  string
  umkreis?:   number
  page?:      number
  length?:    number
}
