import { AccountService } from './../../../service/account/account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { PPValidators } from 'src/app/validator/validators';
import { ppProvince, ppArea, ppCollege, ppGrade } from 'src/app/model/static-data/province.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  formModel: FormGroup;
  allProvinces: ppProvince[];
  private allAreas: ppArea[];
  provinceAreas: ppArea[];
  allGrades: ppGrade[];

  constructor( private fb: FormBuilder, private accountServices: AccountService ) { 
    this.formModel = fb.group({
      nickName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
      college: ['', Validators.required],
      city: ['', Validators.required],
      grade: ['', Validators.required],
      district: ['', Validators.required],
      passwordGroup: fb.group({
        plainPassword: ['', Validators.required],
        pswdc: ['', Validators.required]
      }, {validator: PPValidators.passwordEqualValidator})
    });
    accountServices.GetProvinces().subscribe( ( res ) => {
      this.allProvinces = JSON.parse( JSON.stringify( res ) );
    });
    accountServices.GetAreas().subscribe( ( res ) => {
      this.allAreas = JSON.parse( JSON.stringify( res ) );
    });
    accountServices.GetGrades().subscribe( ( res ) => {
      this.allGrades = JSON.parse( JSON.stringify( res ) );
    });
  }

  ngOnInit() {
  }

  provinceSelected(event) {
    const pcode = this.allProvinces.find( a => a.name === event.target.value ).code;
    this.provinceAreas = this.allAreas.filter( a => a.provinceCode === pcode );
  }

  submitRegister() {
    console.log(this.formModel.value);
  }
}
