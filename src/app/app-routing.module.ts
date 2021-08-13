import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/authentication',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    loadChildren: () => import('~/app/authentication/authentication.modeule').then((m) => m.AuthenticationModule),
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
