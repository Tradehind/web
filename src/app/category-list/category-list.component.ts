import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CategoryBannerComponent } from '../components/category-banner/category-banner.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CategoryBannerComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {}
