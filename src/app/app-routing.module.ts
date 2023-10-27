import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authr/login/login.component';
import { ResetComponent } from './authr/reset/reset.component';
import { NotFoundError } from 'rxjs';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'reset',
    component: ResetComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./authr/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: '**',
    component: NotFoundError
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }