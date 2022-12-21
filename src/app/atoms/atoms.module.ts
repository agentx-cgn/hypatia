import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageTitleAtom } from './page-title/page-title.atom';

@NgModule({
  declarations: [
    PageTitleAtom
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageTitleAtom
  ]
})
export class AtomsModule { }
