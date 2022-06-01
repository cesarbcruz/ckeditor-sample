
import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { MentionModel } from 'libs/common-ui/src/lib/text-editor/model/mention.model';
import example1 from './mock/ABD_Total'
import example2 from './mock/Laudo_Ultrassom'


@Component({
  selector: 'ckeditor-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  content1 = example1;
  content2 = example2;

  itemsMention: MentionModel[] = [
    {
      id: '@exemplo1',
      text:'<strong>Exemplo 1<strong>',
    },
    {
      id: '@exemplo2',
      text:'<strong>Exemplo 2<strong>',
    },
  ];

  itemsMention2: MentionModel[] = [
    {
      id: '@exemplo3',
      text:'<strong>Exemplo 3<strong>',
    },
    {
      id: '@exemplo4',
      text:'<strong>Exemplo 4<strong>',
    },
  ];

  changeContent(event:unknown){
    console.log(event)
  }

}
