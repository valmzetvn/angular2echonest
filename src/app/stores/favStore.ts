import { Injectable } from 'angular2/angular2';
import * as Rx from '@reactivex/rxjs';



@Injectable()
export class FavStore {


	favourites: Rx.Observable<any[]> = new Rx.Observable;
	addFav: Rx.Subject<any> = new Rx.Subject<any>();
	deleteFav: Rx.Subject<any> = new Rx.Subject<any>();
	updates: Rx.Subject<any> = new Rx.Subject<any>();

	constructor() {
		this.favourites = this.updates
							.scan((x) => { return x })


		this.addFav
			.map((artist) => {
				return function(array) {
					return array.concat(artist['name']);
				}
			})
			.subscribe(this.updates);

	}

	addFavourite(something) {
		this.addFav.next(something);
	}

	getFavourites() {
		return this.favourites;
	}




}