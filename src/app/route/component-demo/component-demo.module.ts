import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentDemoComponent} from './component-demo.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DemoToastComponent} from './demo-toast/demo-toast.component';
import {TToastModule} from '../../../Tui/components/toast/index';
import {TAccordionModule} from '../../../Tui/components/accordion/accordion.module';
import {TMessageBox} from '../../../Tui/components/message/message';
import {DemoMessageboxComponent} from './demo-messagebox/demo-messagebox.component';
import {TMessageModule} from '../../../Tui/components/message/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TToastModule,
    TAccordionModule,
    TMessageModule,
    RouterModule.forChild([
      {
        path: '', component: ComponentDemoComponent,
        children: [
          {path: '', redirectTo: 'toast.html', pathMatch: 'full'},
          {path: 'toast.html', component: DemoToastComponent},
          {path: 'messageBox.html', component: DemoMessageboxComponent}
        ]
      }
    ])
  ],
  declarations: [
    ComponentDemoComponent,
    DemoToastComponent,
    DemoMessageboxComponent
  ]
})
export class ComponentDemoModule {
}
