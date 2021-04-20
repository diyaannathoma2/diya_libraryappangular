import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from '../menu-list/menu.model';
import { MenuService } from '../menu.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {
  title:String = "Add Menu";


  constructor(private _auth:AuthService,private menuService: MenuService, private router: Router) { }
  menuItem = new MenuModel('', '', '', '', '', '','');

  ngOnInit(): void {
  }
  AddMenu()
  {
    this.menuService.newMenu(this.menuItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/']);
  }

}
