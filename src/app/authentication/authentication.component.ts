import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'Authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  onNavigateToTabs() {
    this.routerExtensions.navigate(["../tabs"], { clearHistory: true });
  }

  onLouis() {}
}
