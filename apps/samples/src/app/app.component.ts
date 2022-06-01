
import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { MentionModel } from 'libs/common-ui/src/lib/text-editor/model/mention.model';
import example1 from './mock/ABD_Total'
import example2 from './mock/Laudo_Ultrassom'
import example3 from './mock/Word_COPY'


@Component({
  selector: 'ckeditor-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  content1 = example1;
  content2 = example2;
  content3 = example3;

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

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    // store tabs variable
    const myTabs = document.querySelectorAll("ul.nav-tabs > li");
    function myTabClicks(tabClickEvent: { currentTarget: any; preventDefault: () => void; target: any; }) {
      for (let i = 0; i < myTabs.length; i++) {
        myTabs[i].classList.remove("active");
      }
      const clickedTab = tabClickEvent.currentTarget;
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      const myContentPanes = document.querySelectorAll(".tab-pane");
      for (let i = 0; i < myContentPanes.length; i++) {
        myContentPanes[i].classList.remove("active");
      }
      const anchorReference = tabClickEvent.target;
      const activePaneId = anchorReference.getAttribute("href");
      const activePane = document.querySelector(activePaneId);
      activePane.classList.add("active");
    }
    for (let i = 0; i < myTabs.length; i++) {
      myTabs[i].addEventListener("click", myTabClicks)
    }
  }

}
