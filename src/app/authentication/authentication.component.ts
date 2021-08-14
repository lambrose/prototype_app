import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'Authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  isLoggingIn = true;

  constructor(private routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  onNavigateToLogin() {
    this.routerExtensions.navigate(['login'], { relativeTo: this.activeRoute });
  }

  onToggleAuthenticationType() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
