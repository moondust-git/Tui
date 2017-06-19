import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {TimepickerComponent} from './timepicker.component';
import {TimepickerConfig} from './timepicker.config';
import {TWheelModule} from '../../directives/mouseWheel/wheel.module';
import {TimepickerDirective} from './timepicker.directive';

@NgModule({
  imports: [CommonModule, FormsModule, TWheelModule],
  declarations: [TimepickerComponent, TimepickerDirective],
  exports: [TimepickerComponent, TimepickerDirective],
  entryComponents: [TimepickerComponent]
})

export class TTimepickerModule {
}
