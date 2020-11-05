import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Message {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss'],
})
export class Task4Component {
  public messages: Message[];

  constructor(private http: HttpClient) {}

  onInputChange($event) {
    this.updateMessages($event.target.value);
  }

  private updateMessages(keyword: string) {
    this.searchMessages(keyword)
      .pipe(first())
      .subscribe((messages) => (this.messages = messages));
  }

  searchMessages(keyword: string): Observable<Message[]> {
    return this.http
      .get<Message[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((messages) =>
          messages.filter((message) => message.name.indexOf(keyword) > -1)
        )
      );
  }
}
