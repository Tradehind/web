import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
  keyword: string = '';
  products:any= [];
  fileUrl:string = environment.fileUploadUrl;

  constructor(private route: ActivatedRoute, public apiService:ApiService) {

  }

  ngOnInit() {
    // Fetch the URL parameter 'id' from the route
    this.route.params.subscribe(params => {
      this.keyword = params['keyword'];
      this.getData();
    });
  }

  getData() {
    this.apiService.getMethod('search-product-bykeyword?keyword='+this.keyword).subscribe({
      next: (v) => {
        this.products = v.data;
        console.log('in con dsffasdasd', v);
      },
      error: (e) => {
        console.error(e, 'error');
      },
      complete: () => console.info('complete'),
    });
  }

}
