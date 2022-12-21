import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';

import { IAPIResponse, IAPIMessage } from '@hypatia/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (
    private readonly http: HttpClient,
  ) { }

  private log<T> (endpoint: string, response: IAPIResponse<T>): void {
    const shortEndpoint = ' .../' + endpoint.split('/').slice(-2).join('/');
    const ms = `${response.meta.response_time}ms`
    console.log('%cAPI:' + shortEndpoint, 'font-weight: 800', ms, response);
  }

  private handleMessages<T> (response: IAPIResponse<T>): void {

    if (!response.messages) { return; }

    response.messages.forEach( (message: IAPIMessage) => {
      const suffix = (
        message.severity === 'ERROR'   ? 'error' :
        message.severity === 'WARNING' ? 'warn'  :
        message.severity === 'INFO'    ? 'info'  :
        'unknown'
      );
      const header = (
        message.severity === 'ERROR'   ? 'Es ist ein Fehler aufgetreten' :
        message.severity === 'WARNING' ? 'Bitte beachten'  :
        message.severity === 'INFO'    ? 'Information'  :
        'unknown'
      );
      // this.svcMessages.showGlobalMessage({
      //   class: 'msg-' + suffix,
      //   header,
      //   text: message.text,
      //   json: response,
      // });
    });

  }

  private handleErrorXX (error: HttpErrorResponse): void {
    // triggers global error
    throwError(() => new Error(String(error)));
  }

  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  private handleError (this: void, error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  private createHeaders (): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept':       'application/json',
    });
  }

  private createURL (endpoint: string): string {
    // return `${environment.apiroot}${endpoint}.json`; // environment.apiroot + endpoint;
    return `${environment.apiroot}${endpoint}`; // environment.apiroot + endpoint;
  }

  // private createParams (params: { [P: string]: string }): HttpParams {
  //   return new HttpParams(params)
  // }

  public get<T>(endpoint: string, parameter = {}): Observable<IAPIResponse<T>> {

    const url     = this.createURL(endpoint);
    const headers = this.createHeaders();

    // removes props w/ undefined
    const params  = JSON.parse(JSON.stringify(parameter)) as { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> };

    return this.http
      .get<IAPIResponse<T>>( url, { headers, params } )
      .pipe<IAPIResponse<T>>(
        // tap( (resp: IAPIResponse<T>) => this.handleMessages<T>(resp) ),
        tap( (resp: IAPIResponse<T>) => this.log<T>(endpoint, resp) ),
        // catchError( this.handleError )
      )
    ;
  }

}
