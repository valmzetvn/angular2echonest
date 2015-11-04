/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Hotttlist} from './components/hotttlist/hotttlist';
import {Header} from './components/header/header';
import {Artist} from './components/artist/artist';
import {Search} from './components/search/search';





@Component({
	selector: 'main'
})

@View({
  directives: [Header, Hotttlist, RouterLink, RouterOutlet],
    template: `
    <header></header>
    <router-outlet></router-outlet>
  `
})

@RouteConfig([


	{ path: '/',					as: 'Home',				component: Hotttlist},
	{ path: '/artist/:name',		as: 'Artist',			component: Artist},
	{ path: '/search', 				as: 'Search', 			component: Search },

])

export class Main {



}