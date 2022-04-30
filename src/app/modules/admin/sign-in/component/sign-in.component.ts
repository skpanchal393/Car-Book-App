import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: '../view/sign-in.component.html',
  styleUrls: ['../style/sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: any = FormGroup;
  submitted: any;
  readonly NoWhitespaceRegExp: RegExp = new RegExp("\\S");

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('fail');
      return;
    } else {
      let data = {
        "vEmail": this.f.emailId.value,
        "vPassword": this.f.password.value
      }
  
      console.log(data)
    }
  }
}
