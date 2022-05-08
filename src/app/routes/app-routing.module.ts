import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FrontHomeComponent } from '../modules/front/home/component/home.component';

const routes: Routes = [
  {
    path : '',
    component : FrontHomeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
