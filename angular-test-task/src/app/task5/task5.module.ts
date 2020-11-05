import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5Component } from './task5.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: Task5Component }
];

@NgModule({
  declarations: [Task5Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class Task5Module { }
