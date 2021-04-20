import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = "Menu Card";
  constructor(public _auth:AuthService,
    private _router:Router) {

     }
  

  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate([])
  }

}
