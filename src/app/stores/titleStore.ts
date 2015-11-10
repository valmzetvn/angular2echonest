import { Injectable } from 'angular2/angular2';
import * as Rx from '@reactivex/rxjs';

let initialTitle: string = '';

@Injectable()
export class TitleStore {
	titles: Rx.Observable<string[]>;
	updates: Rx.Subject<any> = new Rx.BehaviorSubject<any>(initialTitle);
	add: Rx.Subject<any> = new Rx.Subject<any>();

	constructor() {
		// this.titles = this.updates
		// 	.map(function(title: string) {
		// 		initialTitle = initialTitle.push(title);
		// 		return initialTitle;
		// 	}) 
		this.add.subscribe(this.updates);
	}

	addTitle(title: string): void {
		this.add.next(title);
	}

	getTitle() {
		return this.updates;
	}




}