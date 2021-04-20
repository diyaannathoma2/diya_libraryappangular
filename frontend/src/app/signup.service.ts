import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private http:HttpClient) { }
  // getSignup(){
  //   return this.http.get("http://localhost:3000/signup");
  // }
  newSignup(item:any)
  {
    return this.http.post("http://localhost:3000/adduser",{"signup":item})
    .subscribe(data=>{console.log(data)})
  }
}
