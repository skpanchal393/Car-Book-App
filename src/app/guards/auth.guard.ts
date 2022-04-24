import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  adminDataObject : any;
  userId : any;
  getUserObj : any;
  userRole : any;
  homeRoute : any = environment.home;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.adminDataObject = sessionStorage.getItem('adminData');
    var dataUser = JSON.parse(this.adminDataObject);
    if (dataUser) {
      return true;
    }
    this.router.navigate(['/'+this.homeRoute]);
    return false;
  }
  
}
