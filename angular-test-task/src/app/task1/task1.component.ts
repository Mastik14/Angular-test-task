import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {concatMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {DetectOnlineService} from '../shared/services/detect-online.service';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
})
export class Task1Component implements OnInit, OnDestroy {
  private todoSubscription: Subscription;
  public user: User;
  private isOnlineSubscribe: Subscription;

  constructor(
    private detectOnlineService: DetectOnlineService,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.isOnlineSubscribe = this.detectOnlineService.getOnlineStatus().subscribe(isOnline => {
      if (isOnline) {
        this.startPoling();
      } else {
        this.stopPoling();
      }
    });
  }

  ngOnDestroy(): void {
    this.stopPoling();
    this.isOnlineSubscribe.unsubscribe();
  }

  startPoling() {
    this.todoSubscription = timer(0, 1000)
      .pipe(
        concatMap(x => {
          return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + this.getRandomInt());
        })
      )
      .subscribe(user => {
        this.user = user;
      }, (error) => console.log(error));
  }

  stopPoling() {
    this.todoSubscription.unsubscribe();
  }

  private getRandomInt(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
