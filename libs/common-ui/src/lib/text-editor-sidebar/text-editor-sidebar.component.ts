/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'text-editor-sidebar',
  templateUrl: './text-editor-sidebar.component.html',
  styleUrls: ['./text-editor-sidebar.component.less'],
})
export class TextEditorSidebarComponent implements OnInit {

  @Input()
  contentEditor: Observable<string> | undefined;

  @Output()
  selectkeyWord = new EventEmitter<string>();

  public keywords: string [] = []

  ngOnInit(): void {
    this.contentEditor?.subscribe(content=>{
      const regex = RegExp(/<<(\w+)>>/g);
      this.keywords = content.split(" ").filter((elem)=>{
          return regex.test(elem);
      })

      console.log(this.keywords);
    })
  }

  select(keyword:string){
    this.selectkeyWord.emit(keyword);
  }

  getLabel(keyword:string){
    return keyword.replace('<<','').replace('>>','');
  }

}
