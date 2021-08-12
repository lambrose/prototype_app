import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { TrendRoutingModule } from './trend-routing.module';
import { TrendComponent } from './trend.component'

@NgModule({
  imports: [NativeScriptCommonModule, TrendRoutingModule],
  declarations: [TrendComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TrendModule {}
