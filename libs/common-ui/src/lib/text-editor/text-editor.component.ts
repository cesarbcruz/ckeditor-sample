/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MentionPlugin } from './plugins/mention/mention.plugin';

import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import * as Editor from '../../../../third/ckeditor5/build/ckeditor';
import { MentionModel } from './plugins/mention/mention.model';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.less'],
})
export class TextEditorComponent implements OnInit {
  @Input() itemsMention: MentionModel[] = [];
  @Input() licenseKey =
    'To5uX5zzBTbtyXnzqMnXKbYkPnAk8wwHE41JiXujwbMCsEiebiFhaodl6A==';
  @Input() content = '';
  @Output() changeContent = new EventEmitter<string>();

  private Editor: any;
  private mention: MentionPlugin | undefined;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.mention = new MentionPlugin(this.itemsMention);
    this.create()
      .then((editor: any) => {
        this.configure(editor);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  private create() {
    return Editor.create(
      this.elementRef.nativeElement.querySelector('.document-editor__editable'),
      {
        licenseKey: this.licenseKey,
        mention: this.mention?.getConfig(),
      }
    );
  }

  private configure(instanceEditor: any) {
    const toolbarContainer = this.elementRef.nativeElement.querySelector(
      '.document-editor__toolbar'
    );
    if (toolbarContainer)
      toolbarContainer.appendChild(instanceEditor.ui.view.toolbar.element);

    this.Editor = instanceEditor;
    this.Editor.setData(this.content);
    this.mention?.addCommand(this.Editor);
  }
}
