import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
declare var $:any;
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
  selector: 'app-admin-sidebar',
  templateUrl: '../view/admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {

  profileRoute : any = environment.adminProfile;
  dashboardRoute : any = environment.adminDashboard;
  bookingList : any = environment.bookingList;
  settingRoute : any = environment.adminStting;
  pagesRoute : any = environment.adminPages;
  blogRoute : any = environment.adminBlogs;
  loginRoute : any = environment.adminSignIn;

  userName : any;
  userProfile: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    var loginObject : any = sessionStorage.getItem('adminData');
    var loginData : any = JSON.parse(loginObject);
    if(loginData){
      this.userName = loginData.vTitle +' '+ loginData.vFirstName;
    }
  }

  ngOnInit(): void {
  }

  redirectPages(){
    $("#showHideSiderBar").removeClass('sidebar-open');
    // $("#showHideSiderBar").addClassClass('sidebar-closed sidebar-collapse');
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
