"use strict";

var SvgPlayer = function(_map, _x = 0, _y = 0) {
	
	var map = _map;
	
	var x = _x;
	var y = _y;

	var offset = [0, 0];

	var transPosition = new Snap.Matrix();

	var svg = null;

	var svgDirectionID = new Object();

	var map = _map;

	var animating = false;
	var lastAnimating = null;

	var direction = 'none';
	var lastDirection = null;

	var tileBound = map.getTileBound();

	var speed_time = 400;

	calculatePosition();

	var animationChanged = function(){

		if(lastAnimating != animating){
			lastAnimating = animating;
			directionChanged();
		}

	}
	var directionChanged = function(){

		if(lastDirection != direction){

			for(var direct in svgDirectionID) {

				svgDirectionID[direct].svg.attr({style : 'display:none;'});

				if(direct = direction){
					svgDirectionID[direct].svg.attr({style : 'display:inherit'});
				}
			}
			lastDirection = direction;
		}

	}

	this.setPosition = function(_x, _y){

		x = _x;
		y = _y;
		calculatePosition();

		playerEvents.onMove.forEach(function(listener){

			listener(transPosition.clone(), speed_time);

		});

		svg.transform(transPosition);

	}

	this.getPosition = function(){

		return [x, y];

	}

	this.setSvgDirectionID = function(direction, id) {

		svgDirectionID[direction] = {'id' : id, 'svg' : null };

	}

	this.setSvg = function(_svg) {

		svg = _svg;

	}

	this.getSvg = function() {
		
		return svg;

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
		// transPosition.rotate(20,94,128);

	}

	this.draw = function(canvas){
		
		if(svg){

			canvas.append(svg);
			svg.transform(transPosition);

			for(var direct in svgDirectionID) {

				// console.log(direct, svgDirectionID[direct]);
				svgDirectionID[direct].svg = svg.select(svgDirectionID[direct].id);

				if(direct != 'none'){
					svgDirectionID[direct].svg.attr({style : 'display:none;'});
				}
			}			

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
				opacity: '1',  
			});
		}
	}

	this.visible = function(callback) {

		svgVisible = true;

		if(svg){
			svg.attr({
				opacity: '0',  
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

	this.getMatrix = function() {
		return transPosition.clone();
	}

/* movement */	

	this.teleportPlayer = function(to_x, to_y) {

		var me = this;

		game.stopInput();
		me.hide(function(){

			me.setPosition(to_x, to_y);
			me.show(function(){

				game.startInput();


			});

		});

	}

	this.stop = function(){

		direction = 'none';
		playerPath = [];
		pathIndex = 0;


	}

	var playerPath = [];
	var pathIndex = 0;

	this.movePath = function(pathTiles) {

		pathIndex = 0;
		playerPath = pathTiles;

		if(playerPath.length > 0) {

			if(!animating){

				startAnimationPath();

			}
		}

	}
	var startAnimationPath = function(){

//		console.log('startAnimationPath', playerPath, pathIndex);
//		
		if(animating){
			
			playerEvents.onReachDestination.forEach(function(listener){

				listener(x, y);

			});

		}

		if(playerPath.length <= pathIndex) {

			direction = 'none';
			animating = false;
			stopSound('walk');

			animationChanged();
			return;

		}

		animating = true;
		animationChanged();

		let t = playerPath[pathIndex];
		let p = t.getPosition();

		if(x > p[0]){
			direction = 'left';
			directionChanged();

		} else if(x < p[0]) {
			direction = 'right';
			directionChanged();

		}

		if(y > p[1]){
			direction = 'up';
			directionChanged();	

		} else if(y < p[1]) {
			direction = 'down';
			directionChanged();
		}


		x = p[0];
		y = p[1];

		// console.log(p);

		pathIndex++;

		calculatePosition();

		playerEvents.onMove.forEach(function(listener){

			listener(transPosition.clone(), speed_time);

		});

		playSound('walk');

		svg.animate({'transform' : transPosition}, speed_time, mina.linear, startAnimationPath);

	}


	this.moveTo = function(_x, _y, speed = null, specifiedMina = null, callback) {

		//console.log('moveTo');
		x = _x;
		y = _y;

		if(speed == null){
			speed = speed_time;
		}

		if(specifiedMina == null){
			specifiedMina = mina.linear;
		}

		calculatePosition();

		playerEvents.onMove.forEach(function(listener){

			listener(transPosition.clone(), speed);

		});

		svg.animate({'transform' : transPosition}, speed, specifiedMina, callback);

	}

	this.move = function(_direction) {

		direction = _direction;

		if(!animating){

			startAnimation();

		}

	}

	var startAnimation = function() {

		if(animating){
			
			playerEvents.onReachDestination.forEach(function(listener){

				listener(x, y);

			});

		}

		if(direction == 'none'){

			stopSound('walk');

			animating = false;
			directionChanged();

			return;

		}

		if(map.hasAccessTo(x, y, direction)){

			animating = true;
			directionChanged();

			playSound('walk');

			switch(direction){

				case 'left':

					x = (x - 1);
					break;

				case 'right':

					x = (x + 1);
					break;

				case 'up':

					y = (y - 1);
					break;

				case 'down':

					y = (y + 1);
					break;

			}

			calculatePosition();

			playerEvents.onMove.forEach(function(listener){

				listener(transPosition.clone(), speed_time);

			});

			svg.animate({'transform' : transPosition}, speed_time, mina.linear, startAnimation);


		} else {

			stopSound('walk');
			direction = 'none';
			animating = false;
			directionChanged();

		}

		
	}

/* event */	

	var playerEvents = new Object;
	playerEvents.onReachDestination = [];
	playerEvents.onMove = [];

	this.clearOnReachDestination = function(){

		playerEvents.onReachDestination = [];
	
	}

	this.onReachDestination = function(fn){

		playerEvents.onReachDestination.push(fn);

	}


	this.onMove = function(fn){

		playerEvents.onMove.push(fn);

	}

/* Sound */

	var sounds = [];

	this.setSound = function(type, sound) {

		let audio = new SoundPlayer(sound);
		audio.setLoop(true);
		sounds[type] = audio;

	}

	var playSound = function(type){

		let audio = sounds[type];
		if(typeof audio != 'undefined'){
			audio.play();
		}

	}

	var stopSound = function(type){

		let audio = sounds[type];
		if(typeof audio != 'undefined'){
			audio.stop();
		}

	}

}


