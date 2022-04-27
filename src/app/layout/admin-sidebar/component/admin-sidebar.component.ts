import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: '../view/admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {

  profileRoute : any = environment.adminProfile;
  dashboardRoute : any = environment.adminDashboard;
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
