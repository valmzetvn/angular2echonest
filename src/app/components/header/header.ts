import {Component, View} from 'angular2/angular2';
import { Search } from '../search/search';
import { RouterLink, RouteParams } from 'angular2/router';

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
					<li><a [router-link]="['/Search']">Search an artist</a></li>
				</ul>
			</div>
		</nav>
	</header>
	`
})

export class Header {

	title: string;

	constructor() {
		this.title = 'Angular 2 & Echonest API' ;
	}

}
