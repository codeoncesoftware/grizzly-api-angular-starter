import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
import * as _ from 'lodash';
import { product } from './product.model';
import { productservice } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  data: product[];

  constructor(private productservice: productservice) { }

  ngOnInit() {
    this.productservice.getAllUsers()
      .subscribe(product => {
        this.data = product;
  });
}
  delete(_id) {
    this.productservice.deleteProduct(_id).subscribe(res => {
        this.data = _.filter(this.data );
      });
  }
 /*  //update() {
    this.productservice.updateProduct(this.data)
      .subscribe(res => {

      }); */ 
  
} ;






