import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { DshboardComponent } from './dshboard/dshboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : '',
        component : MasterComponent,
        children : [
          {
            path : '',
            pathMatch : 'full',
            redirectTo : 'dashboard'
          },
          {
            path : 'dashboard',
            component : DshboardComponent
          }
        ]
      }
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
