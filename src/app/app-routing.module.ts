import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
   {path:"register",component:RegistrationComponent},
   {path:"search",component:SerachDeleteComponent},
   {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
