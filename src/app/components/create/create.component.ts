import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Register';
  angForm: FormGroup;
  constructor(private registerservice: RegisterService, private fb: FormBuilder) {
    this.createForm();
   }

   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
      mobilenumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
   });
  }
  addRegister(firstname, lastname, email, mobilenumber, password, confirmPassword ) {
      this.registerservice.addRegister(firstname, lastname, email, mobilenumber, password, confirmPassword);
  }
  ngOnInit() {
  }
}