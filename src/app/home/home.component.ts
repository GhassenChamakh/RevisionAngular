import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  product:any;
  selectedProduct:any;
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(data)=>this.product=data
    })

  }
  addToCart(p:any){
    this.productService.getCart().subscribe({
      next:(data) =>{
        let index=data.filter((pr)=>pr.id===p.id);
        if(index.length===-0){
          this.productService.addToCart(p).subscribe();
        }else {
          alert("exist")
        }
      }


    })


  }
  selectProduct(p:any){
    return this.selectedProduct=p;
  }

}
