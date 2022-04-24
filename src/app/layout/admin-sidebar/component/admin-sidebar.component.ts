import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: '../view/admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {

  profileRoute : any = environment.adminProfile;
  dashboardRoute : any = environment.adminDashboard;
  
  constructor() { }

  ngOnInit(): void {
  }

}
