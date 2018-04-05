import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './../../service/register.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  register: any;
  angForm: FormGroup;
  title = 'Edit register';
  constructor(private route: ActivatedRoute, private router: Router, private service: RegisterService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
     firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
      mobilenumber: ['', Validators.required ],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]

   });
  }

  updateRegister(firstname, lastname, email, mobilenumber, password, confirmPassword) {
    this.route.params.subscribe(params => {
    this.service.updateRegister(firstname, lastname, email, mobilenumber, password, confirmPassword, params['id']);
    this.router.navigate(['index']);
  });
}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.register = this.service.editRegister(params['id']).subscribe(res => {
        this.register = res;
      });
    });
  }

 
}