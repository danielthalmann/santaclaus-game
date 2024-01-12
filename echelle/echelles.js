

var Keyboard = function(){

	this.arrow = [];

	this.arrow['up'] = false;
	this.arrow['down'] = false;
	this.arrow['left'] = false;
	this.arrow['right'] = false;

	this.lastArrow = 'none';

	this.changed = function(){
	};

	window.parentKeyboard = this;

	$(window).keydown(function(e){

		e.preventDefault();

		switch(e.originalEvent.keyCode){
			case 37:

				this.parentKeyboard.arrow['left'] = true;
				if(this.parentKeyboard.lastArrow != 'left'){
					this.parentKeyboard.lastArrow = 'left';
					this.parentKeyboard.changed();
				}
				
				break;
			case 38:
				this.parentKeyboard.arrow['up'] = true;
				if(this.parentKeyboard.lastArrow != 'up'){
					this.parentKeyboard.lastArrow = 'up';
					this.parentKeyboard.changed();
				}
				break;
			case 39:
				this.parentKeyboard.arrow['right'] = true;
				if(this.parentKeyboard.lastArrow != 'right'){
					this.parentKeyboard.lastArrow = 'right';
					this.parentKeyboard.changed();
				}
				break;
			case 40:
				this.parentKeyboard.arrow['down'] = true;
				if(this.parentKeyboard.lastArrow != 'down'){
					this.parentKeyboard.lastArrow = 'down';
					this.parentKeyboard.changed();
				}
				break;
		}
		//console.log(e.originalEvent);
	});

	$(window).keyup(function(e){
		switch(e.originalEvent.keyCode){
			case 37:
				this.parentKeyboard.arrow['left'] = false;
				this.parentKeyboard.lastArrow = 'none';	
				this.parentKeyboard.changed();
				break;
			case 38:
				this.parentKeyboard.arrow['up'] = false;
				this.parentKeyboard.lastArrow = 'none';
				this.parentKeyboard.changed();
				break;
			case 39:
				this.parentKeyboard.arrow['right'] = false;
				this.parentKeyboard.lastArrow = 'none';
				this.parentKeyboard.changed();
				break;
			case 40:
				this.parentKeyboard.arrow['down'] = false;
				this.parentKeyboard.lastArrow = 'none';
				this.parentKeyboard.changed();
				break;
		}
		//console.log(e.originalEvent);
	});

}


Keyboard.prototype.onKeyboardChange = function(fn){

	this.changed = fn;

}

var Images = function(){

	this.images = [];
	this.countImages = 0;
	this.countLoaded = 0;
	this.loaded = function(){}

};

Images.prototype.onLoaded = function(fn){

	this.loaded = fn;

}

Images.prototype.getImage = function(index){

	// console.log(index);
	return this.images[index];

}

Images.prototype.loadImages = function(arrayImg) {

	this.countImages = arrayImg.length;
	this.countLoaded = 0;

	for (var i = arrayImg.length - 1; i >= 0; i--) {
		// console.log(this.images);

		var img = new Image();
		img.src = arrayImg[i];
		img.parentImages = this;
		img.onload = function(){
			
			this.parentImages.countLoaded++;

			// console.log(this.parentImages.countLoaded);

			if(this.parentImages.countLoaded == this.parentImages.countImages){

				this.parentImages.loaded();

			}
		}

		this.images[i] = img;

		// console.log(this.images);

	}

};


var TileMap = function(appContext){

	this.ctx = appContext.canvasContext;
	this.tiles = [];
	this.tileWidth = 64;
	this.tileHeight = 64;
	this.width = 0;
	this.height = 0;
	this.appContext = appContext;
	this.background = null;

}

TileMap.prototype.setSize = function(w, h){

	this.tiles = [];
	this.width = w;
	this.height = h;

	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {

			if(y == 0){
				this.tiles[x] = [];
			}
			tile = new Tile(this);
			tile.x = x;
			tile.y = y;
			// console.log (this.tiles);
			this.tiles[y][x] = tile;
		}
	}

	this.appContext.canvas.width = this.width * this.tileWidth;
	this.appContext.canvas.height = this.height * this.tileHeight;
}

