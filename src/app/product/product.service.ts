import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { product } from './product.model';

@Injectable({
    providedIn: 'root' 
}) 
export class productservice {
    getAllproducts() {
      throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient, private router: Router) { }

    endpoint = environment.grizzlyUrl;

    getAllUsers(): Observable<product[]> {
        return this.http.get<product[]>(this.endpoint + '/getproduct');
    }
   

    deleteProduct(_id: string) {
        return this.http.delete(this.endpoint + '/deleteproduct/{product}', {
            params: { _id }
        });
    }

    updateProduct(Product : product) {
        return this.http.put(this.endpoint + '/updateproduct', Product);
    }

    

    }

