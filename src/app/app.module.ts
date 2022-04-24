import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// dependency
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
