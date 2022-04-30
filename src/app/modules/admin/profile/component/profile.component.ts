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
  selector: 'app-profile',
  templateUrl: '../view/profile.component.html',
})
export class ProfileComponent implements OnInit {

  profileForm: any = FormGroup;
  changePasswordForm: any = FormGroup;
  submitted: any;
  submitted2: any;
  readonly NoWhitespaceRegExp: RegExp = new RegExp("\\S");

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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

  }

  get f() {
    return this.profileForm.controls;
  }

  get p() {
    return this.changePasswordForm.controls;
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
