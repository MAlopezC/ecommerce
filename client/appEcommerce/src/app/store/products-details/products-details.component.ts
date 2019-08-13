import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';
import { Product } from 'src/app/model/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  public productCode : string;

  constructor(
    public activatedRoute: ActivatedRoute, public cart:Cart ,  private productsRepositoryService : ProductRepositoryService
  ) { }
  

  ngOnInit() {
    this.activatedRoute.params.subscribe((params :any)=>{
      return this.productCode = params['productCode'];
       })
  }
  get product(): Product{
    return this.productsRepositoryService.getProductsById(this.productCode)
  } 
  addToCart  = () =>this.cart.addLine(this.product)

}
