import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FrontHomeComponent } from '../modules/front/home/component/home.component';
import { FrontAboutComponent } from '../modules/front/about/component/about.component';
import { FrontContactUsComponent } from '../modules/front/contact-us/component/contact-us.component';
import { FrontOurServiceComponent } from '../modules/front/our-service/component/our-service.component';
import { FrontPrivacyComponent } from '../modules/front/privacy/component/privacy.component';

const routes: Routes = [
  {
    path: '',
    component: FrontHomeComponent
  },
  {
    path: environment.about,
    component: FrontAboutComponent
  },
  {
    path: environment.contactUS,
    component: FrontContactUsComponent
  },
  {
    path: environment.service,
    component: FrontOurServiceComponent
  },
  {
    path: environment.privacy,
    component: FrontPrivacyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
