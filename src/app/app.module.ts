import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TuiModule} from '../Tui/index';
import {TModalModule} from '../Tui/components/modal/modal.module';
import {TConfirmModule} from '../Tui/components/confirm/confirm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TModalModule,
    TConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
