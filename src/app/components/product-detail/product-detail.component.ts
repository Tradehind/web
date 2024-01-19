import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  myFunction(smallImg: any): void {
    const mainImg: HTMLImageElement | null = document.getElementById(
      'main-img'
    ) as HTMLImageElement;
    if (mainImg) {
      mainImg.src = (smallImg as HTMLImageElement).src;
    }
  }
}
