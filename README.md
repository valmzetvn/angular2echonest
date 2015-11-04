# angular2echonest
Angular2 (Alpha 44) playground with Echonest API.

Live example at http://angular2.loicmarcos.be

#Installation
- git clone https://github.com/marcosloic/angular2echonest.git
- cd angular2echonest
- npm install
- Provide your own Echonest key in '/src/app/services/Echonest' (Please)
- npm start

#Description
Since Angular 2 is still in alpha, the documentation is scarce and/or incomplete and/or outdated. This sample aims to provide real-life and up-to-date*ish* (Angular2 is now alpha 45, but that should still work) examples of use :

- Querying an API with http module and using the data
- Using the router, using router-parameters
- Passing data from parent to child component through @Input()
- ng-for, ng-if, etc.
- Using pipes

There isn't a styleguide that carry nearly-authoritative weight right now (As there was John Papa's for Angular 1), but this sample tries to follow some concepts I picked from using React/redux, where smart components do the heavy lifting and pass the data to their dumb childs.

Since it's a two-days, coding in front of the champion's league at night-project, there's more than certainly room for improvements. This sample doesn't provide examples of child-parent communication, and I could have pushed the componentization further.
