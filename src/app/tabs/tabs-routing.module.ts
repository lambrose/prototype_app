// import { NgModule } from '@angular/core'
// import { Routes } from '@angular/router'
// import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'
// import { TabsComponent } from './tabs.component'

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/tabs/(trendTab:trend//homeTab:home//profileTab:profile)',
//     pathMatch: 'full',
//   },
//   {
//     path: 'tabs',
//     component: TabsComponent,
//     children: [
//       {
//         path: 'trend',
//         outlet: 'trendTab',
//         component: NSEmptyOutletComponent,
//         loadChildren: () => import('~/app/trend/trend.module').then((m) => m.TrendModule)
//       },
//       {
//         path: 'home',
//         outlet: 'homeTab',
//         component: NSEmptyOutletComponent,
//         loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule)
//       },
//       {
//         path: 'profile',
//         outlet: 'profileTab',
//         component: NSEmptyOutletComponent,
//         loadChildren: () => import('~/app/profile/profile.module').then((m) => m.ProfileModule),

//       },
//     ]
//   },
// ]

// @NgModule({
//   imports: [NativeScriptRouterModule.forChild(routes)],
//   exports: [NativeScriptRouterModule],
// })
// export class TabsRoutingModule {}











import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'
import { TabsComponent } from './tabs.component'

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'trend',
        outlet: 'trendTab',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/trend/trend.module').then((m) => m.TrendModule)
      },
      {
        path: 'home',
        outlet: 'homeTab',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'profile',
        outlet: 'profileTab',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/profile/profile.module').then((m) => m.ProfileModule),

      },
    ]
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TabsRoutingModule {}
















// const routes: Routes = [
//   {
//     path: 'default',
//     redirectTo: '/(trendTab:trend/default//homeTab:home/default//profileTab:profile/default)',
//     pathMatch: 'full',
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
