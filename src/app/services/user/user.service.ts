import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  companyId: number,
  companyName: string,
  isAdmin: boolean,
  name: string,
  userId: number
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  logiran: boolean = false;


  login(username: string, password: string) {
    this.http.post("https://jupitermobiletest.jupiter-software.com:30081/jupitermobilex/gen/api/food",
      {
        "db": "Food",
        "queries": [
          {
            "query": "spUsersAzur",
            "params": {
              "action": "login",
              "email": username,
              "password": password
            }
          }
        ]
      }).subscribe((res: Array<User>) => {
        console.log(res);
        if (res.length == 1) this.logiran = true;
      });

  }

}
