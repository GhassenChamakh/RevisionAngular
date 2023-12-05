import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
  ]
})
export class ProductModule { }
