import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentDemoComponent} from './component-demo.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TuiModule} from '../../../Tui/index';
// import {DemoToastComponent} from './demo-toast/demo-toast.component';
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
          {path: '', redirectTo: 'toast.html', pathMatch: 'full'},
          // {path: 'toast.html', component: DemoToastComponent},
          // {path: 'messageBox.html', component: DemoMessageboxComponent}
        ]
      }
    ])
  ],
  declarations: [
    ComponentDemoComponent,
    // DemoToastComponent,
    // DemoMessageboxComponent
  ]
})
export class ComponentDemoModule {
}
