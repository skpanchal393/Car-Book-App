import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-setting',
  templateUrl: '../view/setting.component.html',
})
export class SettingComponent implements OnInit {

  dashboardRoute : any = environment.adminDashboard;

  constructor() { }

  ngOnInit(): void {
  }

}
