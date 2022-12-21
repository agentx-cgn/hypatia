import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AtomsModule } from '@hypatia/atoms/atoms.module';
import { HeaderCell } from './header/header.cell';
import { FooterCell } from './footer/footer.cell';


@NgModule({
  declarations: [
    HeaderCell,
    FooterCell
  ],
  imports: [
    CommonModule,
    FormsModule,
    AtomsModule,
    ScrollingModule,
  ],
  exports: [
    HeaderCell,
    FooterCell
  ]
})
export class CellsModule { }
