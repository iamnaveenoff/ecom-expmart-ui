import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.apiService.getProductById(productId).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          this.product = response.data;
          console.log(JSON.stringify(this.product))

        }
      },
      (error: any) => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}
