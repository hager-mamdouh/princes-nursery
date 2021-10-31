import { FielderrorModule } from './fielderror/fielderror.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { HomeArComponent } from './home-ar/home-ar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeEnComponent,
    HomeArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FielderrorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
