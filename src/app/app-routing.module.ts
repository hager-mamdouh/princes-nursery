import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeArComponent } from './home-ar/home-ar.component';
import { HomeEnComponent } from './home-en/home-en.component';

const routes: Routes = [
  {
    path:'',
    component: HomeEnComponent
  },
  {
    path:'ar',
    component: HomeArComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
