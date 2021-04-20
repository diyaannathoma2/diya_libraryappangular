import { Component, OnInit } from '@angular/core';
import { MenuModel } from './menu.model';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  title:string = "Menu List";
  menu: MenuModel[]=[];

  imageWidth: number =50;
  imageMargin: number =2;

 

  constructor(private menuService: MenuService, private router: Router,public _auth:AuthService) { }


  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data)=>{
    this.menu=JSON.parse(JSON.stringify(data));
  })
    
  }


  editMenu(menu:any)
  {
    localStorage.setItem("editMenuId", menu._id.toString());
    this.router.navigate(['update']);

  }
  deleteMenu(menu:any)
  {
    this.menuService.deleteMenu(menu._id)
      .subscribe((data) => {
        this.menu = this.menu.filter(p => p !== menu);
      })
   }
  }
