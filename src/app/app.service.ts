import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public postalBaseApi:any = environment.postalApi; 
  public appConfig:any = environment.apiBaseUrl; 
  public vendorportal:any = environment.vendorportal;
  public defaultHeaders: Headers = new Headers();
  public formdata = new FormData();
  public fileData: any;
  
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }
}
