import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';

console.warn('admin module is loaded')
@NgModule({
  declarations: [
    // LoginComponent,
    // ResetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }