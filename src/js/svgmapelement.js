"use strict";

var SvgMapElement = function(_map, _x = 0, _y = 0) {

	var map = _map;
	
	var x = _x;
	var y = _y;

	var offset = [0, 0];

	var transPosition = new Snap.Matrix();

	var svg = null;

	var tileBound = map.getTileBound();

	calculatePosition();

	this.getPosition = function(){

		return [x, y];

	}

	this.setPosition = function(_x, _y){
		
		x = _x;
		y = _y;

	}

	this.setSvg = function(_svg, clone = true) {
		
		if(clone)
			svg = _svg.clone();
		else 
			svg = _svg;

	}

	this.getSvg = function() {
		
		return svg;

	}

	this.select = function(selector) {

		return svg.select(selector);

	}	

	this.getTransition = function() {
		
		return transPosition;

	}

	this.setOffset = function(x, y) {
		
		offset = [x, y];
		calculatePosition();

	}

	this.getOffset = function() {
		
		return offset;

	}

	function calculatePosition() {

		transPosition = new Snap.Matrix();
		transPosition.translate((x * tileBound[0]) + offset[0], (y * tileBound[1]) + offset[1]);

	}

	this.draw = function(canvas){

		if(svg){

			canvas.append(svg);
			svg.transform(transPosition);

		}

	}

	var svgVisible = true;

	this.isVisible = function() {

		return svgVisible;
		
	}

	this.invisible = function(callback) {

		svgVisible = false;

		if(svg){
			svg.attr({
				opacity: '0'
			});
		}
	}

	this.visible = function(callback) {

		svgVisible = true;

		if(svg){
			svg.attr({
				opacity: '1'
			});
		}
	}

	this.hide = function(callback) {

		svgVisible = false;

		if(svg){
			svg.animate({
				opacity: '0',  
			}, 500, mina.easeout, callback);
		}
	}

	this.show = function(callback) {

		svgVisible = true;

		if(svg){
			svg.animate({
				opacity: '1',  
			}, 500, mina.easein, callback);
		}
	}

	this.moveTo = function(_x, _y, speed, specifiedMina, callback) {

		//console.log('moveTo');
		x = _x;
		y = _y;

		if(typeof speed == 'undefined'){
			speed = 400;
		}

		if(typeof specifiedMina == 'undefined'){
			specifiedMina = mina.linear;
		}

		calculatePosition();

		elementEvents.onMove.forEach(function(listener){

			listener(transPosition.clone(), speed, specifiedMina, _x, _y);

		});

		svg.animate({'transform' : transPosition}, speed, specifiedMina, callback);

	}	

/* event */	

	var elementEvents = new Object;
	elementEvents.onReachDestination = [];
	elementEvents.onMove = [];

	this.onMove = function(fn){

		elementEvents.onMove.push(fn);

	}	

}