import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { PostComponent } from './components/Post/post.component'

@NgModule({
  declarations: [PostComponent],
  imports: [NativeScriptCommonModule],
  exports: [PostComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
