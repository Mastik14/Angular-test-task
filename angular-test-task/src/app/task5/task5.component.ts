import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss'],
})
export class Task5Component {
  public theme: string = 'theme-light';
  public select: string;

  public changeTheme(e): void {
    this.theme = this.select;
  }
}
