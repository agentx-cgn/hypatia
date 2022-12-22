import { Component, OnInit } from '@angular/core';
import { I18n } from '@hypatia/core/i18n.module';

// import * as adodb from 'node-adodb';

@Component({
  selector: 'hyp-page-labor',
  templateUrl: './labor.page.html',
  styleUrls: ['./labor.page.scss']
})
export class LaborPage implements OnInit {

  constructor ( public readonly i18n: I18n ) {
    // do nothing
  }

  public counter = 0;
  public now = new Date();

  public dataString = '';

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  // public testtitle: string = $localize`:@@app.title:Welcome to i18n demo in english`;
  public testtitle: string = $localize`:@@app.title:`;

  ngOnInit (): void {
    // do nothing
  }

  changeCounter (amount: number): void {
    this.counter += amount;
    this.counter = this.counter < 0 ? 0 : this.counter;
  }

  async selectMDB (): Promise<void> {
    // const dbFile = './src/assets/data/hyp-frontend.mdb'
    // const connection = adodb.open(`Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${dbFile};`)
    // const sql = 'SELECT * FROM pr_lokalisierung ORDER BY token, sprache;'
    // const data = await connection.query(sql)
    // const dataString = JSON.stringify(data, null, 2)
    // do nothing
  }

  selectAPI (): void {
    // do nothing
  }

}
