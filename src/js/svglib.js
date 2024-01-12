"use strict";

var SvgLib = function() {

	var svgs = new Object();

	this.get = function(index){

		if(typeof svgs[index] != 'undefined'){
	
			return svgs[index];

		}
		return null;
	}


	this.getSvg = function(name){

		return this.get(name).g;

	}

	this.loadSvgs = function(arraySvg, loaded) {

		var countSvg = arraySvg.length;
		var countLoaded = 0;
		var lib = this;

		for (var i = 0; i < arraySvg.length; i++) {

			(function (i){

				let element = lib.get(arraySvg[i].name);

				// console.log('loadSvgs', arraySvg[i].name, element);

				if(element == null){

					Snap.load(arraySvg[i].url, function (f) {

			            svgs[arraySvg[i].name] = {
			            	g : f.select("g"),
			            	svg: f,
			            	name : arraySvg[i].name,
			            	url : arraySvg[i].url
			            };

			            countLoaded++;

						if(countLoaded == countSvg){
							setTimeout(loaded, 10);
						}

			        });

			    } else {

		            countLoaded++;

					if(countLoaded == countSvg){
						setTimeout(loaded, 10);
					}

				}


		        
			})(i);


		}

	};


}
