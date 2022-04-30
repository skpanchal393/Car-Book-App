import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// dependency
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxTinymceModule } from 'ngx-tinymce';

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
import { SettingComponent } from './modules/admin/setting/component/setting.component';
import { HomeComponent, CreateHomeComponent } from './modules/admin/pages/home/component/home.component';
import { AboutComponent ,CreateAboutComponent} from './modules/admin/pages/about/component/about.component';
import { ServiceComponent , CreateServiceComponent} from './modules/admin/pages/service/component/service.component';
import { ContactComponent ,CreateContactComponent } from './modules/admin/pages/contact/component/contact.component';
import { PrivacyComponent,CreatePrivacyComponent } from './modules/admin/pages/privacy/component/privacy.component';

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
    HomeComponent,
    CreateHomeComponent,
    AboutComponent,
    CreateAboutComponent,
    ServiceComponent,
    CreateServiceComponent,
    ContactComponent,
    CreateContactComponent,
    PrivacyComponent,
    CreatePrivacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminRoutingModule,
    NgbPaginationModule, 
    NgxTinymceModule.forRoot({
      baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.7.1/',
    }),
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
