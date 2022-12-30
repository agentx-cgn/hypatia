import { Component } from '@angular/core';
import { AppService } from '@hypatia/core/app.service';

@Component({
  selector: 'hyp-cell-datetime',
  templateUrl: './datetime.cell.html',
  styleUrls: ['./datetime.cell.scss']
})
export class DatetimeCell {

  public layers = [
    'Wind 10m',
    'Temp 2m',
    'Sea Surface',
    'Sea Ice',
  ]

  public days = [
    '01-12',
    '02-12',
    '03-12',
    '04-12',
    '05-12',
    '06-12',
    '07-12',
    '08-12',
    '09-12',
    '10-12',
  ];

  public steps = [
    '00', '06', '12', '18',
    '00', '06', '12', '18',
    '00', '06', '12', '18',
    '00', '06', '12', '18',
    '00', '06', '12', '18',
    '00', '06', '12', '18',
    '00', '06', '12', '18',
    '00', '06', '12', '18',
    '00', '06', '12', '18',
    '00', '06', '12', '18',
  ]

  constructor (
    public readonly appservice: AppService
  ) {}

}
