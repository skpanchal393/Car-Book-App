import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  adminDataObject : any;
  userId : any;
  getUserObj : any;
  userRole : any;
  homeRoute : any = environment.home;
  login : any = environment.adminSignIn;

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
    Swal.fire({
      icon: 'error',
      // title: '',
      text: 'You Can Not Access Pages Please Login',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
    this.router.navigate(['/'+this.login]);
    return false;
  }
  
}
