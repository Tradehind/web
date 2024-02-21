import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.css'
})
export class SubcategoryComponent {

  keyword: string = '';
  subCategoryId: any;
  products: any = [];
  relatedCategory: any = [];
  relatedProducts: any = [];

  constructor(private route: ActivatedRoute, public router: Router, public apiService: ApiService) {
  }

  ngOnInit() {
    let currentRoute = this.router.url;
    console.log(currentRoute);

    let checkUrl = currentRoute.includes('subcategory');
    console.log(checkUrl);

    this.route.params.subscribe((params) => {
      this.subCategoryId = params['id'];
      this.getsubCategoryProducts();
    });
  }

  getsubCategoryProducts() {
    this.apiService
      .getMethod('subsubcategory-by-subcategory?subSubCategoryId=' + this.subCategoryId).subscribe({
        next: (response) => {
          console.log('getsubCategoryProducts response : ', response);
          this.products = response.data;
          this.relatedCategory = response.relatedCategory;
          this.relatedProducts = response.relatedProducts;
        },
        error: (error) => {
          console.error(error, 'error');
        },
        complete: () => console.info('complete'),
      });
  }

}
