import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {

  copyDate: any;
  userData: any;
  formEditValue: any;
  showError: string = "";

  constructor( public apiService: ApiService) {
    let data = localStorage.getItem('userData');

    if(data){
      this.userData = JSON.parse(data);
      console.log("DATA : ", data)
    }

    this.getUserData()
  }

  getUserData() {

    this.apiService.getMethod('user/' + this.userData.id).subscribe({
      next: (response) => {
        console.log(response);

        if (response) {
          this.copyDate = this.userData = response;
        }
      },
      error: (e) => {
        console.error(e);
        if (e?.error) {
          this.showError = e.error.message;
        }
      },
      complete: () => console.info('complete')
    });
    
  }

  onEdit(formData: any) {

    this.formEditValue = formData;

    this.apiService.putMethod(this.formEditValue, 'user/' + this.userData.id).subscribe({
      next: (v) => {
        console.log(v);
        this.getUserData();
        this.apiService.showHideModal('visible', 'Category has been updated successfully', 'success', 4000);
      },
      error: (e) => {
        console.error(e);
        if (e?.error) {
          this.showError = e.error.message;
        }
      },
      complete: () => console.info('complete')
    });
    
  }

}
