import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [

  {path:'', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'page2', component:Page2Component},
  {path:'**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
