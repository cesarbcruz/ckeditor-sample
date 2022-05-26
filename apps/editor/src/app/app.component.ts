import { Component } from '@angular/core';
import * as Editor from '../../../../ckeditor5/build/ckeditor';

@Component({
  selector: 'ckeditor-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'editor';
  public Editor: any;
  public config = {
    licenseKey: 'To5uX5zzBTbtyXnzqMnXKbYkPnAk8wwHE41JiXujwbMCsEiebiFhaodl6A=='
  };

  ngOnInit(): void {
    Editor.create(
      document.querySelector('.document-editor__editable'),
      this.config
    )
      .then( (editor:any) => {
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
