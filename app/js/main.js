requirejs.config({
	
	// Define the paths to the vendor libraries.
	paths: {
		'backbone': './vendor/backbone',
		'underscore': './vendor/underscore',
		'jquery': './vendor/jquery'
	},
	
	// Shim (patch) libraries which do not define AMD modules.
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [ 'underscore' ],
			exports: 'Backbone'
		}
	}
	
});

// Application main entry point definition.
define(function (require) {
	"use strict";
	
	// Request jQuery and Backbone; this ensures they are loaded (in order!) before we kick off our main entry point.
	var $ = require('jquery');
	var backbone = require('backbone');
	
	// ... and we can pull in any child modules we want to fetch.
	var math = require('helpers/math');
	
	console.log("Application entry point.");
	console.log("Hello Backbone!", window.Backbone);
	console.log("2 + 2 is " + math.add(2, 2));
	
});