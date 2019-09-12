import $ from 'jquery';
import './tools/svg4everybody';
// import { MQ } from './tools/MQ';


// Components
// import * as fontFaceObserver from './components/fontFaceObserver';
import * as carousel from './components/carousel';
import * as select from './components/select';
import * as menu from './components/menu';


// content load components
const componentsload = [
];

// once delegated components
const components = [
	// fontFaceObserver,
	carousel,
	select,
	menu,
].concat( componentsload );

window.App = {
	run() {
		// MQ('lgUp');

		var $target = $(document);
		components.forEach((component) => component.init( $target ));

		$(document)
			.on('contentload', function(event) {
				var $target = $(event.target);
				componentsload.forEach((component) => component.init( $target ));
			});
	},

	initComponent(component) {
		return component.init();
	},
};

