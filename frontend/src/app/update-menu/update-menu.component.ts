import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  menuItem={
    menuId : 0,
    menuName : '',
    menuCode : '',
    releaseDate : '',
    description : '',
    price : '',
    imageUrl : ''}
  

  constructor(private router :Router,private menuService:MenuService) { }

  ngOnInit(): void {
    let menuId = localStorage.getItem("editMenuId");
    this.menuService.getMenus(menuId ).subscribe((data)=>{
      this.menuItem=JSON.parse(JSON.stringify(data));
    })
  }
  editMenu(){
    this.menuService.editMenu(this.menuItem);
    alert("success");
    this.router.navigate(['']);
  }

}
