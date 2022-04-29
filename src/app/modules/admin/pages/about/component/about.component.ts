import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: '../view/about.component.html',
})
export class AboutComponent implements OnInit {

  createRoute : any = environment.adminCreateAbout;

  constructor() { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-about',
  templateUrl: '../view/create-about.component.html',
})
export class CreateAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
