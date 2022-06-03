import { TextEditorSidebarModule } from './../text-editor-sidebar/text-editor-sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor.component';

@NgModule({
  imports: [CommonModule, TextEditorSidebarModule],
  declarations: [TextEditorComponent],
  exports: [TextEditorComponent],
})
export class TextEditorModule {}
