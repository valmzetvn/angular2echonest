import { Component, View } from 'angular2/angular2';
import { FeedItem } from './FeedItem';
import { RSSService } from '../../services/RSSService';


@Component({
  selector: 'feedlist'
})

@View({
  directives: [FeedItem],
  template: `
    <div class="container">
      <div class="row">
        <feedlist-item class="col s12" [artists]="allFeeds">Hello</hotttlist-element>
      </div>
    </div>
  `
})

export class FeedList {

  protected allFeeds: Object;

  private rss: RSSService;

  constructor(RSSService: RSSService) {
    this.rss = RSSService;
  }

  public set feeds(data) {
    this.allFeeds = data;
  }

  public onInit() {
    this.rss.fetch().subscribe((data) => {
      this.feeds = data;
    }, function(params:any) {
      console.log('error', params);
    }, function(params:any) {
      console.log('complete', params);
    });
  }

}