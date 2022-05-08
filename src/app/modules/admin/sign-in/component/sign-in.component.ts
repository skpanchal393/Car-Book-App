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
import { SignInService } from '../service/sign-in.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
declare var $: any;
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
  width: 1000,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

@Component({
  selector: 'app-sign-in',
  templateUrl: '../view/sign-in.component.html',
  styleUrls: ['../style/sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: any = FormGroup;
  submitted: any;
  readonly NoWhitespaceRegExp: RegExp = new RegExp("\\S");
  dashboardHome: any = environment.adminDashboard;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private signInService: SignInService,
    private spinner: NgxSpinnerService
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

  login() {
    this.spinner.show();
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('fail');
      this.spinner.hide();
      return;
    } else {
      let data = {
        "vEmail": this.f.emailId.value,
        "vPassword": this.f.password.value
      }
      console.log(data)

      this.signInService
        .login(data)
        .subscribe((res: any) => {
          if (res['status'] === 'success') {
            console.log("success", res);
            sessionStorage.setItem('adminData', JSON.stringify(res['data']));
            Toast.fire({
              icon: 'success',
              title: res['message']
            })
            this.router.navigate([this.dashboardHome]);
            $("#showHideSiderBar").removeClass('sidebar-open');
            this.spinner.hide();
          } else {
            console.log("fail", res)
            this.spinner.hide();
            Toast.fire({
              icon: 'error',
              title: res['message']
            })
          }
        }, (error: any) => {
          console.log(error)
          Toast.fire({
            icon: 'error',
            title: error['message']
          })
          this.spinner.hide();
        })
    }
  }
}
