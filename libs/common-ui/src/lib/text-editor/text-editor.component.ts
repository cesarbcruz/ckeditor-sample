/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as Editor from '../../../../third/ckeditor5/build/ckeditor';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.less'],
})
export class TextEditorComponent implements OnInit {
  @Output() changeContent = new EventEmitter<string>();

  public itemsMention = [
    {
      id: '@exemplo1',
      content:'<b>Exemplo 1</b>',
    },
    {
      id: '@exemplo2',
      content:'<b>Exemplo 2</b>',
    },
  ];

  public Editor: any;
  public config = {
    licenseKey: 'To5uX5zzBTbtyXnzqMnXKbYkPnAk8wwHE41JiXujwbMCsEiebiFhaodl6A==',
    mention: {
      feeds: [
        {
          marker: '@',
          feed: this.getFeedItems.bind(this)
        },
      ],
    },
  };

  ngOnInit(): void {
    Editor.create(
      document.querySelector('.document-editor__editable'),
      this.config
    )
      .then((editor: any) => {
        const toolbarContainer = document.querySelector(
          '.document-editor__toolbar'
        );
        if (toolbarContainer)
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);

        this.Editor = editor;

        this.configureEvents();
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  configureEvents() {
    this.Editor.model.document.on('change:data', () => {
      this.changeContent.emit(this.Editor.getData());
    });
  }

  getFeedItems(queryText: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const itemsToDisplay = this.itemsMention
          .filter(isItemMatching)
          .slice(0, 10);
        resolve(itemsToDisplay);
      }, 100);
    });

    function isItemMatching(item: any) {
      const searchString = queryText.toLowerCase();
      return (
        item.id.toLowerCase().includes(searchString)
      );
    }
  }
}
