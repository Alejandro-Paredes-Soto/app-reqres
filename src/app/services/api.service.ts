import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  public arrayPosts:any=[];

  constructor(private http:HttpClient,
              private cookie: CookieService) { 

  }

//funcion obtener primeros usuarios
  getUsers(){
return this.http.get<any>("https://reqres.in/api/users")
  }

// funcion para obtener segunda lista de usaurios
  getUsers2(){
    return this.http.get('https://reqres.in/api/users?page=2')
  }
//funcion para obtener otros datos de otra api distinta
  getPosts(id:any){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
  }

  //ingresar informacion de la api post a la api principal
  infoUser(id:any){
    return this.http.get(`https://reqres.in/api/users/${id}`);
    
  } 

  


}
