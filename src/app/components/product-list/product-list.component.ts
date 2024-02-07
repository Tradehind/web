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
  // listItems = [
  //   { name: 'Jaw Crusher', link: '#' },
  //   { name: 'Stone Crusher', link: '#' },
  //   { name: 'Cone Crusher', link: '#' },
  //   { name: 'Mobile crusher', link: '#' },
  //   { name: 'Impact Crusher', link: '#' },
  //   { name: 'Roll crusher', link: '#' },
  //   { name: 'VSI Crusher', link: '#' },
  //   { name: 'HSI Crusher', link: '#' },
  //   { name: 'Crusher', link: '#' },
  // ];
  keyword: string = '';
  cities: any = [];
  products: any = [];
  relatedCategory: any = [];
  relatedProducts: any = [];
  subSubCategoryId: any;
  fileUrl: string = environment.fileUploadUrl;

  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService,
    private router: Router
  ) {
    console.log('In constructor');
    // this.getCityList();
  }

  ngOnInit() {
    let currentRoute = this.router.url;
    console.log(currentRoute);

    let checkUrl = currentRoute.includes('product-bycategory');
    console.log(checkUrl);

    if (!checkUrl) {
      // Fetch the URL parameter 'id' from the route
      this.route.params.subscribe((params) => {
        this.keyword = params['keyword'];
        this.getData();
      });
    } else {
      // search-by-subsubcategory?subSubCategoryId=86
      this.route.params.subscribe((params) => {
        this.subSubCategoryId = params['id'];
        this.getsubSubCategoryProducts();
      });
    }
  }

  getData() {
    this.apiService
      .getMethod('search-product-bykeyword?keyword=' + this.keyword)
      .subscribe({
        next: (v) => {
          this.products = v.data;
          this.relatedCategory = v.relatedCategory;
          this.relatedProducts = v.relatedProducts;
          // console.log('in con dsffasdasd', v);
        },
        error: (e) => {
          console.error(e, 'error');
        },
        complete: () => console.info('complete'),
      });
  }

  getsubSubCategoryProducts() {
    this.apiService
      .getMethod(
        'search-by-subsubcategory?subSubCategoryId=' + this.subSubCategoryId
      )
      .subscribe({
        next: (v) => {
          this.products = v.data;
          this.relatedCategory = v.relatedCategory;
          this.relatedProducts = v.relatedProducts;
          console.log('in con dsffasdasd', v);
        },
        error: (e) => {
          console.error(e, 'error');
        },
        complete: () => console.info('complete'),
      });
  }

  getCityList() {
    this.apiService.getMethod('city-list').subscribe({
      next: (v) => {
        this.cities = v;
        console.log('in city list api function', v);
        let cityArray: any = [];
        for (const city in this.cities) {
          let cityData = this.cities[city];

          cityArray = cityArray.concat(cityData);
        }
        console.log(cityArray);
      },
      error: (e) => {
        console.error(e, 'error');
      },
      complete: () => console.info('complete'),
    });
  }
}
