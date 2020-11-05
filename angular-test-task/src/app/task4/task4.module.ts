import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task4Component } from './task4.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Task4Component }
];

@NgModule({
  declarations: [Task4Component],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class Task4Module { }
