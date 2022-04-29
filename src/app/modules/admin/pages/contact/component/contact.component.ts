import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: '../view/contact.component.html',
})
export class ContactComponent implements OnInit {

  createRoute : any = environment.adminCreateContact;

  constructor() { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-contact',
  templateUrl: '../view/create-contact.component.html',
})
export class CreateContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}