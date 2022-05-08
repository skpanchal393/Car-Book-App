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
import { BlogService } from '../service/blog.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

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
  selector: 'app-Blog',
  templateUrl: '../view/blog.component.html',
})
export class BlogComponent implements OnInit {

  createRoute: any = environment.adminBlogsCreate;
  editBlogRoute: any = environment.adminBlogsEdit;
  dashboardRoute : any = environment.adminDashboard;
  blogsData: any;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getBlogsList();
  }

  getBlogsList() {
    this.spinner.show();
    this.blogService
      .getBlogsListAPI('')
      .subscribe((res: any) => {
        console.log(res)
        if (res['status'] === 'success') {
          this.blogsData = res['data'];
          this.spinner.hide();
        } else {
          this.spinner.hide();
        }
      }, (error: any) => {
        this.spinner.hide();
        console.log(error)
      })
  }

  redirectEditBlog(data: any) {
    this.router.navigate(['/' + this.editBlogRoute + '/' + data.iBlogId]);
  }

  deleteBlog(data: any) {
    console.log(data);
  }
}


@Component({
  selector: 'app-Blog',
  templateUrl: '../view/create-blog.component.html',
})
export class CreateBlogComponent implements OnInit {

  BlogsListRoute: any = environment.adminBlogs;
  dashboardRoute : any = environment.adminDashboard;
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
  menuData: any;
  getBlogId : any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.getBlogId = params.get("BlogId");
      console.log(this.getBlogId)
      if(this.getBlogId !== null){
        this.getBlogsList(this.getBlogId);
      }
    });

    this.myForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.NoWhitespaceRegExp)]],
      menu: ['', Validators.required],
      buttonText: [''],
      buttonLink: [''],
      orderNo: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.NoWhitespaceRegExp)]],
      Image: [''],
      Description: ['', [Validators.required, Validators.minLength(1), Validators.pattern(this.NoWhitespaceRegExp)]],
      Status: ['', Validators.required],
    });
    this.getMenu();
  }

  get f() {
    return this.myForm.controls;
  }

  get getStatusData() {
    return this.myForm.get('Status');
  }

  get getMenuData() {
    return this.myForm.get('menu');
  }

  getMenu() {
    this.spinner.show();
    this.blogService
      .getAllMenuAPI('')
      .subscribe((res: any) => {
        console.log(res)
        if (res['status'] === 'success') {
          this.menuData = res['data'];
          this.spinner.hide();
        } else {
          this.spinner.hide();
        }
      }, (error: any) => {
        Toast.fire({
          icon: 'success',
          title: error['message']
        })
        this.spinner.hide();
        console.log(error)
      })
  }

  getBlogsList(data: any) {
    this.spinner.show();
    let reqData: any = {
      "iBlogId": data
    }
    this.blogService
      .getBlogsListAPI(reqData)
      .subscribe((res: any) => {
        console.log(res)
        if (res['status'] === 'success') {
          this.f.title.setValue(res['data'][0]['vTitle']);
          this.f.menu.setValue(res['data'][0]['iMenuId']);
          this.f.buttonText.setValue(res['data'][0]['vButtonText']);
          this.f.buttonLink.setValue(res['data'][0]['vButtonLink']);
          this.f.orderNo.setValue(res['data'][0]['iOrderId']);
          this.f.Description.setValue(res['data'][0]['tDescription']);
          this.f.Status.setValue(res['data'][0]['eStatus']);
          // this.f.Image.setValue(res['data'][0]['vImage']);
          this.spinner.hide();
        } else {
          this.spinner.hide();
        }
      }, (error: any) => {
        Toast.fire({
          icon: 'success',
          title: error['message']
        })
        this.spinner.hide();
        console.log(error)
      })
  }

  createBlog() {
    this.spinner.show();
    this.submitted = true;
    if (this.myForm.invalid) {
      console.log('fail');
      this.spinner.hide();
      return;
    } else {
      const formData: FormData = new FormData();
      formData.append("vTitle", this.f.title.value);
      formData.append("iMenuId", this.f.menu.value);
      formData.append("vButtonText", this.f.buttonText.value);
      formData.append("vButtonLink", this.f.buttonLink.value);
      formData.append("iOrderId", this.f.orderNo.value);
      formData.append("tDescription", this.f.Description.value);
      formData.append("eStatus", this.f.Status.value);
      formData.append("vImage", this.f.Image.value);

      formData.forEach((value, key) => {
        console.log(key + " " + value);
      });

      this.blogService
        .createtBlogsAPI(formData)
        .subscribe((res: any) => {
          if (res['status'] === 'success') {
            Toast.fire({
              icon: 'success',
              title: res['message']
            });
            this.router.navigate(['/' + this.BlogsListRoute])
            this.spinner.hide();
          } else {
            Toast.fire({
              icon: 'error',
              title: res['message']
            })
            this.spinner.hide();
          }
        }, (error: any) => {
          Toast.fire({
            icon: 'success',
            title: error['message']
          })
          this.spinner.hide();
          console.log(error)
        })
    }

  }

}
