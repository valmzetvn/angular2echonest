import { Injectable } from 'angular2/angular2';
import * as Rx from '@reactivex/rxjs';

let initialArray = [];

@Injectable()
export class FavStore {

	favourites: Rx.Observable<any[]> = new Rx.Observable;
	updates: Rx.Subject<any[]> = new Rx.Subject();
	// favourites: Rx.Observable<any[]>;
	// addFav: Rx.Subject<any> = new Rx.Subject<any>();
	// deleteFav: Rx.Subject<any> = new Rx.Subject<any>();
	// updates: Rx.Subject<any> = new Rx.Subject<any>();


	constructor() {
		this.favourites = this.updates
						.scan((x, y) => {
							  return y.concat(x) ;
						  }, initialArray)
						.shareReplay(1, Number.POSITIVE_INFINITY)
		// this.favourites = this.updates
		// 	.scan(function(accumulator, favourite) {
		// 		return favourite(accumulator);
		// 	}, initialArray)

		// this.addFav
		// 	.map(function(artist) {
		// 		return (favourites) => {
		// 			return favourites.concat(artist);
		// 		}
		// 	})
		// 	.subscribe(this.updates);

	}

	addFavourite(artist) {
		this.updates.next([artist.name])
	}

	getFavourites() {
		return this.favourites;
	}

	// addFavourite(artist) {
	// 	this.addFav.next(artist);
	// }

	// getFavourites() {
	// 	return this.favourites;
	// }




}