import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environment/environment';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



declare var $: any;

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})




export class ProductDetailComponent {
  products: any = [];
  relatedCategory: any = [];
  relatedProducts: any = [];
  productDetails: any = [];
  sellerDetails: any = [];
  sellerProducts: any = [];
  similarProducts: any = [];
  showContact: boolean = false;
  @ViewChild('owlElement') owlElement: any;

  fileUrl: string = environment.fileUploadUrl;

  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log('In Product Detail constructor');
    this.route.params.subscribe((params) => {
      let productId = params['id'];
      this.getproductDetail(productId);
      console.log('product details constructor');
    });


  }

  ngOnInit(): void {
    let env = this;
    console.log("ngonit working")

    setTimeout(() => {
      $('.owl-carousel').owlCarousel({
        autoplay: false,
        loop: false,

        rewind: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsiveClass: false,
        nav: true,
        items: 4,
        responsive: {
          0: {
            items: 1
          },
          568: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      })

      env.setClonedItemMaxWidth();
    }, 500);

  }


  setClonedItemMaxWidth(): void {
    setTimeout(() => {
      var parentDiv = $('.owl-stage');
      // Get all inner divs and set their width
      var innerDivs = parentDiv.find('.owl-item');
      // Set the width for each inner div (e.g., 100 pixels)
      innerDivs.width(300);
      innerDivs.height(300);
    }, 500);

  }

  myFunction(smallImg: any): void {
    const mainImg: HTMLImageElement | null = document.getElementById(
      'main-img'
    ) as HTMLImageElement;
    if (mainImg) {
      mainImg.src = (smallImg as HTMLImageElement).src;
    }
  }

  getproductDetail(id: any) {
    this.apiService.getMethod('product-by-id?id=' + id).subscribe({
      next: (productDetail) => {
        console.log(productDetail);
        if (productDetail.data) {
          this.sellerDetails = productDetail.data.seller;
          this.productDetails = productDetail.data.product;
          this.sellerProducts = productDetail.data.sellerProducts.slice(0, 3);
          this.similarProducts = productDetail.data.similarProducts;
          console.log('similarProducts ', this.similarProducts);
        }
      },
      error: (e) => { },
      complete: () => console.info('complete'),
    });
  }

  showNumber() {
    this.showContact = true;
  }

  openEnquiryModal(product: any) {
    this.apiService.openEnquiryForm(product);
  }

  productDetail(id: any) {
    this.router.navigate(['product-list/detail/' + id]);
  }
}


