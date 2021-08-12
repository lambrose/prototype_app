import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/(trendTab:trend/default//homeTab:home/default//profileTab:profile/default)',
    pathMatch: 'full',
  },
  {
    path: 'trend',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/trend/trend.module').then((m) => m.TrendModule),
    outlet: 'trendTab',
  },
  {
    path: 'home',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
    outlet: 'homeTab',
  },
  {
    path: 'profile',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('~/app/profile/profile.module').then((m) => m.ProfileModule),
    outlet: 'profileTab',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
