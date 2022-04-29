import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: '../view/home.component.html',
})
export class HomeComponent implements OnInit {

  dashboardRoute : any = environment.adminDashboard
  createHomeRoute : any = environment.adminCreateHome;

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-home',
  templateUrl: '../view/create-home.component.html',
})
export class CreateHomeComponent implements OnInit {

  dashboardRoute : any = environment.adminDashboard
  homeListRoute : any = environment.adminHome;

  constructor() { }

  ngOnInit(): void {
  }

}
