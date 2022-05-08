import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  adminDataObject : any;
  userId : any;
  getUserObj : any;
  userRole : any;
  homeRoute : any = environment.adminDashboard;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.adminDataObject = sessionStorage.getItem('adminData');
    var dataUser = JSON.parse(this.adminDataObject);
    if (dataUser === null) {
      return true;
    }
    this.router.navigate(['/'+this.homeRoute]);
    Swal.fire({
        icon: 'error',
        // title: '',
        text: "You Can't Access This Page",
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    return false;
  }
  
}