TileMap.prototype.backTile = function(arrayIndex){

	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {

			var i = x + (y * this.width);
			// console.log(this.tiles);
			
			if (i < arrayIndex.length){
				if (arrayIndex[i] > -1){
					this.tiles[y][x].back = this.appContext.tilesLibrary.getTile(arrayIndex[i]);
				} else {
					this.tiles[y][x].back = null;
				}
			}
			
		}
	}
	console.log(this.tiles);
}

TileMap.prototype.frontTile = function(arrayIndex){


	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {

			var i = x + (y * this.width);
			
			if (i < arrayIndex.length){
				if (arrayIndex[i] > -1){
					this.tiles[y][x].front = this.appContext.tilesLibrary.getTile(arrayIndex[i]);
				} else {
					this.tiles[y][x].front = null;
				}
			}
			
		}
	}
}

TileMap.prototype.access = function(arrayIndex){


	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {

			var i = x + (y * this.width);
			
			if (i < arrayIndex.length){

				this.tiles[y][x].canMove.left = false;
				this.tiles[y][x].canMove.right = false;
				this.tiles[y][x].canMove.up = false;
				this.tiles[y][x].canMove.down = false;	
				
				if (arrayIndex[i] > -1){

					if((arrayIndex[i] & 1) == 1){
						this.tiles[y][x].canMove.up = true;
					}

					if((arrayIndex[i] & 2) == 2){
						this.tiles[y][x].canMove.right = true;
					}

					if((arrayIndex[i] & 4) == 4){
						this.tiles[y][x].canMove.down = true;
					}

					if((arrayIndex[i] & 8) == 8){
						this.tiles[y][x].canMove.left = true;
					}

				}


			}
			
		}
	}
}


TileMap.prototype.setTileBitmap = function() {

}

TileMap.prototype.context = function(ctx){
	this.ctx = ctx;
}


TileMap.prototype.drawBack = function(){

	
	if(this.background){
		var pat = this.ctx.createPattern(this.background, "repeat");
		this.ctx.rect(0, 0, this.width * this.tileWidth, this.height * this.tileHeight);
		this.ctx.fillStyle = pat;
		this.ctx.fill();

	}
	
	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			
			this.tiles[y][x].drawBack(this.ctx);

		}
	}

}

TileMap.prototype.drawFront = function(){
	
	for (var y = 0; y < this.height; y++) {
		for (var x = 0; x < this.width; x++) {
			
			this.tiles[y][x].drawFront(this.ctx);

		}
	}

}

TileMap.prototype.getTile = function(x, y){

	if (x >= this.width || y >= this.width){
		return null;
	}
	return this.tiles[y][x];

}

var Tile = function(tileMap) {
	this.x = 0;
	this.y = 0;
	this.canMove = {};
	this.canMove.left = true;
	this.canMove.right = true;
	this.canMove.up = true;
	this.canMove.down = true;
	this.tileType = 'void';
	this.image = null;
	this.tileMap = tileMap;
	this.back = null;
	this.front = null;
}

Tile.prototype.drawFront = function(ctx){

	if(this.front != null){
		ctx.drawImage(this.front.image, this.front.x, this.front.y,  this.front.width,  this.front.height,
					 				this.x * this.tileMap.tileWidth, this.y * this.tileMap.tileHeight, this.front.width, this.front.height);
	}

}
Tile.prototype.drawBack = function(ctx){

	if(this.back != null){
		ctx.drawImage(this.back.image, this.back.x, this.back.y,  this.back.width,  this.back.height,
					 				this.x * this.tileMap.tileWidth, this.y * this.tileMap.tileHeight, this.back.width, this.back.height);
	}

}

var Hero = function(appContext, map) {

	this.ctx = appContext.canvasContext;
	this.tileWidth = 64;
	this.tileHeight = 96;
	this.offsetTop = 32;
	this.map = map;
	this.tilePosition = null;
	this.tileDestination = null
	this.library = appContext.imagesLibrary;
	this.inMotion = false;
	this.orientation = 'none';
	this.newOrientation = 'none';
	this.speed = 14;

	this.x = 0;
	this.y = 0;

	this.image = appContext.imagesLibrary.getImage(1);

}

