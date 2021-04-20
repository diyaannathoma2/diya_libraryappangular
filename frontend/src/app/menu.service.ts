import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor( private http:HttpClient) { }
  getMenu(){
    return this.http.get("http://localhost:3000/menu");
  }
  getMenus(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  
  newMenu(item:any)
  {
    return this.http.post("http://localhost:3000/insert",{"menu":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteMenu(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editMenu(menu:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",menu)
    .subscribe(data =>{console.log(data)})
  }
}

//   editMenu(menu:any)
//   {
//     console.log('client update')
//     return this.http.put("http://localhost:3000/update",menu)
//     .subscribe(data =>{console.log(data)})
//   }
// }

  


