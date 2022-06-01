import { MentionService } from './text-editor/services/mention.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TextEditorComponent],
  exports: [TextEditorComponent],
  providers: [MentionService],
})
export class CommonUiModule {}
