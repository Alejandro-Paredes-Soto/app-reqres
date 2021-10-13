import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {trigger,state,style,transition, animate} from '@angular/animations';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('animations',[
      state('default', style({
        transform:'translateX(100%)'
      })),
      state('showInfo', style({
        transform:'translateX(0%)'
      })),
      state('defaultContent', style({})),
      state('showContent', style({
        opacity:'0.4',
        cursor:'default'
      })),
      state('defaultCard', style({})),
      state('noneCard', style({
        
        cursor:'default',
        opacity:'0.3'
      })),
      transition('default => showInfo', animate('500ms ease-in-out')),
      transition('showInfo => default', animate('500ms ease-in-out'))

    ])
  ]
})
export class HomeComponent implements OnInit {

  //arreglo que guarada los usuarios
  public Users:any=[];

  //variables que hacen la animacion a la nueva vista al dar click en "ver mas informacion del usuario"
  public default = 'default';
  public defaultContent='defaultContent';
  public defaultCard ='defaultCard';

  //variables para guardar informacion de la api principal  (reqres)
  public tId:any;
  public img:any;
  public name:any;
  public last:any;
  public email:any;
  public Ttitle:any;
  public Bbody:any;


  //inyeccion del servicio de la  api con los metodos
  constructor(public httpSvc: ApiService) { 
    this.Users=[]
  }

  ngOnInit(): void {
 
   //funcion para traer y mostrar en pantall los usuarios 
    this.httpSvc.getUsers().subscribe((data:any)=>{
      console.log(data);
      
      this.Users=data;
    });

    

  }

//funcion para resetear animacion de la nueva vista del usuario al dar click en el boton X
    ResetInfoUser(){
      this.default = this.default ==='showInfo'?'default':'showInfo';
      this.defaultContent=this.defaultContent === 'showContent'?'defaultContent':'showContent';
      this.defaultCard = this.defaultCard==='noneCard'?'defaultCard':'nonetCard'
    }


   //Funcion que abre la vista al dar click en el boton verde
    SelectUser(tid:any){
      this.default = this.default ==='default'?'showInfo':'default';
      this.defaultContent=this.defaultContent === 'defaultContent'?'showContent':'defaultContent';
      this.defaultCard = this.defaultCard==='defaultCard'?'noneCard':'defaultCard'
    
      this.httpSvc.infoUser(tid).subscribe((value:any)=> {
       
    this.tId= value.data.id;
    this.img= value.data.avatar;
    this.name= value.data.first_name;
    this.last= value.data.last_name;
    this.email = value.data.email;
    
         
      });

      this.httpSvc.getPosts(tid).subscribe((value:any)=>{

       this.Ttitle = value[0].title;
       this.Bbody = value[0].body;
       
        
      })
     
  
       
          
    }

    //Funcion que borra todos los usuarios visibles
    deleteAll(){
  this.Users =[];
    } 

   
  
    
    
   
    
}
