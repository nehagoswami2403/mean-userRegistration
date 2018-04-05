import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  result: any;
  constructor(private http: HttpClient) {}

  addRegister(firstname, lastname, email, mobilenumber, password, confirmPassword) {
    const uri = 'http://localhost:4000/registers/add';
    const obj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobilenumber: mobilenumber,
      password: password,
      confirmPassword: confirmPassword


    };
    console.log(obj);
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getRegister() {
    const uri = 'http://localhost:4000/registers';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editRegister(id) {
    const uri = 'http://localhost:4000/registers/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateRegister(firstname, lastname, email, mobilenumber, password, confirmPassword, id) {
    const uri = 'http://localhost:4000/registers/update/' + id;

    const obj = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobilenumber: mobilenumber,
      password: password,
      confirmPassword: confirmPassword
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteRegister(id) {
    const uri = 'http://localhost:4000/registers/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}