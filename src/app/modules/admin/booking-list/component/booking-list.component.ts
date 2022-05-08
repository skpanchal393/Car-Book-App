import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-booking-list',
  templateUrl: '../view/booking-list.component.html',
})
export class BookingListComponent implements OnInit {

  dashboardRoute : any = environment.adminDashboard;

  constructor() { }

  ngOnInit(): void {
  }

}
