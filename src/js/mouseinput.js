"use strict";

var MouseInput = function(){

	var capture = false;
	var element = null;

	var clicked = function(){
	
	};




	$("#svg").on('click', function(e){


		if(!capture){
			return ;
		}
		let w,h;

		if($(window).width() > 1024 && $(window).height() > 576){

			w = 1024;
			h = 576;

		} else {

			if($(window).width() < 1024){
				w = $(window).width();
				h = (w /1024) * 576;
			}else {
				h = $(window).height();
				w = (h /576) * 1024;
			}


			if($(window).width() < w){
				w = $(window).width();
				h = (w /1024) * 576;
			} 
			if($(window).height() < h){
				h = $(window).height();
				w = (h /576) * 1024;
			}
		}

		// console.log(w, h);

		let topmarge = ($(window).height() - h) / 2;
		let leftmarge = ($(window).width() - w) / 2;

		let m_x = parseInt(((e.originalEvent.x - leftmarge)/ w) * 1024);
		let m_y = parseInt(((e.originalEvent.y - topmarge) / h) * 576);


		clicked(m_x, m_y);

	});	

	this.setGameZone = function(zone){

		element = zone;

	}	

	this.onMouseClick = function(fn){

		clicked = fn;

	}
	this.stopCapture = function(){

		capture = false;

	}
	
	this.startCapture = function(){

		capture = true;

	}

}