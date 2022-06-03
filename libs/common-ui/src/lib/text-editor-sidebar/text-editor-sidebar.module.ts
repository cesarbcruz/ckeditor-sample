import { TextEditorSidebarComponent } from './text-editor-sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [TextEditorSidebarComponent],
  exports: [TextEditorSidebarComponent],
})
export class TextEditorSidebarModule {}
