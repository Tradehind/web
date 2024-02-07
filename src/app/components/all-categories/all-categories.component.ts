import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-all-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.css',
})
export class AllCategoriesComponent {
  categories: any = [];
  fileUrl: string = environment.fileUploadUrl;

  constructor(public apiservice: ApiService, private router: Router) {
    this.getCategories();
  }

  getCategories() {
    console.log('in con get categories');
    this.apiservice.getMethod('home-categories').subscribe({
      next: (resp) => {
        this.categories = resp;
        console.log('in con dsffasdasd');
      },
      error: (e) => {
        console.error(e, 'error');
      },
      complete: () => console.info('complete'),
    });
  }
}
