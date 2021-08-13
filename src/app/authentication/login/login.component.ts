import { IUser } from '../../shared/interfaces/user.interface';
import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
    selector: 'ns-login',
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: IUser;

    constructor(private page: Page, private routerExtensions: RouterExtensions) {
      this.page.actionBarHidden = true;
    }

    onSubmit(userCredentials: IUser) {
      // if (!userCredentials.email || !userCredentials.password) {
      //     this.alert('Please provide both an email address and password.');
      //     return;
      // }

      this.user = {
        email: userCredentials.email,
        password: userCredentials.password
      };

      if (this.isLoggingIn) {
          this.login();
      } else {
          this.register();
      }
    }

    login() {
      // this.routerExtensions.navigate(['/tabs'], { clearHistory: true });
      this.routerExtensions.navigate(['/tabs']);
      // TBD
    }

    register() {
      // TBD
    }

    alert(message: string) {
        return alert({
            title: 'Loop',
            okButtonText: 'OK',
            message: message
        });
    }
}

