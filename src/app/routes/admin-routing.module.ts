import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../modules/admin/dashboard/component/dashboard.component';
import { environment } from '../../environments/environment';
import { SignInComponent } from '../modules/admin/sign-in/component/sign-in.component';
import { ProfileComponent } from '../modules/admin/profile/component/profile.component';
import { AuthGuard } from '../guards/auth.guard';
import { BookingListComponent } from '../modules/admin/booking-list/component/booking-list.component';
import { SettingComponent } from '../modules/admin/setting/component/setting.component';
import { AboutComponent, CreateAboutComponent } from '../modules/admin/pages/about/component/about.component';
import { HomeComponent, CreateHomeComponent } from '../modules/admin/pages/home/component/home.component';
import { ServiceComponent, CreateServiceComponent } from '../modules/admin/pages/service/component/service.component';
import { ContactComponent, CreateContactComponent } from '../modules/admin/pages/contact/component/contact.component';
import { PrivacyComponent, CreatePrivacyComponent } from '../modules/admin/pages/privacy/component/privacy.component';

const routes: Routes = [
    {
        path : environment.admin,
        component : SignInComponent
    },
    {
        path : environment.adminSignIn,
        component : SignInComponent
    },
    {
        path : environment.adminDashboard,
        component : DashboardComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminProfile,
        component : ProfileComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.bokkingList,
        component : BookingListComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminStting,
        component : SettingComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminHome,
        component : HomeComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminCreateHome,
        component : CreateHomeComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminEditHome,
        component : CreateHomeComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminAbout,
        component : AboutComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminCreateAbout,
        component : CreateAboutComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminEditAbout,
        component : CreateAboutComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminService,
        component : ServiceComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminCreateService,
        component : CreateServiceComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminEditService,
        component : CreateServiceComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminContact,
        component : ContactComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminCreateContact,
        component : CreateContactComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminEditContact,
        component : CreateContactComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminPrivacy,
        component : PrivacyComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminCreatePrivacy,
        component : CreatePrivacyComponent,
        // canActivate: [AuthGuard],
    },
    {
        path : environment.adminEditPrivacy,
        component : CreatePrivacyComponent,
        // canActivate: [AuthGuard],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
