import { Injectable } from '@angular/core';

import { IRecord } from '@hypatia/core/interfaces'

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor () {
    // do noting
  }

    // deletes properties from Records, return new Record
  shrinkRecord (obj: IRecord, props: string[]): IRecord {

    const newObj: IRecord = { ...obj };

    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    props.forEach( (prop: string) => delete newObj[prop]);

    return newObj;

  }

}
