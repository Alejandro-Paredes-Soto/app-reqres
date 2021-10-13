import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Validators,FormControl,FormGroup} from'@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formUser: FormGroup;

  
  constructor(private httpSvc:ApiService,
    private router:Router) { 

    this.formUser = new FormGroup({
      emailUser: new FormControl('',[Validators.required]),
      passUser: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }


  Register(){ this.router.navigate(['/login'])}
}
