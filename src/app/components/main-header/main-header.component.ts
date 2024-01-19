import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
  // providers: [ApiService],
})
export class MainHeaderComponent {}
