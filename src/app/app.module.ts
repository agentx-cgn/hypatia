import { BrowserModule, Title  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '@hypatia/core/material.module';

import { I18n, II18n } from '@hypatia/core/i18n.module';
import { AtomsModule } from '@hypatia/atoms/atoms.module';
import { CellsModule } from '@hypatia/cells/cells.module';

import { StartPage } from '@hypatia/pages/start/start.page';
import { NotfoundPage } from '@hypatia/pages/notfound/notfound.page';
import { LaborPage } from '@hypatia/pages/labor/labor.page';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { PipesModule } from '@hypatia/core/pipe.modules';

@NgModule({
  declarations: [
    AppComponent,
    StartPage,
    NotfoundPage,
    LaborPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AtomsModule,
    CellsModule,
    MaterialModule,
  ],
  providers: [

    // page title service
    Title,

    // Lokalisierung
    {
      provide: APP_INITIALIZER,
      useFactory: (i18n: II18n) => () => i18n.setLocale(),
      deps: [I18n],
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useFactory: (i18n: I18n) => i18n.locale,
      deps: [I18n],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
