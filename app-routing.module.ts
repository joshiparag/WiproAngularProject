import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CcboardComponent } from './ccboard/ccboard.component';
import { RestaurantmenuComponent } from './restaurantmenu/restaurantmenu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import { SignupTDComponent } from './signup-td/signup-td.component';
import { SignupComponent } from './signup/signup.component';
import { SignupRComponent } from './signup-r/signup-r.component';



const routes: Routes = [
{path:"" ,component:HeaderComponent},
{path:"ccboard",component:CcboardComponent},
{path:"restaurent",component:RestaurantmenuComponent},
{path:"bootstrap",component:BootstrapdemoComponent},
{path:"signup",component:SignupComponent,
children:[
  {path:'signuptd',component:SignupTDComponent},
  {path:'signuprf',component:SignupRComponent}
 ]},
{path:"**", component:PagenotfoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