Hero.prototype.setTilePosition = function(x, y){

	this.tilePosition = this.map.getTile(x, y);

	if(this.tilePosition){
	
		this.x = this.tilePosition.x * this.tilePosition.tileMap.tileWidth;
		this.y = this.tilePosition.y * this.tilePosition.tileMap.tileHeight;

	}

}

Hero.prototype.move = function(){


	if(this.inMotion){


		xPass = false;
		yPass = false;

		if(this.x == this.tileDestination.x * this.tileDestination.tileMap.tileWidth){
			xPass = true;

		}else {

			speedX = (this.tileDestination.x - this.tilePosition.x) * this.speed;
			this.x += speedX;

			if(speedX > 0){
				if(this.x > this.tileDestination.x * this.tileDestination.tileMap.tileWidth){
					xPass = true;
				}
			}else if(speedX < 0){
				if(this.x < this.tileDestination.x * this.tileDestination.tileMap.tileWidth){
					xPass = true;
				}
			}
		}

		if(this.y == this.tileDestination.y * this.tileDestination.tileMap.tileHeight){
			yPass = true;
		}else {

			speedY = (this.tileDestination.y - this.tilePosition.y) * this.speed;
			this.y += speedY;

			if(speedY > 0){
				if(this.y > this.tileDestination.y * this.tileDestination.tileMap.tileHeight){
					yPass = true;
				}
			}else if(speedY < 0){
				if(this.y < this.tileDestination.y * this.tileDestination.tileMap.tileHeight){
					yPass = true;
				}
			}

		}


		if(xPass && yPass){

			this.inMotion = false;

			if(this.orientation != this.newOrientation){
				this.x = this.tileDestination.x * this.tileDestination.tileMap.tileWidth;
				this.y = this.tileDestination.y * this.tileDestination.tileMap.tileHeight;
			}

			this.tilePosition = this.tileDestination;
			this.tileDestination = null;

			this.direction(this.newOrientation);

		}

//console.log("move");
//console.log(this);

	}


}

Hero.prototype.draw = function(){
/*
	if(this.tilePosition){
		this.tilePosition.drawBack(this.ctx);
	}
	if(this.tileDestination){
		this.tileDestination.drawBack(this.ctx);
	}
*/
	this.ctx.drawImage(this.image, this.x, this.y - this.offsetTop, this.image.width, this.image.height);
/*
	if(this.tilePosition){
		this.tilePosition.drawFront(this.ctx);
	}
	if(this.tileDestination){
		this.tileDestination.drawFront(this.ctx);
	}
*/

}

Hero.prototype.direction = function(orientation){
	
	this.newOrientation = orientation;

	if(!this.inMotion){
		switch(orientation){
			case 'left':

				if( this.tilePosition.canMove.left){
					if( this.tilePosition.x - 1 > -1 ) {
						this.tileDestination = this.map.getTile(this.tilePosition.x - 1, this.tilePosition.y);
						this.inMotion = true;
						this.orientation = orientation;
					} else {
						this.adjustPosition();
					}
				}else {
					this.adjustPosition();
				}
				break;

			case 'right':

				if( this.tilePosition.canMove.right){
					if( this.tilePosition.x + 1 < this.tilePosition.tileMap.width ) {
						this.tileDestination = this.map.getTile(this.tilePosition.x + 1, this.tilePosition.y);
						this.inMotion = true;
						this.orientation = orientation;
					} else {
						this.adjustPosition();
					}
				}else {
					this.adjustPosition();
				}
				break;

			case 'up':

				if( this.tilePosition.canMove.up){
					if( this.tilePosition.y - 1 > -1 ) {
						this.tileDestination = this.map.getTile(this.tilePosition.x, this.tilePosition.y - 1);
						this.inMotion = true;
						this.orientation = orientation;
					} else {
						this.adjustPosition();
					}
				}else {
					this.adjustPosition();
				}
				break;

			case 'down':

				if( this.tilePosition.canMove.down){
					if( this.tilePosition.y + 1 < this.tilePosition.tileMap.height ) {
						this.tileDestination = this.map.getTile(this.tilePosition.x, this.tilePosition.y  	+ 1);
						this.inMotion = true;
						this.orientation = orientation;
					} else {
						this.adjustPosition();
					}
				}else {
					this.adjustPosition();
				}
				break;
		}		
	}

}

