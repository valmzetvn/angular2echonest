import {Component, View} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { FavStore } from '../../stores/favStore';

@Component({
	selector: 'header'
})

@View({
	directives: [RouterLink],
	template: `
	<header id="header" class="page-topbar">
		<nav class="cyan">
			<div class="nav-wrapper container">
				<a href="#" class="brand-logo">{{title}}</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a href="">My favourites <span class="new badge pink">4</span></a></li>
					<li><a [router-link]="['/Search']">Search an artist</a></li>
				</ul>
			</div>
		</nav>
	</header>
	`
})

export class Header {
	title: string;
	favStore: FavStore;

	constructor(favStore: FavStore) {
		this.title = 'Angular 2 & Echonest API';
		this.favStore = favStore;
	}

}
