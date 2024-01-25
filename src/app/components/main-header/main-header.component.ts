import { CommonModule } from '@angular/common';
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

  constructor(public apiService: ApiService){

  }

  sendOtp(){
    let data = {
      phone: this.mobileNumber
    }
    this.apiService.postMethod(data, 'user-login').subscribe({
      next: (v) => {
      },
      error: (e) => {
      },
      complete: () => console.info('complete')
    });
  }
}