Hero.prototype.adjustPosition = function() {

	this.x = this.tilePosition.x * this.tilePosition.tileMap.tileWidth;
	this.y = this.tilePosition.y * this.tilePosition.tileMap.tileHeight;

}

var BitmapTilesLibrary = function() {

	this.bTiles = [];

}

BitmapTilesLibrary.prototype.addTile = function(image, x, y, width, height) {

	this.bTiles[this.bTiles.length] = {
		'image': image
		,'x': x
		,'y': y
		,'width': width
		,'height': height

	}

}

BitmapTilesLibrary.prototype.getTile = function(index) {

	return this.bTiles[index];

}


var AppContext = function(canvas) {

	this.canvas = canvas;
	this.key = new Keyboard();
	this.imagesLibrary = new Images();
	this.tilesLibrary = new BitmapTilesLibrary();
	this.canvasContext = canvas.getContext('2d');

}

var appContext = new AppContext(document.getElementById('canvas'));

appContext.imagesLibrary.onLoaded(run);
appContext.imagesLibrary.loadImages(['img/tiles.png', 'img/hero.svg', 'img/background.png']);

function run() {

	appContext.tilesLibrary.addTile(appContext.imagesLibrary.getImage(0), 0, 0, 64, 64);
	appContext.tilesLibrary.addTile(appContext.imagesLibrary.getImage(0), 64, 0, 64, 64);
	appContext.tilesLibrary.addTile(appContext.imagesLibrary.getImage(0), 128, 0, 64, 64);
	appContext.tilesLibrary.addTile(appContext.imagesLibrary.getImage(0), 0, 64, 64, 64);
	appContext.tilesLibrary.addTile(appContext.imagesLibrary.getImage(0), 64, 64, 64, 64);
	appContext.tilesLibrary.addTile(appContext.imagesLibrary.getImage(0), 128, 64, 64, 64);

    var map = new TileMap(appContext);
    var hero = new Hero(appContext, map);


    map.setSize(10, 6);
    map.background = appContext.imagesLibrary.getImage(2);


    map.backTile([  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    				-1, -1, -1,  0, -1, -1, -1, -1, -1, -1,
    				 3,  3,  3,  4, -1, -1, -1, -1, -1, -1,
    				-1, -1, -1,  1, -1, -1, -1, -1, -1, -1,
    				-1, -1, -1,  1, -1, -1, -1, -1, -1, -1,
    				-1, -1,  3,  3,  3,  3, -1, -1, -1, -1,]);

    map.frontTile([ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    				 0,  0,  0, -1, -1, -1, -1, -1, -1, -1,
    				-1,  2, -1, -1, -1, -1, -1, -1, -1, -1,
    				-1,  5, -1, -1, -1, -1, -1, -1, -1, -1,
    				-1, -1,  0,  0,  0,  0, -1, -1, -1, -1,
    				-1, -1,  2, -1, -1,  2, -1, -1, -1, -1,]);

    map.access([    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    				10, 10, 10, 12, -1, -1, -1, -1, -1, -1,
    				-1, -1, -1,  5, -1, -1, -1, -1, -1, -1,
    				-1, -1, -1,  5, -1, -1, -1, -1, -1, -1,
    				-1, -1,  2, 11, 10,  8, -1, -1, -1, -1,
    				-1, -1, -1, -1, -1, -1, -1, -1, -1, -1,]);


    hero.setTilePosition(0, 1);

    map.drawBack();
    
    hero.draw();

    map.drawFront();

	appContext.key.onKeyboardChange(function(){

		if(appContext.key.arrow.left){
			hero.direction('left');
		}
		else if(appContext.key.arrow.right){
			hero.direction('right');
		}
		else if(appContext.key.arrow.up){
			hero.direction('up');
		}
		else if(appContext.key.arrow.down){
			hero.direction('down');
		}else{
			hero.direction('none');			
		}

	});


	loop = function(){

		hero.move();

	    map.drawBack();
	    
	    hero.draw();

	    map.drawFront();

	    setTimeout(loop, 50);

	};

	loop();


}