import { MentionModel } from './../model/mention.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MentionService {
  private itemsMention: MentionModel[]=[];

  setItems(itemsMention: MentionModel[]) {
    this.itemsMention = itemsMention;
  }

  getFeedItems(queryText: string) {
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
}
