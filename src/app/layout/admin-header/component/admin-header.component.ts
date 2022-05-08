import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
width: 1000,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});
@Component({
  selector: 'app-admin-header',
  templateUrl: '../view/admin-header.component.html',
})
export class AdminHeaderComponent implements OnInit {

 dashboardRoute : any = environment.adminDashboard;
 profileRoute : any = environment.adminProfile;
 bookingList : any = environment.bookingList;
 settingRoute : any = environment.adminStting;
 loginRoute : any = environment.adminSignIn;

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear();
    Toast.fire({
      icon: 'success',
      title: "Logout Successfully"
    })
    this.router.navigate(['/'+this.loginRoute]);
  }
}
