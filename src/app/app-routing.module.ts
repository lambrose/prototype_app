import { AuthenticationComponent } from './authentication/authentication.component';
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/authentication',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  },
  {
    path: 'tabs',
    loadChildren: () => import('~/app/tabs/tabs.module').then((m) => m.TabsModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}














// import { NgModule } from '@angular/core'
// import { Routes } from '@angular/router'
// import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/(tabsTab:tabs/default//trendTab:trend/default//homeTab:home/default//profileTab:profile/default)',
//     pathMatch: 'full',
//   },
//   {
//     path: 'tabs',
//     component: NSEmptyOutletComponent,
//     loadChildren: () => import('~/app/tabs/tabs.module').then((m) => m.TabsModule),
//     outlet: 'tabsTab',
//   },
//   {
//     path: 'trend',
//     component: NSEmptyOutletComponent,
//     loadChildren: () => import('~/app/trend/trend.module').then((m) => m.TrendModule),
//     outlet: 'trendTab',
//   },
//   {
//     path: 'home',
//     component: NSEmptyOutletComponent,
//     loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
//     outlet: 'homeTab',
//   },
//   {
//     path: 'profile',
//     component: NSEmptyOutletComponent,
//     loadChildren: () => import('~/app/profile/profile.module').then((m) => m.ProfileModule),
//     outlet: 'profileTab',
//   },
// ]

// @NgModule({
//   imports: [NativeScriptRouterModule.forRoot(routes)],
//   exports: [NativeScriptRouterModule],
// })
// export class AppRoutingModule {}
