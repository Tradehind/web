import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environment/environment';

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
  categoryData: any = [];
  subCategoryData: any = [];
  subSubCategoryData: any = [];
  fileUrl: string = environment.fileUploadUrl;

  constructor(private route: ActivatedRoute, public router: Router, public apiService: ApiService) {}

  ngOnInit() {
    let currentRoute = this.router.url;
    // console.log("currentRoute : ", currentRoute);

    let checkUrl = currentRoute.includes('subcategory');
    // console.log("checkUrl : ", checkUrl);

    this.route.params.subscribe((params) => {
      this.subCategoryId = params['id'];
      this.getsubCategoryProducts();
    });
  }

  getsubCategoryProducts() {
    this.apiService
      .getMethod('subsubcategory-by-subcategory?subSubCategoryId=' + this.subCategoryId).subscribe({
        next: (response) => {
          this.categoryData = response.mainCategory;
          console.log('categoryData Response : ', this.categoryData);

          this.subCategoryData = response.data;
          console.log('SubCategory Response : ', this.subCategoryData);
          
          this.subSubCategoryData = response.data.Subsubcategories;
          console.log('SubSubCategory Response : ', this.subSubCategoryData);
        },
        error: (error) => {
          console.error(error, 'error');
        },
        complete: () => console.info('complete'),
      });
  }

  redirectProductDetail(productId: number) {
    // console.log("Redirecting to /product-bycategory/")
    this.router.navigate(['/product-bycategory/' + productId]);
  }

}
