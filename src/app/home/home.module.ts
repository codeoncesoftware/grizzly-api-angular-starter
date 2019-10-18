import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductGetComponent } from './product/product-get/product-get.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SlimLoadingBarModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [

    ],
    declarations: [
        HomeComponent,
        ProductAddComponent,
        ProductEditComponent,
        ProductGetComponent
    ],
    providers: [],
    entryComponents: []
})

export class HomeModule { }
