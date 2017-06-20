/**
 * Created by tc949 on 2017/4/5.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: '', redirectTo: 'components', pathMatch: 'full'},
  {path: 'components', loadChildren: './route/component-demo/component-demo.module#ComponentDemoModule'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoute {
}
