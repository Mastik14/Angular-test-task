import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { Task3Component } from './task3/task3.component';
import { Task1Module } from './task1/task1.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Task3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Task1Module,
    Task1Module,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }