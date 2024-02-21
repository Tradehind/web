import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environment/environment';
import { ActivatedRoute, Router } from '@angular/router';
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
  // categoryId: any;
  fileUrl: string = environment.fileUploadUrl;

  constructor(public apiservice: ApiService, private router: Router) {
    this.getCategories();
    // this.searchByKey();
    console.log(router.url);
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
  
  redirectSubCategory(categoryId: number) {
    console.log("Clicked Redirect Button")
    this.router.navigate(['/subcategory/' + categoryId]);
  }

  searchByKey(value: number) {
    this.router.navigate(['/product-bycategory/' + value]);
  }
}
