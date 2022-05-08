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
import { ProfileService } from '../service/profile.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
declare var $ : any;
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
  selector: 'app-profile',
  templateUrl: '../view/profile.component.html',
})
export class ProfileComponent implements OnInit {

  profileForm: any = FormGroup;
  changePasswordForm: any = FormGroup;
  submitted: any;
  submitted2: any;
  readonly NoWhitespaceRegExp: RegExp = new RegExp("\\S");
  dashboardRoute : any = environment.adminDashboard;
  userId : any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private profileService : ProfileService,
    private spinner: NgxSpinnerService
  ) { 
    var loginObject : any = sessionStorage.getItem('adminData');
    var loginData : any = JSON.parse(loginObject);
    if(loginData){
      this.userId = loginData.iAdminId;
    }
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      image: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });

    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    });

    this.getUser();
  }

  get f() {
    return this.profileForm.controls;
  }

  get p() {
    return this.changePasswordForm.controls;
  }

  getUser(){
    this.spinner.show();
    let data : any = {
      id : this.userId
    }
    this.profileService
        .getUserProfileAPI(data)
        .subscribe((res:any)=>{
          console.log(res)
          if (res['status'] === 'success') {
            this.f.firstName.setValue(res['data'][0]['vFirstName']);
            this.f.lastName.setValue(res['data'][0]['vLastName'])
            this.f.emailId.setValue(res['data'][0]['vEmail'])
            // this.f.image.setValue(res['data'][0][''])
            this.spinner.hide();
            console.log("success", res);
          }else{
            this.spinner.hide();
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
  profileUpdate(){
    this.submitted = true;
    if (this.profileForm.invalid) {
      console.log('fail');
      return;
    } else {
      let data = {
        "fistName": this.f.firstName.value,
        "lastName": this.f.lastName.value,
        "vEmail": this.f.emailId.value,
        "image" : this.f.image.value
      }
      console.log(data)
    }
  }

  changePassowrd(){
    this.submitted2 = true;
    if (this.changePasswordForm.invalid) {
      console.log('fail');
      return;
    } else {
      let data = {
        "oldPassword": this.p.oldPassword.value,
        "newPassword": this.p.newPassword.value
      }
      console.log(data)
    }
  }
}
