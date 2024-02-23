import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environment/environment';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})

export class CategoryListComponent {

  categories: any = [];
  keyword: string = '';
  categoryMenu: any;
  fileUrl: string = environment.fileUploadUrl;

  constructor(public apiservice: ApiService, private router: Router) {
    this.getCategories();
    // console.log(router.url);
  }

  getCategories() {
    // console.log("getCategories Called");
    this.apiservice.getMethod('home-categories').subscribe({
      next: (response) => {
        this.categories = response;
        // console.log("home-categories respose : ", response);
      },
      error: (error) => {
        console.error('error in getCategories', error);
      },
      complete: () => console.info('getCategories complete'),
    });
  }
  
  redirectSubCategory(categoryId: number) {
    // console.log("Redirecting to /subcategory/")
    this.router.navigate(['/subcategory/' + categoryId]);
  }

  searchByKey(value: number) {
    this.router.navigate(['/product-bycategory/' + value]);
  }
  
}
