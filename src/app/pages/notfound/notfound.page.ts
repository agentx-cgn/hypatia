import { Component, OnInit } from '@angular/core';
import { I18n } from '@hypatia/core/i18n.module';
import { StateService } from '@hypatia/core/state.service';

@Component({
  selector: 'hy-page-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss']
})
export class NotfoundPage implements OnInit {

  constructor (
    public readonly i18n: I18n,
    public readonly state: StateService
  ) {
    // do nothing.
  }

  ngOnInit (): void {
    // do nothing.
  }

}
