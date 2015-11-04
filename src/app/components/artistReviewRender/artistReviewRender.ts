import { Component, View, Input, NgIf} from 'angular2/angular2';

@Component({
	selector: 'artist-review',
})

@View({
	directives: [NgIf],
	template: `
	<div class="card" *ng-if="review">
		<div class="card-content" style="max-height:250px; overflow:hidden">
		<h5 class="pink-text text-lighten-1">{{review.name}}</h5>
		<p>{{review.summary}}</p>
		</div>
		<div class="card-action">
		<a href="{{review.url}}">Read the full review</a>
		</div>
	</div>
	<h4 class="black-text" *ng-if="!review">No reviews to show</h4>
	`
})

export class ArtistReviewRender {
	@Input() review: Object;
}
