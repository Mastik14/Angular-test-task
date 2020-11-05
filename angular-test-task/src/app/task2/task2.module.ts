import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Task2Component }
];

@NgModule({
  declarations: [Task2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Task2Module { }
