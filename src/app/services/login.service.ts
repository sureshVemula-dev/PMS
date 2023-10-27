import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public appConfig: any = environment.apiBaseUrl;
  public formdata = new FormData();

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 

  }

  post(url: string, apiData: any): Observable<any> {
    url = this.appConfig + url;
    return this.http.post(url, apiData);
  }
}
