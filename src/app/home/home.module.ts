import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
  providers: [ApiService],
})
export class HomeModule {}
