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
  
        console.log('can Activate') 
        // if (tokenNotExpired()) {  
        //     // Signed in. 
        //     console.log('tokenNotExpired') 
        //     return true;  
        // }  

        


        let token: string = localStorage.getItem('access_token');  
        if(token == null)
        {
            console.log('token null')
            this.router.navigate(['/login']);
             return false;
        }
        else
        {  
            let status:boolean
            console.log('token not null') 
           this.authenticationService.CheckConnection()
           .subscribe((allow: boolean) => {
               
            if (!allow) {

              this.router.navigate(['/login']);
              return false;
            }
          });
        
        }
        return true;
        // Stores the attempted URL for redirecting.  
        // let url: string = state.url;  
        // this.authenticationService.redirectUrl = url;  
        // // Not signed in so redirects to signin page.  
        // this.router.navigate(['/login']);  
        // return false;  
    }  
  
} 