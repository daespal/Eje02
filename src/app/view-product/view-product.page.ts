import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {
  public product: Producto;

  constructor(private productService: ProductoService, private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.queryParams.subscribe((params) => {
      if(params.t){
        this.product = this.productService.getProductByIndexCar(params.pos);
      }else{
        this.product = this.productService.getProductByIndex(params.pos);
      }
      
      console.log(this.product);
    });
  }

}
