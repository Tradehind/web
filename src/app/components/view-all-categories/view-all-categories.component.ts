import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-categories',
  standalone: true,
  imports: [],
  templateUrl: './view-all-categories.component.html',
  styleUrl: './view-all-categories.component.css'
})
export class ViewAllCategoriesComponent {

  categories: any;

  constructor(public apiService: ApiService, private router: Router) {
    this.getCategories();
  }
  getCategories() {
    this.apiService.getMethod('home-categories').subscribe({
      next: (resp) => {
        this.categories = resp
        console.log('category accessed');
      },
      error: (e) => {
        console.error(e, 'error');
      },
      complete: () => console.info('complete'),
    });
  }

}
