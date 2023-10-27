import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usernameControl: FormControl;
  hide: boolean = true;
  submitted = false;
  loginView: boolean = true;
  companyView: boolean = false;
  mailsendobj: any = {};
  addobj: any = {};

  constructor(
    private fb: FormBuilder,
    public spinner: LoaderService,
    public appService: AppService,
    private router: Router,
    // public tostar: ToastrService,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.usernameControl = this.loginForm.get('username') as FormControl;
  }

  keyPress(_event: KeyboardEvent) { }

  ngOnInit() { }

  formSubmit(action: string) {
    const usernameControl = this.loginForm.get('username');
    if (usernameControl && usernameControl.value !== null) {
      const username = usernameControl.value;
      const passwordControl = this.loginForm.get('password');
      if (passwordControl && passwordControl.value !== null) {
        const password = passwordControl.value;
        if (action === 'login') {
          console.log(username);
          console.log(password);
          this.companyView = true;
          this.loginView = false;
        } 
        else if (action === 'forget') {
          this.router.navigate(['/reset']);
        }
      } else {
        console.error('Password control value is null.');
      }
    } else {
      console.error('Username control value is null.');
    }
  }

  loginclick(){
    this.router.navigate(['/dashboard']);
  }

  gobackclick() {
    this.router.navigate(['/login']);
    this.loginView = true;
    this.companyView = false;
  }
}
