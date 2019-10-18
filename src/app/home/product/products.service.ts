import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from './Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  endpoint = environment.grizzlyUrl + '/api/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    console.log(ProductName, ProductDescription, ProductPrice);
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.post(this.endpoint + '/add', obj)
      .subscribe(res => {
        console.log('Done');
      });
  }

  getProducts(): Observable<Product[]> {
    return this
      .http
      .get<Product[]>(this.endpoint + '/all');
  }

  editProduct(id) {
    return this
      .http
      .get(this.endpoint + '/edit/' + id);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    return this
      .http
      .post(this.endpoint + '/update/' + id, obj);
  }

  deleteProduct(id) {
    return this
      .http
      .delete(this.endpoint + '/delete/' + id);
  }
}
