import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
//
// export class User {
//   first_name: string;
//   last_name: string;
//   account: string;
//   pin: string;
//   bal: number;
//
//   constructor(first_name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }


@Injectable()
export class AuthService {
  currentUser: any;

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
        let access = (credentials.pin === "1234" && credentials.account === "1234");
        this.currentUser = credentials;
        observer.next(access);
        observer.complete();
      });
    }
  }

  public    register(credentials) {
    if (credentials.account === null || credentials.pin === null) {
      return Observable.throw("Please insert credentials");
    } else {
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
