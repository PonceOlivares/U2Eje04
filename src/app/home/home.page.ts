import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, EmailValidator } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() { 
    this.myForm= this.fb.group({
      rfc:["",Validators.compose([Validators.required, Validators.pattern(/^[A-Z]{3,4}([0-9]{2})(1[0-2]|0[1-9])([0-3][0-9])([ -]?)([A-Z0-9]{3})$/)])],
      name:["",Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{3,16}$/)])],
      email:["",Validators.compose([Validators.required, Validators.maxLength(320),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
     // genre:["",Validators.compose([Validators.required, Validators.pattern(/^[h-H]{1}[m-M]{1}$/)])],
      genree:["",Validators.required],
      curp:["", Validators.compose([Validators.required,Validators.maxLength(18),Validators.minLength(18),Validators.pattern(/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/)])]
    });
  }
}
