import { RegisterService } from './../../service/register.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  registers: any;

  constructor(private router: Router, private http: HttpClient, private service: RegisterService) {}

  ngOnInit() {
    this.getRegister();
    
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }

      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           window.scrollTo(0, 0);
        }
    });

      

  }

  getRegister() {
    this.service.getRegister().subscribe(res => {
      this.registers = res;
    });
  }

  async deleteRegister(id) {
    this.service.deleteRegister(id).subscribe(res => {
      console.log('Deleted');
    });
}
}