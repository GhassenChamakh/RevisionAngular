import { Component } from '@angular/core';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private productService:ProductService){}
  add(f:any)
  {
   
   this.productService.addProduct(f.value).subscribe({
    next:()=>alert("product success addedd ")
   })
  }

}
