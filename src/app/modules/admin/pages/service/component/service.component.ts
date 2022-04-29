import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-service',
  templateUrl: '../view/service.component.html',
})
export class ServiceComponent implements OnInit {

  createRoute : any = environment.adminCreateService;

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-service',
  templateUrl: '../view/create-service.component.html',
})
export class CreateServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}