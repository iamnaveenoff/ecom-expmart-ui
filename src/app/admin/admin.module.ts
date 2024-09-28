import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideNavigationComponent } from './shared/side-navigation/side-navigation.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import {AdminGuard} from "../admin.guard";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    AdminDashboardComponent,
    SideNavigationComponent,
    AdminAddProductComponent,
    AdminLayoutComponent,
    AdminAddCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    FormsModule
  ],
  providers: [AdminGuard]
})
export class AdminModule { }
