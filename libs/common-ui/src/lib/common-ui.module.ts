import { TextEditorComponent } from './text-editor/text-editor.component';
import { NgModule } from '@angular/core';
import { TextEditorModule } from './text-editor/text-editor.module';

@NgModule({
  imports: [TextEditorModule],
  exports: [TextEditorComponent]
})
export class CommonUiModule {}
