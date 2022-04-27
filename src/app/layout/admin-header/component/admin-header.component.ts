import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-header',
  templateUrl: '../view/admin-header.component.html',
})
export class AdminHeaderComponent implements OnInit {

 dashboardRoute : any = environment.adminDashboard;
 profileRoute : any = environment.adminProfile;
 bookingList : any = environment.bokkingList;
 settingRoute : any = environment.adminStting;
 homeRoute : any = environment.adminHome;
 aboutRoute : any = environment.adminAbout;
 serviceRoute : any = environment.adminService;
 contactRoute : any = environment.adminContact;
 privacyRoute : any = environment.adminPrivacy;
  constructor() { }

  ngOnInit(): void {
  }

}
