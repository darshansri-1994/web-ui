import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://13.201.46.110:3000"
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.apiUrl+"/persons");
  }
}
