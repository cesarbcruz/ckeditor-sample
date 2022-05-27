/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import * as Editor from '../../../../third/ckeditor5/build/ckeditor';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.less'],
})
export class TextEditorComponent implements OnInit {
  public Editor: any;
  public config = {
    licenseKey: 'To5uX5zzBTbtyXnzqMnXKbYkPnAk8wwHE41JiXujwbMCsEiebiFhaodl6A=='
  };

  ngOnInit(): void {
    Editor.create(
      document.querySelector('.document-editor__editable'),
      this.config
    )
      .then( (editor: any) => {
        const toolbarContainer = document.querySelector(
          '.document-editor__toolbar'
        );
        if (toolbarContainer)
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);

        this.Editor = editor;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}
