import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-header',
  templateUrl: '../view/admin-header.component.html',
})
export class AdminHeaderComponent implements OnInit {

 dashboardRoute : any = environment.adminDashboard;

  constructor() { }

  ngOnInit(): void {
  }

}
