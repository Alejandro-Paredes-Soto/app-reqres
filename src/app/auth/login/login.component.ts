import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


formUser: FormGroup;  

  constructor(public httpSvc:ApiService,
              private router:Router
    
    ) {
    
      //Validaciones del formulario
     this.formUser = new FormGroup({
       emailUser: new FormControl('',[Validators.required]),
       passUser: new FormControl('',[Validators.required])
     })
   }


  

  ngOnInit(): void {
  }

  //funcion de rutear a la pantalla home (en caso de que ingrese los datos correctos)
Login(){ this.router.navigate(['/home'])}

}
