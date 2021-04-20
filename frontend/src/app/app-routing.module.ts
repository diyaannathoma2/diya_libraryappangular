import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component'

const routes: Routes = [
  {path:'',component:MenuListComponent},
  {path:'login',component:LoginComponent},
  {path: 'add',canActivate:[AuthGuard],component:NewMenuComponent},
  {path:'update',component:UpdateMenuComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
