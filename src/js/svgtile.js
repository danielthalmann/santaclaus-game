"use strict";

var SvgTile = function(_map, _x, _y) {

	SvgMapElement.call(this, _map, _x, _y);

	var accessTo = [];
	accessTo['left'] = true;
	accessTo['right'] = true;
	accessTo['up'] = true;
	accessTo['down'] = true;

	// animating variables
	var animating = false;
	var cleartimers = null;

	this.walkable = false;

	this.anim = function() {

		return ;
		
		let svg = this.getSvg();
		let transPosition = this.getTransition();

		//
		// petite annimation au passage de la souris
		//
		svg.hover(function () {

            if (animating) return;
            animating = true;

            var element = svg;
            element.animate({opacity:0.25}, 40);
            
            //t_init = new Snap.Matrix(); // transPosition.clone();
            var t_init = transPosition.clone();
			var bbox = element.getBBox();

            // console.log(bbox);
            t_init.scale(0.9, 0.9, bbox.x, bbox.y);

            element.transform(t_init);

            setTimeout(function() {
                element.animate({opacity:1,transform: transPosition}, 500, mina.elastic);
            }, 50);


            setTimeout(function(){animating = false}, 550);
        });

	}

	this.getAccessTo = function() {
		return accessTo;
	}

	this.hasAccessTo = function(orientation) {

		let access = accessTo[orientation];

		if(typeof access == 'undefined'){
			return false;
		}else {
			return access;
		}

	}

	this.setAccessTo = function(orientation, access) {

		accessTo[orientation] = access;

	}

	this.clearAccess = function() {
		accessTo['left'] 	= false;
		accessTo['right'] 	= false;
		accessTo['up'] 		= false;
		accessTo['down'] 	= false;

	}

	this.setWalkable = function(isWalkable) {

		this.walkable = true;

	}

	this.isWalkable = function() {

		return this.walkable;

	}

}


