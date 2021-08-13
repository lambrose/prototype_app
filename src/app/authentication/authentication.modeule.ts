import { LoginComponent } from './login/login.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { AuthenticationRoutingModule } from './authentication-routing.modeule';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [NativeScriptCommonModule, AuthenticationRoutingModule],
  declarations: [AuthenticationComponent, LoginComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthenticationModule {}
