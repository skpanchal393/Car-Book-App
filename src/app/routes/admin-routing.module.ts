import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../modules/admin/dashboard/component/dashboard.component';
import { environment } from '../../environments/environment';
import { SignInComponent } from '../modules/admin/sign-in/component/sign-in.component';
import { ProfileComponent } from '../modules/admin/profile/component/profile.component';
import { AuthGuard } from '../guards/auth.guard';
import { LoginGuard } from '../guards/login.guard';
import { BookingListComponent } from '../modules/admin/booking-list/component/booking-list.component';
import { SettingComponent } from '../modules/admin/setting/component/setting.component';
import { CreatePageComponent, PageComponent } from '../modules/admin/pages/component/page.component';
import { BlogComponent, CreateBlogComponent } from '../modules/admin/blog/component/blog.component';

const routes: Routes = [
    {
        path : environment.admin,
        component : SignInComponent,
        canActivate: [LoginGuard],
    },
    {
        path : environment.adminSignIn,
        component : SignInComponent,
        canActivate: [LoginGuard],
    },
    {
        path : environment.adminDashboard,
        component : DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminProfile,
        component : ProfileComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.bookingList,
        component : BookingListComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminStting,
        component : SettingComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminPages,
        component : PageComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminPagesCreate,
        component : CreatePageComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminPagesEdit+'/:pageId',
        component : CreatePageComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminBlogs,
        component : BlogComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminBlogsCreate,
        component : CreateBlogComponent,
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminBlogsEdit+'/:pageId',
        component : CreateBlogComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
