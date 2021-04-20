import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={uname:'',
password:''}

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }
loginUser()
{
  console.log("hello")
  this._auth.loginUser(this.user)
  .subscribe(
    res=>{
      localStorage.setItem('token',res.token);
      sessionStorage.setItem("user",this.user.uname);
      this._router.navigate([''])

    }
  )

}
}
