import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: '../view/about.component.html',
  styleUrls: ['../style/about.component.css']
})
export class FrontAboutComponent implements OnInit {

  homeRoute : any = environment.home;

  constructor() { }

  ngOnInit(): void {
  }

}
