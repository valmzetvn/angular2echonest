import {Component, View, Input, NgFor } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';

@Component({
  selector: 'feedlist-item',
})

@View({
  directives: [NgFor, RouterLink],
  template: `
    <div class="z-depth-1">
      <ul class="collection with-header">
        <li class="collection-header"><h2 class="header">Echonest's hotttest artists</h2></li>
        <li *ng-for="#artist of artists; #i = index" class="feed-item">
          <a [router-link]="['/Artist', {name: artist.name}]">{{i+1}}: {{artist.index}} {{artist.title}}</a>
        </li>
      </ul>
    </div>
  `
})

export class FeedItem {
  @Input() artists: Object;

}