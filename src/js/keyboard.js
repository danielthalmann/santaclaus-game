"use strict";

var Keyboard = function(){

	var keys = [];

	keys['up'] = false;
	keys['down'] = false;
	keys['left'] = false;
	keys['right'] = false;

	var lastKey = 'none';

	var capture = false;

	var changed = function(){
	
	};


	$(window).keydown(function(e){

		if(!capture) return ;

		//e.preventDefault();
		switch(e.originalEvent.keyCode){
			case 37:
			case 65:
				keys['left'] = true;
				if(lastKey != 'left'){
					lastKey = 'left';
					changed('left', keys);
				}
				break;
			case 38:
			case 87:
				keys['up'] = true;
				if(lastKey != 'up'){
					lastKey = 'up';
					changed('up', keys);
				}
				break;
			case 39:
			case 68:
				keys['right'] = true;
				if(lastKey != 'right'){
					lastKey = 'right';
					changed('right', keys);
				}
				break;
			case 40:
			case 83:
				keys['down'] = true;
				if(lastKey != 'down'){
					lastKey = 'down';
					changed('down', keys);
				}
				break;
		}


	});

	$(window).keyup(function(e){

		if(!capture) return ;

		switch(e.originalEvent.keyCode){
			case 37:
			case 65:
				keys['left'] = false;
				lastKey = 'none';	
				changed('left', keys);
				break;
			case 38:
			case 87:
				keys['up'] = false;
				lastKey = 'none';
				changed('up', keys);
				break;
			case 39:
			case 68:
				keys['right'] = false;
				lastKey = 'none';
				changed('right', keys);
				break;
			case 40:
			case 83:
				keys['down'] = false;
				lastKey = 'none';
				changed('down', keys);
				break;
		}
		//console.log(e.originalEvent);
	});


	this.onKeyboardChange = function(fn){

		changed = fn;

	}
	this.stopCapture = function(){

		if(lastKey != 'none'){
			keys[lastKey] = false;
			changed(lastKey, keys);
		}
		capture = false;

	}
	this.startCapture = function(){

		capture = true;

	}
}


