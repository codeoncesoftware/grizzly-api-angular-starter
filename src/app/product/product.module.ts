import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../core/material.module';
import { ProfileComponent } from '../auth/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule ,
    CustomMaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule

  ]
})
export class ProductModule { }
