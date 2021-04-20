import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginUser(user:any)
{
  return this.http.post<any>("http://localhost:3000/login",user)
 
}
  constructor(private http:HttpClient) { }
  rolesVerify(){
    let admin=sessionStorage.getItem('user');
    if(admin=='admin'){
      return true;
    }
    else{
      return false;
    }
  }
  loggedIn()
{
  return !!localStorage.getItem('token')
}
getToken()
{
   return localStorage.getItem('token')
}
}


