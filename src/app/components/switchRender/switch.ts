import { Component, View } from 'angular2/angular2';


@Component({
	selector: 'switch',
})

@View({
	directives: [],
	template: `

	<div class="switch">
		<label class="white-text">
		Off
			<input (click)=switchControl('news') type="checkbox">
			<span class="lever"></span>
		On
		</label>
	</div>


	`
})

export class Switch {

	switchControl(value) {
		console.log('ok');
	}
}
