import { Component, View, Output, EventEmitter } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { Echonest } from '../../services/Echonest';
import { ArtistRender } from '../artistRender/artistRender';


@Component({
	selector: 'artist',
})

@View({
	directives: [ArtistRender],
	template: `
	<artist-render [data]="artistData" [bio]="artistBio"></artist-render>

	`
})

export class Artist {
	service: Echonest;
	routeParam: RouteParams;
	artistData: Object;
	artistName: string;
	artistBio: Object;

	constructor(service: Echonest, routeParams: RouteParams) {
		this.service = service;
		this.artistName = routeParams.get('name');
	}

	setData(data) {
		this.artistData = data;
	}

	onInit() {
		this.service.getArtistData(this.artistName)
		.subscribe((data) => {
			console.log(data);
			this.setData(data.response.artist);
		})

		this.service.getArtistBio(this.artistName)
		.subscribe((data) => {
			this.artistBio = data['0']
		})

	}


}
