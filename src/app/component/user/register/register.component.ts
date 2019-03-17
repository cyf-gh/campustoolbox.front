import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '_@angular_forms@7.2.9@@angular/forms';
import { PPValidators } from 'src/app/validator/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  formModel: FormGroup;

  constructor( private fb: FormBuilder ) { 
    this.formModel = fb.group({
      passwordGroup: fb.group({

      }, {validator: PPValidators.passwordEqualValidator})
    });
  }

  ngOnInit() {
  }

}
