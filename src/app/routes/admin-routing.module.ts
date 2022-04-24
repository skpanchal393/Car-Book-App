import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../modules/admin/dashboard/component/dashboard.component';
import { environment } from '../../environments/environment';
import { SignInComponent } from '../modules/admin/sign-in/component/sign-in.component';
import { ProfileComponent } from '../modules/admin/profile/component/profile.component';
import { AuthGuard } from '../guards/auth.guard';

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
        canActivate: [AuthGuard],
    },
    {
        path : environment.adminProfile,
        component : ProfileComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
