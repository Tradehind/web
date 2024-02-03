import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

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
  keyword: string = '';
  public isOtpSent: boolean = false;
  public mobileNumber: any = '';
  public currentOtp: any;
  public enteredOtp: any;
  public currentPage: any = '';
  public userData: any;

  constructor(
    public apiService: ApiService,
    private location: Location,
    private router: Router
  ) {
    this.location.onUrlChange((x) => this.urlChange(x));
    let data = localStorage.getItem('userData');

    if (data) {
      this.userData = JSON.parse(data);
    }
  }

  sendOtp() {
    let data = {
      phone: this.mobileNumber,
    };
    this.apiService
      .getMethod('share-user-otp?phone=' + this.mobileNumber)
      .subscribe({
        next: (v) => {
          console.log(v);
          if (v?.otp) {
            this.currentOtp = v.otp;
            this.isOtpSent = true;
          }
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => console.info('complete'),
      });
  }

  verifyOtp() {
    if (this.enteredOtp == this.currentOtp) {
      // alert("otp matched")
      let data = {
        phone: this.mobileNumber,
      };
      this.apiService.postMethod(data, 'user-login').subscribe({
        next: (v) => {
          console.log(v);

          this.apiService.showHideModal(
            'visible',
            'Logged in successfully!',
            'success',
            4000
          );
          $('#loginModal').modal('hide');

          if (v?.token) {
            localStorage.setItem('webToken', v.token);
          }
          if (v?.data) {
            localStorage.setItem('userData', JSON.stringify(v.data));
            this.userData = v.data;
          }
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => console.info('complete'),
      });
    } else {
      this.apiService.showHideModal(
        'warning',
        'OTP does not matched!',
        'success',
        4000
      );
    }
  }

  urlChange(path: any) {
    console.log(path, 'path--------');
    this.currentPage = path;
  }

  searchByKey() {
    this.router.navigate(['/product-list/' + this.keyword]);
  }

  onEnterClick() {
    // Programmatically trigger the button click event
    this.searchByKey();
  }
}
