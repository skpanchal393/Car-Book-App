import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-privacy',
  templateUrl: '../view/privacy.component.html',
})
export class PrivacyComponent implements OnInit {

  createRoute : any = environment.adminCreatePrivacy;

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-privacy',
  templateUrl: '../view/create-privacy.component.html',
})
export class CreatePrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}