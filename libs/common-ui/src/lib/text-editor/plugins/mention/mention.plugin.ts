/* eslint-disable @typescript-eslint/no-explicit-any */
import { MentionModel } from './mention.model';
import { MentionCommand } from './mention-command';

export class MentionPlugin {
  private itemsMention: MentionModel[]=[];

  constructor(itemsMention: MentionModel[]){
    this.itemsMention = itemsMention;
  }

  public getConfig(){
    return {
      feeds: [
        {
          marker: '@',
          feed: this.getFeedItems.bind(this),
        },
      ],
    }
  }

  private getFeedItems(queryText: string) {
    console.log(this.itemsMention)
    return new Promise((resolve) => {
      setTimeout(() => {
        const itemsToDisplay = this.itemsMention
          .filter(isItemMatching)
          .slice(0, 10);
        resolve(itemsToDisplay);
      }, 100);
    });

    function isItemMatching(item: { id: string; }) {
      const searchString = queryText.toLowerCase();
      return item.id.toLowerCase().includes(searchString);
    }
  }

  public addCommand(editor:any){
    editor.commands.add('mention', new MentionCommand(editor))
  }

}
