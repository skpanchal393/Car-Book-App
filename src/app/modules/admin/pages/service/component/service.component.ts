import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
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
  selector: 'app-service',
  templateUrl: '../view/service.component.html',
})
export class ServiceComponent implements OnInit {

  createRoute : any = environment.adminCreateService;

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-service',
  templateUrl: '../view/create-service.component.html',
})
export class CreateServiceComponent implements OnInit {

  html: any = '';
  editor: any;
  config: any = {
    height: 400,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic forecolor backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help',
    image_advtab: true,
    imagetools_toolbar:
      'rotateleft rotateright | flipv fliph | editimage imageoptions',
    content_css: [
      '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
      '//www.tinymce.com/css/codepen.min.css',
    ],
    formats: {
      removeformat: [
        {
          selector: 'h1,h2,h3,h4,h5,h6',
          remove: 'all',
          split: false,
          expand: false,
          block_expand: true,
          deep: true
        },
        {
          selector: 'b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small',
          remove: 'all',
          split: true,
          expand: false,
          deep: true
        },
        { selector: 'span', attributes: ['style', 'class'], remove: 'empty', split: true, expand: false, deep: true },
        { selector: '*', attributes: ['style', 'class'], split: false, expand: false, deep: true }
      ]
    },
    menubar: false,
    setup: (editor: any) => {
      this.editor = editor;
      editor.on('init', () => {
        editor.setContent(this.html);
      });
    },
    // selector : 'textarea'
  }
  myForm: any = FormGroup;
  submitted: any;
  readonly NoWhitespaceRegExp: RegExp = new RegExp("\\S");

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.NoWhitespaceRegExp)]],
      Image: ['', Validators.required],
      Description: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.NoWhitespaceRegExp)]],
      Status: ['', Validators.required],
    });
  }

  get f() {
    return this.myForm.controls;
  }

  get getStatusData() {
    return this.myForm.get('Status');
  }

  create() {
    this.submitted = true;
    if (this.myForm.invalid) {
      console.log('fail');
      return;
    } else {
      const formData: FormData = new FormData();
      formData.append("vTitle", this.f.title.value);
      formData.append("tDescription", this.f.Description.value);
      formData.append("eStatus", this.f.Status.value);
      formData.append("vImage", this.f.Image.value);

      formData.forEach((value, key) => {
        console.log(key + " " + value);
      });
    }

  }

}