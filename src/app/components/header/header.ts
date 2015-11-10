import {Component, View} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import {TitleStore} from '../../stores/titleStore';

@Component({
	selector: 'header'
})

@View({
	directives: [RouterLink],
	template: `
	<header id="header" class="page-topbar">
		<nav class="cyan">
			<div class="nav-wrapper container">
				<a href="#" class="brand-logo">{{title}} / {{subtitle}}</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a [router-link]="['/Search']">Search an artist</a></li>
				</ul>
			</div>
		</nav>
	</header>
	`
})

export class Header {
	titleStore: TitleStore;
	title: string;

	constructor(titleStore: TitleStore) {
		this.title = 'Angular 2 & Echonest API';
		this.titleStore = titleStore;
	}

	onInit() {
		this.titleStore.getTitle()
				.subscribe((data) => {
					this.subtitle = data;
				});
	}

}
