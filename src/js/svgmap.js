"use strict";

var SvgMap = function(){

	var tiles = [];

	var decors = [];

	var tileWidth = 64;
	var tileHeight = 64;

	var width = 0;
	var height = 0;

	var init = false;

	var astar = new Astar();
	astar.setMap(this);


	this.getPath = function(startPos, endPos) {

		let t_start = this.getTile(startPos[0], startPos[1]);
		let t_end = this.getTile(endPos[0], endPos[1]);

		if(!t_end || !t_start) {
			return [];
		}

		return astar.getPath(new AstarNode(t_start), new AstarNode(t_end));

	}

	this.getSize = function(){

		return [width, height];
		
	}

	this.setSize = function(w, h){

		tiles = [];
		decors = [];

		width = w;
		height = h;

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {

				if(y == 0){
					tiles[x] = [];
					decors[x] = [];
				}
				var tile = new SvgTile(this, x, y);
				tile.x = x;
				tile.y = y;

				if(y == 0){
					tile.setAccessTo("up", false);
				}
				if(x == 0){
					tile.setAccessTo("left", false);
				}
				if(y == height - 1){
					tile.setAccessTo("down", false);
				}
				if(x == width - 1){
					tile.setAccessTo("right", false);
				}

				tiles[y][x] = tile;
				decors[y][x] = null;
			}
		}
		
		return this;

	}

	this.getTileBound = function(){

		return [tileWidth,tileHeight];

	}

	this.access = function(arrayIndex){

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {

				var i = x + (y * width);
				
				if (i < arrayIndex.length){

					tiles[y][x].setAccessTo('left', false);
					tiles[y][x].setAccessTo('right', false);
					tiles[y][x].setAccessTo('up', false);
					tiles[y][x].setAccessTo('down', false);
					
					if (arrayIndex[i] > -1){

						if((arrayIndex[i] & 1) == 1){
							tiles[y][x].setAccessTo('up', true);
						}

						if((arrayIndex[i] & 2) == 2){
							tiles[y][x].setAccessTo('right', true);
						}

						if((arrayIndex[i] & 4) == 4){
							tiles[y][x].setAccessTo('down', true);
						}

						if((arrayIndex[i] & 8) == 8){
							tiles[y][x].setAccessTo('left', true);
						}

					}


				}
				
			}

		}

	}

	this.hasAccessTo = function(x, y, orientation){

		let tile = this.getTile(x, y);
		return tile.hasAccessTo(orientation);

	}

	this.setTileSvg = function(x, y, _svg, offset = [0, 0], access = 15) {

		// console.log('setTileSvg', x, y, _svg);

		let tile = this.getTile(x, y);

		tile.setWalkable(true);
		tile.setSvg(_svg);
		tile.setOffset(offset[0], offset[1]);
		tile.anim();

		tile.setAccessTo('up', false);
		tile.setAccessTo('right', false);
		tile.setAccessTo('down', false);
		tile.setAccessTo('left', false);

		if((access & 1) == 1){
			tile.setAccessTo('up', true);
		}

		if((access & 2) == 2){
			tile.setAccessTo('right', true);
		}

		if((access & 4) == 4){
			tile.setAccessTo('down', true);
		}

		if((access & 8) == 8){
			tile.setAccessTo('left', true);
		}

		return tile;

	}

	this.addDecorSvg = function(x, y, _svg, offset = [0, 0]) {

		// console.log('addDecorSvg', x, y, _svg);

		var decor = new SvgMapElement(this, x, y);

		decor.setSvg(_svg);
		decor.setOffset(offset[0], offset[1]);

		var _decors = this.getDecors(x, y);
		_decors.push(decor);

		this.setDecors(x, y, _decors);

		return decor;

	}

	this.context = function(ctx){

		this.ctx = ctx;

	}


	this.draw = function(canvas){
		
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				
				let tile = this.getTile(x, y);
				tile.draw(canvas);

				let _decors = this.getDecors(x, y);
				for(let z =0; z < _decors.length; z++){
					_decors[z].draw(canvas);
				}

			}
		}

		return this;

	}

	this.autoAccess = function(){


		
		let currentTile;
		let siblingTile;

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				
				currentTile = this.getTile(x, y);
				currentTile.clearAccess();

			
				

				if((x - 1) > -1){

					siblingTile = this.getTile(x-1, y);

					if(siblingTile.isWalkable()){
						
						currentTile.setAccessTo('left', true);
					}
				}

				if((x + 1) < width){

					siblingTile = this.getTile(x+1, y);

					if(siblingTile.isWalkable()){
						
						currentTile.setAccessTo('right', true);
					}
				}

				if((y - 1) > -1){

					siblingTile = this.getTile(x, y-1);

					if(siblingTile.isWalkable()){
						
						currentTile.setAccessTo('up', true);
					}
				}

				if((y + 1) < height){

					siblingTile = this.getTile(x, y+1);

					if(siblingTile.isWalkable()){
						
						currentTile.setAccessTo('down', true);
					}
				}


			}
		}

		return this;

	}	


	this.getTile = function(x, y){


		if (x >= width || y >= width){
			return null;
		}
		return tiles[y][x];

	}

	this.getDecors = function(x, y){

		if (x >= width || y >= width){
			return null;
		}
		let _decors = decors[y][x];
		if(_decors == null){
			return [];
		}
		else {
			return _decors;
		}

	}	

	this.setDecors = function(x, y, _decors){

		if (x >= width || y >= width){
			return;
		}

		decors[y][x] = _decors;

	}
}

