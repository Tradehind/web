import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})

export class ProductListComponent {
  
  keyword: string = '';
  cities: any = [];
  products: any = [];
  productId: any;
  relatedCategory: any = [];
  relatedProducts: any = [];
  subSubCategoryId: any;
  fileUrl: string = environment.fileUploadUrl;

  constructor(private route: ActivatedRoute, public apiService: ApiService, private router: Router) {}

  ngOnInit() {
    let currentRoute = this.router.url;
    // console.log("currentRoute : ", currentRoute);

    let checkUrl = currentRoute.includes('product-bycategory');
    // console.log("checkUrl : ", checkUrl);

    if (!checkUrl) {
      // Fetch the URL parameter 'id' from the route
      this.route.params.subscribe((params) => {
        this.keyword = params['keyword'];
        this.getData();
      });
    } else {
      console.log('inside category list');
      this.route.params.subscribe((params) => {
        console.log(params, 'params');
        this.subSubCategoryId = params['id'];
         this.getProductsCategoryList();
      });
    }
  }

  getData() {
    this.apiService
      .getMethod('search-product-bykeyword?keyword=' + this.keyword)
      .subscribe({
        next: (response) => {
          this.products = response.data;
          this.relatedCategory = response.relatedCategory;
          this.relatedProducts = response.relatedProducts;
          // console.log('Product by keyword : ', response);
        },
        error: (error) => {
          console.error('error in getData', error);
        },
        complete: () => console.info('getData complete'),
      });
  }

  getProductsCategoryList() {
    this.apiService
      .getMethod(
        'search-by-subsubcategory?subSubCategoryId=' + this.subSubCategoryId
      )
      .subscribe({
        next: (response) => {
          this.products = response.data;
          this.relatedCategory = response.relatedCategory;
          this.relatedProducts = response.relatedProducts;
          // console.log('Product by category : ', response);
        },
        error: (error) => {
          console.error('error in getProductsCategoryList', error);
        },
        complete: () => console.info('getProductsCategoryList complete'),
      });
  }


  getCityList() {
    this.apiService.getMethod('city-list').subscribe({
      next: (response) => {
        this.cities = response;
        console.log('in city list api function', response);
        let cityArray: any = [];
        for (const city in this.cities) {
          let cityData = this.cities[city];
          cityArray = cityArray.concat(cityData);
        }
        console.log(cityArray);
      },
      error: (error) => {
        console.error('error in getCityList', error);
      },
      complete: () => console.info('getCityList complete'),
    });
  }

  showContactDetail(product: any, index: number) {
    // console.log('test');
    this.products[index].showContact = true;
  }

  openEnquiryModal(product: any) {
    this.apiService.openEnquiryForm(product);
  }

}
