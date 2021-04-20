import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { SignupModel} from './signup.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:String = "SignUp";

  constructor( private signupService: SignupService, private router:Router) { }
  signupItem= new SignupModel('','', '');

  ngOnInit(): void {
  }
  
  AddSignup()
  {
    console.log("hello");
    this.signupService.newSignup(this.signupItem);
    console.log("called");
    alert("Success");
    this.router.navigate(['login'])
  }

}
