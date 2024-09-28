import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss']
})
export class AdminAddProductComponent implements OnInit{

  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.apiService.getCategories().subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          // this.categories = response.data;
          console.log(JSON.stringify(response))

        }
      },
      (error: any) => {
        console.error('Error fetching categories details:', error);
      }
    );
  }

}
