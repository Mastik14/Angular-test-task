import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DetectOnlineService} from '../shared/services/detect-online.service';
import {DetectUserOnlineService} from '../shared/services/detect-user-online.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
})
export class Task2Component implements OnInit {
  public isUserOnline$: Observable<boolean>;

  constructor(
    private detectOnlineService: DetectOnlineService,
    public detectUserOnlineService: DetectUserOnlineService,
  ) {
  }

  ngOnInit() {
    this.isUserOnline$ = combineLatest(
      this.detectUserOnlineService.isUserLoggedIn(),
      this.detectOnlineService.getOnlineStatus()
    ).pipe(
      map(pair => {
        const [isUserLogged, isOnline] = pair;
        return isUserLogged && isOnline;
      })
    );
  }

  login() {
    this.detectUserOnlineService.login();
  }

  logOut() {
    this.detectUserOnlineService.logOut();
  }
}
