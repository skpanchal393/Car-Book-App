import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-our-service',
  templateUrl: '../view/our-service.component.html',
  styleUrls: ['../style/our-service.component.css']
})
export class FrontOurServiceComponent implements OnInit {

  homeRoute : any = environment.home;

  constructor() { }

  ngOnInit(): void {
  }

}
