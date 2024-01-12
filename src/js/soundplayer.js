"use strict";

var SoundPlayer = function(_filename) {

	var loop = false;
	var filename = _filename;
	var audio = new Audio(filename);

	this.setLoop = function(value) {

		loop = value;
		
		return this;

	}


	this.play = function(){

		audio.play();

		if(loop){
			$(audio).on('ended', loopSound);
		}

		return this;

	}

	this.stop = function(){

		audio.pause();
		audio.currentTime = 0;

		if(loop){
			$(audio).off('ended', loopSound);
		}

		return this;
	}

	this.setvolume = function(value) {

		audio.volume = value;

		return this;
	}


	var loopSound = function(){

		this.currentTime = 0;
		this.play();

	}

}
