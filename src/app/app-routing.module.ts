import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GrmComponent} from './services/grm/grm.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'replaceGRM',
  component: GrmComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
