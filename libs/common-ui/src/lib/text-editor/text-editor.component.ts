import { MentionModel } from './model/mention.model';
import { MentionService } from './services/mention.service';
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import * as Editor from '../../../../third/ckeditor5/build/ckeditor';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.less'],
})
export class TextEditorComponent implements OnInit {
  @Input()
  itemsMention: MentionModel[] = [];
  @Input()
  licenseKey = 'To5uX5zzBTbtyXnzqMnXKbYkPnAk8wwHE41JiXujwbMCsEiebiFhaodl6A==';
  @Input()
  content = '';
  @Output() changeContent = new EventEmitter<string>();

  constructor(
    private mentionService: MentionService,
    private elementRef: ElementRef
  ) {
    mentionService.setItems(this.itemsMention);
  }

  public Editor: any;
  public config = {
    licenseKey: this.licenseKey,
    mention: {
      feeds: [
        {
          marker: '@',
          feed: this.mentionService.getFeedItems.bind(this),
        },
      ],
    },
  };

  ngOnInit(): void {
    Editor.create(
      this.elementRef.nativeElement.querySelector('.document-editor__editable'),
      this.config
    )
      .then((editor: any) => {
        const toolbarContainer = this.elementRef.nativeElement.querySelector(
          '.document-editor__toolbar'
        );
        if (toolbarContainer)
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);

        this.Editor = editor;

        this.Editor.setData(this.content);

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
}
