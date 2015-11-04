import {Component, View, NgIf, NgFor} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { Echonest } from '../../services/Echonest';

@Component({
	selector: 'search',
	bindings: [Echonest],
})

@View({
	directives: [NgIf, NgFor, RouterLink],
	template: `
	<div class="container">
		<div class="row">
			<div class="card">
				<div class="input-field col s12">
					<input #input (keyup)="artistSearch($event, input.value)" type="text">
					<label>Artist search</label>
				</div>
			</div>
		</div>
		<div class="row" *ng-if="artists">
			<div *ng-for="#artist of artists" class="col s12 m4">
				<div class="card">
					<div class="card-content">
						<span class="card-title black-text">{{artist.name}}</span>
					</div>
					<div class="card-action">
						<a [router-link]="['/Artist', {name: artist.name}]">See the profile</a>
					</div>
				</div>
			</div>
		</div>
		<h6 *ng-if=!artists class="pink-text text-lighten-1">Start typing a letter to search for an artist</h6>
	</div>

	`
})

export class Search {
	service: Echonest;
	artists: Object;

	constructor(service: Echonest) {
		this.service = service;
	}

	artistSearch($event, name) {
		setTimeout(() => {
			this.service.artistSearch(name)
			.subscribe((data) => {
				this.artists = data.response.artists;
			});
		}, 200);

	}

}
