import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductGetComponent } from './product/product-get/product-get.component';
import { ProductResolve } from './product/product.resolver';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'product/create',
                component: ProductAddComponent
            },
            {
                path: 'product/edit/:id',
                component: ProductEditComponent
            },
            {
                path: 'products',
                component: ProductGetComponent,
                resolve: {
                    products: ProductResolve
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
    providers: [ProductResolve]
})

export class HomeRoutingModule { }
