import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
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
        HomeComponent
    ],
    providers: [],
    entryComponents: []
})

export class HomeModule { }
