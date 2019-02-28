import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffLoginComponent } from './staff/login/login.component';

const routes: Routes = [
    {path :"staff", component: StaffLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
