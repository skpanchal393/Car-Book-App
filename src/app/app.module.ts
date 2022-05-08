import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// dependency
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxTinymceModule } from 'ngx-tinymce';
import { NgxSpinnerModule } from "ngx-spinner";

// Routing
import { AppRoutingModule } from './routes/app-routing.module';
import { AdminRoutingModule } from './routes/admin-routing.module';
//components
import { AppComponent } from './modules/front/index/component/app.component';
import { HeaderComponent } from './layout/header/component/header.component';
import { FooterComponent } from './layout/footer/component/footer.component';
import { DashboardComponent } from './modules/admin/dashboard/component/dashboard.component';
import { SignInComponent } from './modules/admin/sign-in/component/sign-in.component';
import { AdminHeaderComponent } from './layout/admin-header/component/admin-header.component';
import { AdminSidebarComponent } from './layout/admin-sidebar/component/admin-sidebar.component';
import { AdminFooterComponent } from './layout/admin-footer/component/admin-footer.component';
import { ProfileComponent } from './modules/admin/profile/component/profile.component';
import { BookingListComponent } from './modules/admin/booking-list/component/booking-list.component';
import { PageComponent, CreatePageComponent } from './modules/admin/pages/component/page.component';
import { BlogComponent, CreateBlogComponent } from './modules/admin/blog/component/blog.component';
import { SettingComponent } from './modules/admin/setting/component/setting.component';

import { FrontHomeComponent } from './modules/front/home/component/home.component';
import { FrontAboutComponent } from './modules/front/about/component/about.component';
import { FrontPrivacyComponent } from './modules/front/privacy/component/privacy.component';
import { FrontOurServiceComponent } from './modules/front/our-service/component/our-service.component';
import { FrontContactUsComponent } from './modules/front/contact-us/component/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SignInComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    ProfileComponent,
    BookingListComponent,
    SettingComponent,
    PageComponent,
    CreatePageComponent,
    BlogComponent, 
    CreateBlogComponent,
    FrontHomeComponent,
    FrontAboutComponent,
    FrontOurServiceComponent,
    FrontContactUsComponent,
    FrontPrivacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminRoutingModule,
    NgbPaginationModule, 
    NgxTinymceModule.forRoot({
      baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.7.1/',
    }),
    NgbAlertModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
