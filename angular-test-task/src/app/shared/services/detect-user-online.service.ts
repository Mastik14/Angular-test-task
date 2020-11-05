import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetectUserOnlineService {
  public isLogged$ = new BehaviorSubject<boolean>(false);

  public login() {
    this.isLogged$.next(true);
  }

  public logOut() {
    this.isLogged$.next(false);
  }

  public isUserLoggedIn() {
    return this.isLogged$;
  }
}
