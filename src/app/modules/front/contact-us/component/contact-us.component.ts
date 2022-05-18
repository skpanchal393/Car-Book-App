import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: '../view/contact-us.component.html',
  styleUrls: ['../style/contact-us.component.css']
})
export class FrontContactUsComponent implements OnInit {

  homeRoute : any = environment.home;

  constructor() { }

  ngOnInit(): void {
  }

}
