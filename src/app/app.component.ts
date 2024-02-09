import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    MainHeaderComponent,
    HttpClientModule,
    EnquiryFormComponent
  ],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TradeHind';

  constructor(private router: Router) {

    let env = this;

    setInterval(() => {

      if (!localStorage.getItem('webToken')) {
        $('#loginPopupModal').modal('show');
      }


    }, 100000);

  }

  openEnquiryForm() {
    $('#enquiryModal').modal('show');
  }

}

$(window).on('load', function () {
  $('#enquiryModal').modal('show');
});