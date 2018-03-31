import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../loginservice.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _service:AuthenticationService,private router: Router) {}
  

  ngOnInit() {
  }
  login(email:string,password:string)
  {
    this._service.signout();
    this._service.signin(email,password).subscribe(
      data => {
          // login successful so redirect to return url
          this.router.navigateByUrl('/home');
      },
      error => {
          // login failed so display error
         console.log(error);
      });
}
    
}
