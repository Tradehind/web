import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeBannerComponent } from '../components/home-banner/home-banner.component';
import { ApiService } from '../services/api.service';
import { environment } from '../../environment/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeBannerComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // greetingText = 'Welcome';
  // greetingsArr = [
  //   'Welcome',
  //   'पधारो सा',
  //   'સ્વાગત છે',
  //   'வரவேற்பு',
  //   'ಸ್ವಾಗತ',
  //   'സ്വാഗതം',
  //   'ସ୍ୱାଗତ',
  //   'ਸੁਆਗਤ ਹੈ',
  // ];
  blogs: any = [];
  categories: any = [];
  footerCategories: any = [];
  categoryMenu: any;
  hideMenu: boolean = false;
  homeProducts: any = [];
  fileUrl: string = environment.fileUploadUrl;

  constructor(public apiService: ApiService, private router: Router) {
    console.log('in con');
    // this.changeGreeting();

    this.getBlogsData();
    this.getCategories();
    this.getHomeProducts();
  }

  ngOnInIt() { }

  getBlogsData() {
    // console.log('in con dsffd');
    this.apiService.getMethod('web-blogs').subscribe({
      next: (v) => {
        this.blogs = v.data;

        // console.log('in con dsffasdasd');
      },
      error: (e) => {
        console.error(e, 'error');
      },
      complete: () => {
        // console.info('complete');
      },
    });
  }

  getCategories() {
    console.log('in con get categories');
    this.apiService.getMethod('home-categories').subscribe({
      next: (resp) => {
        this.categories = resp
        this.footerCategories = resp.slice(0, 3);
        console.log('in con dsffasdasd');
      },
      error: (e) => {
        console.error(e, 'error');
      },
      complete: () => console.info('complete'),
    });
  }

  // subCategory() {
  //   this.router.navigate(['/subcategory']);
  // }

  searchByKey(value: number) {
    this.router.navigate(['/product-bycategory/' + value]);
    window.scrollTo(0, 0);

  }

  setCategoryMenu(categoryData: any) {
    // console.log(categoryData);
    this.categoryMenu = categoryData;
    this.hideMenu = false;
  }

  sendEnquiry(formData: any) {
    console.log(formData, 'form data');

    this.apiService.postMethod(formData, 'leads').subscribe({
      next: (v) => {
        console.log(v);

        $('#enquiry').trigger('reset');
        this.apiService.showHideModal(
          'visible',
          'Enquiry has been sent successfully, we will contact you soon',
          'success',
          6000
        );
      },
      error: (e) => {
        console.error(e);
        if (e?.error) {
          // this.showError = e.error.message;
        }
      },
      complete: () => console.info('complete'),
    });
  }

  getHomeProducts() {
    this.apiService.postMethod({}, 'home-products').subscribe({
      next: (v) => {
        console.log(v);
        if (v.data) {
          this.homeProducts = v.data;
        }
      },
      error: (e) => { },
      complete: () => console.info('complete'),
    });
  }

  productDetails(id: any) {
    // this.apiService.getMethod('product-by-id?id=' + id).subscribe({
    //   next: (productDetail) => {
    //     console.log(productDetail);
    //     if (productDetail.data) {
    //       this.productDetails = productDetail.data;
    //     }
    //   },
    //   error: (e) => { },
    //   complete: () => console.info('complete'),
    // })
    this.router.navigate(['product-list/detail/' + id])
  }

  onKeyPress(event: any) {
    // Check if the pressed key is a number
    const isNumber = /[0-9]/.test(event.key);

    // If it's not a number, prevent the default behavior
    if (!isNumber) {
      event.preventDefault();
    }
  }

  viewAllCategories() {
    this.router.navigate(['/category-list']);
  }

  openEnquiryFormWithoutProduct() {
    // $('#enquiryForm').modal('show')
    this.apiService.openEnquiryFormWithoutProduct();
  }

  categoryList() {
    this.router.navigate(["/category-list"])
  }

  subSubCategory(id: any) {
    this.router.navigate(["/product-bycategory/" + id])
    window.scrollTo(0, 0);
  }

  openEnquiryModal(product: any) {
    this.apiService.openEnquiryForm(product);
  }

  categoryById(id: any) {
    this.router.navigate(["/subcategory/" + id])
    window.scrollTo(0, 0);
  }

  viewAllCategory(id: any) {
    this.router.navigate(["/viewAllCategory/" + id])
  }

  productDetail(id: any) {
    this.router.navigate(["/product-list/detail/" + id])
  }


}



