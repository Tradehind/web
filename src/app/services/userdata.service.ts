import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  url = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
}
