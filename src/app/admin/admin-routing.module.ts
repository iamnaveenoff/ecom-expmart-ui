import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminGuard} from "../admin.guard";
import {AdminAddProductComponent} from "./admin-add-product/admin-add-product.component";
import {AdminLayoutComponent} from "./shared/admin-layout/admin-layout.component";
import {AdminAddCategoryComponent} from "./admin-add-category/admin-add-category.component";
/*
const routes: Routes = [
  { path: '', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  { path: 'add-product', component: AdminAddProductComponent, canActivate: [AdminGuard] },
];*/
/*const routes: Routes = [
  // Add the routes for admin dashboard and its children
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'add-product', component: AdminAddProductComponent },
      { path: '', component: AdminDashboardComponent },
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  // Other routes can go here
];*/


const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent, // The layout that wraps the sidebar
    children: [
      { path: '', component: AdminDashboardComponent }, // default admin page
      { path: 'add-product', component: AdminAddProductComponent },
      { path: 'add-category', component: AdminAddCategoryComponent },
      // { path: 'users', component: AdminUsersComponent },
      // { path: 'settings', component: AdminSettingsComponent },
      // add other routes here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
