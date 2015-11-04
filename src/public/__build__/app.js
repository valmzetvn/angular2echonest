webpackJsonp([2,0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(401);


/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var http_1 = __webpack_require__(99);
	var Echonest = (function () {
	    function Echonest(http) {
	        this.http = http;
	        this.url = 'http://developer.echonest.com/api/v4/';
	        this.apiKey = 'AAXIWZI0HTK1NYTWQ';
	        this.format = 'json';
	    }
	    Echonest.prototype.topHot = function () {
	        var endpoint = 'artist/top_hottt?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&format=' + this.format + '&results=15&start=0&bucket=hotttnesss';
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Echonest.prototype.getArtistImage = function (name) {
	        var endpoint = 'artist/images?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&name=' + name + '&format=' + this.format + '&results=1&start=0';
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Echonest.prototype.getArtistData = function (name) {
	        var endpoint = 'artist/profile?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&name=' + name + '&format=' + this.format + '&bucket=blogs&bucket=images&bucket=genre&bucket=reviews&bucket=news';
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Echonest.prototype.getArtist = function (name) {
	        var endpoint = 'artist/images?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&name=' + name + '&format=' + this.format + '&results=1&start=0';
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Echonest.prototype.artistSearch = function (name) {
	        var endpoint = 'artist/suggest?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&results=6' + '&name=' + name + '&format=' + this.format;
	        return this.http.get(url)
	            .map(function (res) { return res.json(); });
	    };
	    Echonest.prototype.getArtistBio = function (name) {
	        var endpoint = 'artist/biographies?';
	        var url = this.url + endpoint + '&api_key=' + this.apiKey + '&name=' + name + '&format=' + this.format + '&results=1&start=6';
	        return this.http.get(url)
	            .map(function (res) { return res.json(); })
	            .map(function (res) { return res.response.biographies; });
	    };
	    Echonest = __decorate([
	        angular2_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], Echonest);
	    return Echonest;
	})();
	exports.Echonest = Echonest;


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(31);
	var hotttlist_1 = __webpack_require__(406);
	var header_1 = __webpack_require__(405);
	var artist_1 = __webpack_require__(402);
	var search_1 = __webpack_require__(408);
	var Main = (function () {
	    function Main() {
	    }
	    Main = __decorate([
	        angular2_1.Component({
	            selector: 'main'
	        }),
	        angular2_1.View({
	            directives: [header_1.Header, hotttlist_1.Hotttlist, router_1.RouterLink, router_1.RouterOutlet],
	            template: "\n    <header></header>\n    <router-outlet></router-outlet>\n  "
	        }),
	        router_1.RouteConfig([
	            { path: '/', redirectTo: '/home' },
	            { path: '/home', as: 'Home', component: hotttlist_1.Hotttlist },
	            { path: '/artist/:name', as: 'Artist', component: artist_1.Artist },
	            { path: '/search', as: 'Search', component: search_1.Search },
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], Main);
	    return Main;
	})();
	exports.Main = Main;


/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/_custom.d.ts" />
	var angular2_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(31);
	var http_1 = __webpack_require__(99);
	var Echonest_1 = __webpack_require__(81);
	var app_1 = __webpack_require__(400);
	angular2_1.bootstrap(app_1.Main, [
	    angular2_1.FORM_PROVIDERS,
	    router_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    angular2_1.ELEMENT_PROBE_PROVIDERS,
	    Echonest_1.Echonest
	]);


/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(31);
	var Echonest_1 = __webpack_require__(81);
	var artistRender_1 = __webpack_require__(403);
	var Artist = (function () {
	    function Artist(service, routeParams) {
	        this.service = service;
	        this.artistName = routeParams.get('name');
	    }
	    Artist.prototype.setData = function (data) {
	        this.artistData = data;
	    };
	    Artist.prototype.onInit = function () {
	        var _this = this;
	        this.service.getArtistData(this.artistName)
	            .subscribe(function (data) {
	            console.log(data);
	            _this.setData(data.response.artist);
	        });
	        this.service.getArtistBio(this.artistName)
	            .subscribe(function (data) {
	            _this.artistBio = data['0'];
	        });
	    };
	    Artist = __decorate([
	        angular2_1.Component({
	            selector: 'artist',
	            bindings: [Echonest_1.Echonest],
	        }),
	        angular2_1.View({
	            directives: [artistRender_1.ArtistRender],
	            template: "\n\t<artist-render [data]=\"artistData\" [bio]=\"artistBio\"></artist-render>\n\n\t"
	        }), 
	        __metadata('design:paramtypes', [Echonest_1.Echonest, router_1.RouteParams])
	    ], Artist);
	    return Artist;
	})();
	exports.Artist = Artist;


/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var artistReviewRender_1 = __webpack_require__(404);
	var ArtistRender = (function () {
	    function ArtistRender() {
	    }
	    ArtistRender.prototype.switchControl = function (value) {
	        this[value] = event.target['checked'];
	    };
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArtistRender.prototype, "data");
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArtistRender.prototype, "bio");
	    ArtistRender = __decorate([
	        angular2_1.Component({
	            selector: 'artist-render',
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgIf, angular2_1.NgFor, artistReviewRender_1.ArtistReviewRender],
	            template: "\n\t<div *ng-if=\"data\" class=\"cyan\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row valign-wrapper\">\n\n\t\t\t\t\t<div class=\"col s6\">\n\t\t\t\t\t\t<h1 class=\"white-text\">{{data.name}}</h1>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col s2\">\n\t\t\t\t\t\t<h6 class=\"white-text\">Reviews</h6>\n\t\t\t\t\t\t<div class=\"switch\">\n\t\t\t\t\t\t<label class=\"white-text\">\n\t\t\t\t\t\t\tOff\n\t\t\t\t\t\t\t<input (click)=switchControl('reviews') type=\"checkbox\">\n\t\t\t\t\t\t\t<span class=\"lever\"></span> \n\t\t\t\t\t\t\tOn\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col s2\">\n\t\t\t\t\t\t<h6 class=\"white-text\">News</h6>\n\t\t\t\t\t\t\t<div class=\"switch\">\n\t\t\t\t\t\t\t\t<label class=\"white-text\">\n\t\t\t\t\t\t\t\t\tOff\n\t\t\t\t\t\t\t\t\t<input (click)=switchControl('news') type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t<span class=\"lever\"></span>\n\t\t\t\t\t\t\t\t\tOn\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ng-if=\"bio\" class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-content\" style=\"max-height:250px; overflow:hidden\">\n\t\t\t\t\t\t<h5 class=\"black-text\">Biography</h5>\n\t\t\t\t\t\t<p>{{bio.text}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-action\">\n\t\t\t\t\t\t<a href=\"{{bio.url}}\">Read the full biography</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h4 class=\"pink-text\" *ng-if=!bio>No reviews to show</h4>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ng-if=\"reviews\" class=\"container\">\n\t\t\t<div *ng-if=\"data\" class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<h5 class=\"pink-text text-accent-2\">Reviews for {{data.name}}</h5>\n\t\t\t\t</div>\n\t\t\t\t<artist-review *ng-for=\"#review of data.reviews | slice:0:6\" class=\"col s12 m4\" [review]=review></artist-review>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div *ng-if=\"news\" class=\"container\">\n\t\t\t<div *ng-if=\"data\" class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<h5 class=\"pink-text text-accent-2\">News for {{data.name}}</h5>\n\t\t\t\t</div>\n\t\t\t\t<artist-review *ng-for=\"#news of data.news | slice:0:6\" class=\"col s12 m4\" [review]=news></artist-review>\n\t\t\t</div>\n\t\t</div>\n\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArtistRender);
	    return ArtistRender;
	})();
	exports.ArtistRender = ArtistRender;


/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var ArtistReviewRender = (function () {
	    function ArtistReviewRender() {
	    }
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], ArtistReviewRender.prototype, "review");
	    ArtistReviewRender = __decorate([
	        angular2_1.Component({
	            selector: 'artist-review',
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgIf],
	            template: "\n\t<div class=\"card\" *ng-if=\"review\">\n\t\t<div class=\"card-content\" style=\"max-height:250px; overflow:hidden\">\n\t\t<h5 class=\"pink-text text-lighten-1\">{{review.name}}</h5>\n\t\t<p>{{review.summary}}</p>\n\t\t</div>\n\t\t<div class=\"card-action\">\n\t\t<a href=\"{{review.url}}\">Read the full review</a>\n\t\t</div>\n\t</div>\n\t<h4 class=\"black-text\" *ng-if=\"!review\">No reviews to show</h4>\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArtistReviewRender);
	    return ArtistReviewRender;
	})();
	exports.ArtistReviewRender = ArtistReviewRender;


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(31);
	var Header = (function () {
	    function Header() {
	        this.title = 'Angular 2 & Echonest API';
	    }
	    Header = __decorate([
	        angular2_1.Component({
	            selector: 'header'
	        }),
	        angular2_1.View({
	            directives: [router_1.RouterLink],
	            template: "\n\t<header id=\"header\" class=\"page-topbar\">\n\t\t<nav class=\"cyan\">\n\t\t\t<div class=\"nav-wrapper container\">\n\t\t\t\t<a href=\"#\" class=\"brand-logo\">{{title}}</a>\n\t\t\t\t<ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n\t\t\t\t\t<li><a [router-link]=\"['/Search']\">Search an artist</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n\t</header>\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Header);
	    return Header;
	})();
	exports.Header = Header;


/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var hotttlistElementRender_1 = __webpack_require__(407);
	var Echonest_1 = __webpack_require__(81);
	var Hotttlist = (function () {
	    function Hotttlist(Echonest) {
	        this.echonest = Echonest;
	    }
	    Hotttlist.prototype.setArtists = function (data) {
	        this.artists = data;
	    };
	    Hotttlist.prototype.onInit = function () {
	        var _this = this;
	        this.echonest.topHot()
	            .subscribe(function (data) {
	            _this.setArtists(data.response.artists);
	        });
	    };
	    Hotttlist = __decorate([
	        angular2_1.Component({
	            selector: 'hotttlist',
	            bindings: [Echonest_1.Echonest]
	        }),
	        angular2_1.View({
	            directives: [hotttlistElementRender_1.HotttlistElementRender, angular2_1.CORE_DIRECTIVES, angular2_1.NgFor],
	            template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<hotttlist-element class=\"col s12\" [artists]=\"artists\"></hotttlist-element>\n\t\t\t</div>\n\t\t</div>\n\t"
	        }), 
	        __metadata('design:paramtypes', [Echonest_1.Echonest])
	    ], Hotttlist);
	    return Hotttlist;
	})();
	exports.Hotttlist = Hotttlist;


/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(31);
	var HotttlistElementRender = (function () {
	    function HotttlistElementRender() {
	    }
	    __decorate([
	        angular2_1.Input(), 
	        __metadata('design:type', Object)
	    ], HotttlistElementRender.prototype, "artists");
	    HotttlistElementRender = __decorate([
	        angular2_1.Component({
	            selector: 'hotttlist-element',
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgFor, router_1.RouterLink],
	            template: "\n\t<div class=\"z-depth-1\">\n        <ul class=\"collection with-header\">\n        \t<li class=\"collection-header\"><h2 class=\"header\">Echonest's hotttest artists</h2></li>\n\t\t\t<a *ng-for=\"#artist of artists; #i = index\" [router-link]=\"['/Artist', {name: artist.name}]\" class=\"collection-item\"><li>{{i+1}}: {{artist.index}} {{artist.name}}</li></a>\n\t\t</ul>\n\t</div>\n\t"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HotttlistElementRender);
	    return HotttlistElementRender;
	})();
	exports.HotttlistElementRender = HotttlistElementRender;


/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var angular2_1 = __webpack_require__(9);
	var router_1 = __webpack_require__(31);
	var Echonest_1 = __webpack_require__(81);
	var Search = (function () {
	    function Search(service) {
	        this.service = service;
	    }
	    Search.prototype.artistSearch = function ($event, name) {
	        var _this = this;
	        setTimeout(function () {
	            _this.service.artistSearch(name)
	                .subscribe(function (data) {
	                _this.artists = data.response.artists;
	            });
	        }, 200);
	    };
	    Search = __decorate([
	        angular2_1.Component({
	            selector: 'search',
	            bindings: [Echonest_1.Echonest],
	        }),
	        angular2_1.View({
	            directives: [angular2_1.NgIf, angular2_1.NgFor, router_1.RouterLink],
	            template: "\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input #input (keyup)=\"artistSearch($event, input.value)\" type=\"text\">\n\t\t\t\t\t<label>Artist search</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ng-if=\"artists\">\n\t\t\t<div *ng-for=\"#artist of artists\" class=\"col s12 m4\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t<span class=\"card-title black-text\">{{artist.name}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-action\">\n\t\t\t\t\t\t<a [router-link]=\"['/Artist', {name: artist.name}]\">See the profile</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<h6 *ng-if=!artists class=\"pink-text text-lighten-1\">Start typing a letter to search for an artist</h6>\n\t</div>\n\n\t"
	        }), 
	        __metadata('design:paramtypes', [Echonest_1.Echonest])
	    ], Search);
	    return Search;
	})();
	exports.Search = Search;


/***/ }

});
//# sourceMappingURL=app.js.map