import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentDemoComponent} from './component-demo.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TuiModule} from '../../../Tui/index';
import {DemoCarouselComponent} from './demo-carousel/demo-carousel.component';
import {DemoToastComponent} from './demo-toast/demo-toast.component';
import {DemoMessageboxComponent} from './demo-messagebox/demo-messagebox.component';
import {DemoConfirmComponent} from './demo-confirm/demo-confirm.component';
import {DemoModalComponent} from './demo-modal/demo-modal.component';
import {DemoTabComponent} from './demo-tab/demo-tab.component';
import {DemoTimepickerComponent} from './demo-timepicker/demo-timepicker.component';
import {DemoCollpaseComponent} from './demo-collpase/demo-collpase.component';
import {DemoWaterfullComponent} from './demo-waterfull/demo-waterfull.component';
import {DemoSidenavComponent} from './demo-sidenav/demo-sidenav.component';
import {DemoTooltipComponent} from './demo-tooltip/demo-tooltip.component';

import {DemoAccodionComponent} from './demo-accodion/demo-accodion.component';
import {DemoDropdownComponent} from './demo-dropdown/demo-dropdown.component';
// import {DemoMessageboxComponent} from './demo-messagebox/demo-messagebox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TuiModule,
    RouterModule.forChild([
      {
        path: '', component: ComponentDemoComponent,
        children: [
          {path: '', redirectTo: 'carousel.html', pathMatch: 'full'},
          {path: 'carousel.html', component: DemoCarouselComponent},
          {path: 'toast.html', component: DemoToastComponent},
          {path: 'messageBox.html', component: DemoMessageboxComponent},
          {path: 'confirm.html', component: DemoConfirmComponent},
          {path: 'modal.html', component: DemoModalComponent},
          {path: 'tabs.html', component: DemoTabComponent},
          {path: 'sidenav.html', component: DemoSidenavComponent},
          {path: 'timepicker.html', component: DemoTimepickerComponent},
          {path: 'collpase.html', component: DemoCollpaseComponent},
          {path: 'waterfull.html', component: DemoWaterfullComponent},
          {path: 'tooltip.html', component: DemoTooltipComponent},
          {path: 'accodion.html', component: DemoAccodionComponent},
          {path: 'dropdown.html', component: DemoDropdownComponent},
        ]
      }
    ])
  ],
  declarations: [
    ComponentDemoComponent,
    DemoCarouselComponent,
    DemoToastComponent,
    DemoMessageboxComponent,
    DemoConfirmComponent,
    DemoModalComponent,
    DemoTabComponent,
    DemoSidenavComponent,
    DemoTimepickerComponent,
    DemoCollpaseComponent,
    DemoWaterfullComponent,
    DemoTooltipComponent,

    DemoAccodionComponent,

    DemoDropdownComponent,
  ]
})
export class ComponentDemoModule {
}
