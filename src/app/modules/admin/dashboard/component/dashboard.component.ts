import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../view/dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  dashboardRoute : any = environment.adminDashboard;
  BlogPageRoute : any = environment.adminBlogs;
  bookingPageRoute : any = environment.bookingList;

  constructor() { }

  ngOnInit(): void {
  }

}
