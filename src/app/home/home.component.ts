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
  categoryMenu: any;
  hideMenu: boolean = false;
  homeProducts: any = [];
  fileUrl: string = environment.fileUploadUrl;

  products = [
    {
      imgPath: 'assets/imgs/product-imgs/8 (1).png',
      title: 'HSI Crusher',
    },
    {
      imgPath: 'assets/imgs/product-imgs/2 (1).png',
      title: 'Plywood',
    },
    {
      imgPath: 'assets/imgs/product-imgs/3 (1).png',
      title: 'Industrial Rack',
    },
    {
      imgPath: 'assets/imgs/product-imgs/4 (1).png',
      title: 'Motor',
    },
    {
      imgPath: 'assets/imgs/product-imgs/5 (1).png',
      title: 'Tyre',
    },
    {
      imgPath: 'assets/imgs/product-imgs/6 (1).png',
      title: 'Hydroclone',
    },
    {
      imgPath: 'assets/imgs/product-imgs/7 (1).png',
      title: 'Conveyor Chain',
    },
    {
      imgPath: 'assets/imgs/product-imgs/8 (1).png',
      title: 'HSI Crusher',
    },
    {
      imgPath: 'assets/imgs/product-imgs/9 (1).png',
      title: 'Bearing',
    },
    {
      imgPath: 'assets/imgs/product-imgs/10 (1).png',
      title: 'Solar Panel',
    },
    {
      imgPath: 'assets/imgs/product-imgs/1 (1).png',
      title: 'Roofing Sheet',
    },
    {
      imgPath: 'assets/imgs/product-imgs/2 (1).png',
      title: 'Plywood',
    },
    {
      imgPath: 'assets/imgs/product-imgs/3 (1).png',
      title: 'Industrial Rack',
    },
    {
      imgPath: 'assets/imgs/product-imgs/4 (1).png',
      title: 'Motor',
    },
    {
      imgPath: 'assets/imgs/product-imgs/5 (1).png',
      title: 'Tyre',
    },
    // {
    //   imgPath: 'assets/imgs/product-imgs/6 (1).png',
    //   title: 'Hydroclone',
    // },
    // {
    //   imgPath: 'assets/imgs/product-imgs/7 (1).png',
    //   title: 'Conveyor Chain',
    // },
    // {
    //   imgPath: 'assets/imgs/product-imgs/8 (1).png',
    //   title: 'HSI Crusher',
    // },
    // {
    //   imgPath: 'assets/imgs/product-imgs/9 (1).png',
    //   title: 'Bearing',
    // },
    // {
    //   imgPath: 'assets/imgs/product-imgs/10 (1).png',
    //   title: 'Solar Panel',
    // },
    // {
    //   imgPath: 'assets/imgs/product-imgs/6 (1).png',
    //   title: 'Hydroclone',
    // },
    // {
    //   imgPath: 'assets/imgs/product-imgs/7 (1).png',
    //   title: 'Conveyor Chain',
    // },
    // {
    //   imgPath: 'assets/imgs/product-imgs/8 (1).png',
    //   title: 'HSI Crusher',
    // },
    // {
    //   imgPath: 'assets/imgs/product-imgs/9 (1).png',
    //   title: 'Bearing',
    // },
  ];

  headerCategories = [
    {
      imgPath: 'assets/icons/home.png',
      name: 'Home Supplies',
    },
    {
      imgPath: 'assets/icons/industrial.png',
      name: 'Industrial Machinery',
    },
    {
      imgPath: 'assets/icons/electronics.png',
      name: 'Electronics and Electronic',
    },
    {
      imgPath: 'assets/icons/hospital.png',
      name: 'Hospital & Medical Supplies',
    },
    {
      imgPath: 'assets/icons/construction.png',
      name: 'Construction & Real State',
    },
    {
      imgPath: 'assets/icons/machinery.png',
      name: 'Machinery',
    },
  ];

  constructor(public apiService: ApiService, private router: Router) {
    console.log('in con');
    // this.changeGreeting();

    this.getBlogsData();
    this.getCategories();
    this.getHomeProducts();
  }

  ngOnInIt() {}

  // openProductDesc() {
  //   $('#openProductDesc').modal('show');
  // }

  // openAddProduct() {
  //   console.log('add product section open');
  //   $('#addProductModal').modal('show');
  //   console.log($('#addProductModal'), 'modal');
  // }
  // openAddCategory() {
  //   $('#addCategoryModal').modal('show');
  // }

  // changeGreeting() {
  //   let env = this;
  //   var greetCount = 0;

  //   setInterval(function () {
  //     if (greetCount == 6) {
  //       greetCount = 0;
  //     } else {
  //       greetCount++;
  //     }
  //     env.greetingText = env.greetingsArr[greetCount];
  //   }, 5000);
  // }

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
        this.categories = resp;
        console.log('in con dsffasdasd');
      },
      error: (e) => {
        console.error(e, 'error');
      },
      complete: () => console.info('complete'),
    });
  }

  setCategoryMenu(categoryData: any) {
    console.log(categoryData);
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
      error: (e) => {},
      complete: () => console.info('complete'),
    });
  }

  onKeyPress(event: any) {
    // Check if the pressed key is a number
    const isNumber = /[0-9]/.test(event.key);

    // If it's not a number, prevent the default behavior
    if (!isNumber) {
      event.preventDefault();
    }
  }
}
