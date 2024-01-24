import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Router } from '@angular/router';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = environment.apiUrl;
  fileUploadUrl: string = environment.fileUploadUrl;
  token: any = localStorage.getItem('token');
  apiHeaders: any;

  constructor(private http: HttpClient, public router: Router) {
    this.apiHeaders = {
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    }
  }

  login(formData: any): Observable<any> {
    const apiPath = this.apiUrl + 'admin-login';
    return this.http.post(apiPath, formData);
  }

  postMethod(data: any, prefixUrl: string): Observable<any> {
    const apiPath = this.apiUrl + prefixUrl;
    return this.http.post(apiPath, data, this.apiHeaders);
  }

  putMethod(data: any, prefixUrl: string): Observable<any> {
    const apiPath = this.apiUrl + prefixUrl;
    return this.http.put(apiPath, data, this.apiHeaders);
  }

  fileUploadMethod(data: any, prefixUrl: string): Observable<any> {
    console.log(data, 'data');

    const formData = new FormData();
    for (const key of Object.keys(data)) {
      formData.append(key, data[key]);
    }

    const apiPath = this.fileUploadUrl + prefixUrl;
    return this.http.post(apiPath, formData, this.apiHeaders);
  }

  getMethod(prefixUrl: string): Observable<any> {
    const apiPath = this.apiUrl + prefixUrl;
    return this.http.get(apiPath, this.apiHeaders);
  }

  getLocalTime(localstring: string) {
    const originalDate = new Date(localstring);
    const options: any = {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };

    return originalDate.toLocaleString('en-US', options);
  }

  showHideModal(visibility: string, msg: string, type: string, timeout: number) {


    let alertId = '';
    if (type == 'success') {
      alertId = '#success-alert';
    } else if (type == 'warning') {
      alertId = '#warning-alert';
    } else if (type == 'error') {
      alertId = '#error-alert';
    }

    $(alertId + " #spanalert").text(msg);

    if (visibility == 'visible') {
      $(alertId).show();

      setTimeout(() => {
        $(alertId).hide();
      }, 4000);
    } else {
      $(alertId).hide();
    }



  }

  async showFileSelected(files: any): Promise<string | undefined> {
    return new Promise<string | undefined>((resolve) => {
      let image;
      const file = files.files[0];
      console.log(file, 'file23243');
      if (file) {
        // Read the selected file as a data URL
        const reader = new FileReader();
        reader.onload = (e: any) => {
          image = e.target.result;
          resolve(image);
        };
        console.log(image, 'image');
        reader.readAsDataURL(file);
      }
    });
  }


}