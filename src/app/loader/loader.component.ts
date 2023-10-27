import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public isLoading: Subject<boolean> | any;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.isLoading = this.loaderService.isLoading;
  }
}
