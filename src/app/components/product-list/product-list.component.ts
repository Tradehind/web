import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  listItems = [
    { name: 'Jaw Crusher', link: '#' },
    { name: 'Stone Crusher', link: '#' },
    { name: 'Cone Crusher', link: '#' },
    { name: 'Mobile crusher', link: '#' },
    { name: 'Impact Crusher', link: '#' },
    { name: 'Roll crusher', link: '#' },
    { name: 'VSI Crusher', link: '#' },
    { name: 'HSI Crusher', link: '#' },
    { name: 'Crusher', link: '#' },
  ];
}
