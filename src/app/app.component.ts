import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Find A Sitter!';
  isBaby: Boolean = undefined;
  type: String = '';
  
  constructor(private authService: AuthService){}

  checkLogin() : Boolean {
    return this.authService.isLoggedIn;
  };

  onClickSitter() : void {
    this.isBaby = false;
  }

  onClickBaby() {
    this.isBaby = true;
  }

  onClick(value: String) {
    this.type = value;
  }

}
