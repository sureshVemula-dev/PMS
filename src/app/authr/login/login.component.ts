import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(
    private fb: FormBuilder,
    public spinner: LoaderService,
    private router: Router,
    public appService: LoginService,
    public appservice: AppService,
    private http: HttpClient,
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
    if (action === 'login') {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      this.spinner.show();
      let userLogin: any[] = this.loginForm.value.username.split(",");
      let apiData = {
        username: userLogin[0],
        password: this.loginForm.value.password
      }
      console.log('Data-------', apiData);

      this.appService.post('api/login', apiData).subscribe(
        (result: any) => {
          if (result.StatusCode === '200') {
            this.loginView = false;
            this.companyView = true;
            console.log('Success');
          }
          this.spinner.hide();
        },
        (error: any) => {
          console.error('Error occurred:', error);
          this.spinner.hide();
        }
      );
    }
    else if (action === 'forget') {
      this.router.navigate(['/reset']);
    }
  }

  loginclick() {
    this.router.navigate(['/dashboard']);
  }

  gobackclick() {
    this.router.navigate(['/login']);
    this.loginView = true;
    this.companyView = false;
  }
}
