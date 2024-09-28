import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../models/category.model";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.scss']
})
export class AdminAddCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  categories: Category[] = [];
  isEditMode: boolean = false;
  currentCategoryId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  onSubmit(): void {
    const categoryData: Category = {
      categoryName: this.categoryForm.value.name,
      categoryImage: this.categoryForm.value.image
    };
  }

  // Handle image upload and convert to Base64
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.categoryForm.patchValue({ image: reader.result });
    };
  }

  loadCategories() {
    // Mocking a service call to fetch categories
    this.categories = [
      {
        categoryName: 'category1',
        categoryImage: 'data:image/png;base64,...',
      },
      {
        categoryName: 'category2',
        categoryImage: 'data:image/png;base64,...',
      }
    ];
  }
}
