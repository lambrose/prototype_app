import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';

@Component({
  selector: 'ns-app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor(
    private page: Page,
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute) {
}

ngOnInit() {
    this.page.actionBarHidden = true;
    this.routerExtension.navigate([{
      outlets: {
        trendTab: ['trend'],
        homeTab: ['home'],
        profileTab: ['profile']
    } }], { relativeTo: this.activeRoute });
}

  onLouis() {}
}
