import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { TrendRoutingModule } from './trend-routing.module';
import { TrendComponent } from './trend.component'
import { StoryComponent } from './components/story/story.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TrendComponent, StoryComponent],
  imports: [NativeScriptCommonModule, TrendRoutingModule, SharedModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TrendModule {}
