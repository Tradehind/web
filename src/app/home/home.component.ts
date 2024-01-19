import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeBannerComponent } from '../components/home-banner/home-banner.component';
declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  greetingText = 'Welcome';
  greetingsArr = [
    'Welcome',
    'पधारो सा',
    'સ્વાગત છે',
    'வரவேற்பு',
    'ಸ್ವಾಗತ',
    'സ്വാഗതം',
    'ସ୍ୱାଗତ',
    'ਸੁਆਗਤ ਹੈ',
  ];

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

  blogs = [
    {
      imgPath: 'assets/imgs/Blog-imgs/Blog Image1.png',
      title: 'first blog',
      description: 'This is first blog',
    },
    {
      imgPath: 'assets/imgs/Blog-imgs/Blog Image2.png',
      title: 'second blog',
      description: 'This is second blog',
    },
    {
      imgPath: 'assets/imgs/Blog-imgs/Blog Image3.png',
      title: 'third blog',
      description: 'This is third blog',
    },
    {
      imgPath: 'assets/imgs/Blog-imgs/Blog Image4.png',
      title: 'fourth blog',
      description: 'This is fourth blog',
    },
    {
      imgPath: 'assets/imgs/Blog-imgs/Blog Image4.png',
      title: 'fifth blog',
      description: 'This is fifth blog',
    },
  ];

  constructor() {
    console.log('in con');
    this.changeGreeting();
  }

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

  changeGreeting() {
    let env = this;
    var greetCount = 0;

    setInterval(function () {
      if (greetCount == 6) {
        greetCount = 0;
      } else {
        greetCount++;
      }
      env.greetingText = env.greetingsArr[greetCount];
    }, 5000);
  }
}
