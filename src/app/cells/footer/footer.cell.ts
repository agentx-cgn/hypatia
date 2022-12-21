import { Component, OnInit } from '@angular/core';
import packageJson from '../../../../package.json';

@Component({
  selector: 'hy-cell-footer',
  templateUrl: './footer.cell.html',
  styleUrls: ['./footer.cell.scss']
})
export class FooterCell implements OnInit {

  public copyright = '© Deutsche Rentenversicherung 2022';
  public version = packageJson.version;
  public items = [
    { href: '/pagenotfound', text: 'Impressum' },
    { href: '/pagenotfound', text: 'Datenschutz' },
    { href: '/qualitaet',    text: 'Qualitätsparameter' },
    { href: '/labor',        text: 'Labor' },
    { href: '/hilfe',        text: 'Hilfe', icon: 'question-mark' }
  ];

  constructor () {
    // do nothing.
  }

  ngOnInit (): void {
    // console.debug('version', this.version)
    // do nothing.
  }

}
