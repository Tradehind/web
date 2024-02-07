import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css',
})
export class HomeBannerComponent {
  keyword: string = '';

  constructor(public apiService: ApiService, public router: Router) {}

  onEnterClick() {
    if (this.keyword.length >= 2) {
      this.searchByKey();
    }
  }

  searchByKey() {
    this.router.navigate(['/product-list/' + this.keyword]);
  }
}
