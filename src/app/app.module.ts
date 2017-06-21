import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TToastModule} from '../Tui/components/toast/index';
import {RouterModule} from '@angular/router';
import {AppRoute} from './app.route';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiModule} from '../Tui/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
