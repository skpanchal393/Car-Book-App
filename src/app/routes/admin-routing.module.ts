import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../modules/admin/dashboard/component/dashboard.component';
import { environment } from '../../environments/environment';
import { SignInComponent } from '../modules/admin/sign-in/component/sign-in.component';
import { ProfileComponent } from '../modules/admin/profile/component/profile.component';

const routes: Routes = [
    {
        path : environment.admin,
        component : SignInComponent
    },
    {
        path : environment.adminDashboard,
        component : DashboardComponent
    },
    {
        path : environment.adminSignIn,
        component : SignInComponent
    },
    {
        path : environment.adminProfile,
        component : ProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
