import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
  // providers: [ApiService],
})
export class MainHeaderComponent {
  public isOtpSent: boolean = false;
  public mobileNumber: any = "";
  public currentOtp: any ;
  public enteredOtp: any;
  public currentPage: any = '';
  constructor(public apiService: ApiService, private location: Location){
    this.location.onUrlChange(x => this.urlChange(x));
  }

  sendOtp(){
    let data = {
      phone: this.mobileNumber
    }
    this.apiService.getMethod('share-user-otp?phone='+this.mobileNumber).subscribe({
      next: (v) => {
        console.log(v)
        if(v?.otp)
        {
          this.currentOtp = v.otp;
          this.isOtpSent = true;
        }
      },
      error: (e) => {
        console.error(e)
            },
      complete: () => console.info('complete')
    });
  }

  verifyOtp(){
    if(this.enteredOtp == this.currentOtp){
      // alert("otp matched")
      let data = {
        phone: this.mobileNumber
      }
      this.apiService.postMethod(data,'user-login').subscribe({
        next: (v) => {
          console.log(v);
          alert("user loggedin successful")
          $('#loginModal').modal('hide');

          if(v?.token){
            localStorage.setItem('webToken',v.token)
          }
        },
        error: (e) => {
          console.error(e)
              },
        complete: () => console.info('complete')
      });
    }
    else{
      alert("otp does not matched")
    }
  }
  urlChange(path:any){
    console.log(path, 'path');
    this.currentPage = path;
 
  }
}


