import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories: any = [];
  fileUrl: string = environment.fileUploadUrl;

  constructor(public apiservice: ApiService) {
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
