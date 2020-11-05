import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Task3Component } from './task3.component';

export const routes: Routes = [
  { path: '', component: Task3Component }
];

@NgModule({
  declarations: [Task3Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Task3Module { }
