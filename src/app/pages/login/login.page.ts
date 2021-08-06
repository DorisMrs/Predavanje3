import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name: string;
  password: string;
  

  constructor(private userService: UserService) { }

  ngOnInit() {
   console.log(this.userService.logiran);
  }

  login() {
    this.userService.login(this.name, this.password);
  }


}
