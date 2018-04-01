import { Injectable } from '@angular/core';  
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';  
  
import { tokenNotExpired } from 'angular2-jwt';  
  
import { AuthenticationService } from './loginservice.service';

  
/** 
 * Decides if a route can be activated. 
 */  
@Injectable() export class AuthGuard implements CanActivate {  
  
    constructor(public authenticationService: AuthenticationService, private router: Router) { }  
  
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {  
  
        let token: string = localStorage.getItem('access_token');  
        if(token == null)
        {
           
            this.router.navigate(['/login']);
             return false;
        }
        else
        {  
            let status:boolean
            
           this.authenticationService.CheckConnection()
           .subscribe((allow: boolean) => {               
            if (!allow) {
            
              this.router.navigate(['/login']);
              return false;
            }
          });
        
        }
       
        return true;
          
    }  
  
} 