import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { MenuService } from './menu.service';
import {TokenInterceptorService} from './token-interceptor.service'
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
// import { UpdateMenuComponent } from './update-menu/update-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent,
    NewMenuComponent,
    UpdateMenuComponent,
    LoginComponent,
    SignupComponent,
    // UpdateMenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [MenuService,AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
