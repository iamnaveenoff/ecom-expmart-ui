import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  totalResults: number = 0;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      (response: any) => {
        if (response.statusCode === 200 && response.data) {
          this.products = response.data;
          this.totalResults = response.data.length;
        }
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/productDetails', productId]);
  }
}
