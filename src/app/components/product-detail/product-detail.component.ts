import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
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
  fileUrl: string = environment.fileUploadUrl;

  constructor(public apiService: ApiService, private route: ActivatedRoute) {
    console.log("In Product Detail constructor");
    this.route.params.subscribe((params) => {
      let productId = params['id'];
      this.getproductDetail(productId);
    });
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
          this.sellerProducts = productDetail.data.sellerProducts;
          this.similarProducts = productDetail.data.similarProducts;

          console.log("seller detail", this.sellerDetails)
        }
      },
      error: (e) => { },
      complete: () => console.info('complete'),
    })
  }

  // showContactDetail(id: any) {
  //   console.log('test');
  //   this.showContact = true;
  // }


}
