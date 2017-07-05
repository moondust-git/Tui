import {NgModule} from '@angular/core';
import {TDropdown, TDropdownToggle} from './dropdown';

export {TDropdown, TDropdownToggle} from './dropdown';

const T_DROPDOWN_DIRECTIVES = [TDropdownToggle, TDropdown];

@NgModule({
    declarations: T_DROPDOWN_DIRECTIVES,
    exports: T_DROPDOWN_DIRECTIVES
  }
)
export class TDropdownModule {
}
