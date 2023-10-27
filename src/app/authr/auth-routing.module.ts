import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';

const authRoutes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'reset',
  //   component: ResetComponent
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('../authr/auth.module').then(m => m.AuthModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }