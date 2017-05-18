import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Storage} from '@ionic/storage';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
  currentUser: any;

  constructor(private storage: Storage) {
  }

  public login(credentials) {
    if (credentials.account === null || credentials.pin === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // let url = 'http://localhost/mysite.com/public_html/logi... + credentials.email + ' & password = ' + credentials.password + '
      // ';
      // this.http.get(url).map(res => res.json()).subscribe(
      //   data => {
      //     if (data.status === "succes") {
      //     }
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = null;
        this.storage.get(credentials.account).then((val) => {
          if (val !== null) {
            access = (val.pin == credentials.pin);
            if (access) {
              this.currentUser = val;
            }

          }
          observer.next(access);
          observer.complete();
        });

      });
    }
  }

  public register(credentials) {
    if (credentials.account === null || credentials.pin === null) {
      return Observable.throw("Please insert credentials");
    } else {
      credentials.balance = 0;
      this.storage.set(credentials.account, credentials);
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public     getUserInfo(): any {
    return this.currentUser;
  }

  public    logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
