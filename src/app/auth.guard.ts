import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      firebase.auth().onAuthStateChanged((user)=> {
        if(user){
          resolve(true);
        }else{
          this.router.navigate(['/login'])
          resolve(false);
        }
      })
    })
  }

}
