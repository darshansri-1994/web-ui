import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-app-5';
  users = []
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe((res:any)=>{
      this.users = res['data'];
      console.log("users",this.users)
    })
  }
}
