"use strict";


function Game(){
	
	var dev = false;
	if(document.location.search == '?god'){
		dev = true;
	}	
	var lib = new SvgLib();
	var keyboard = new Keyboard();
	var mouseinput = new MouseInput();
	var map = new SvgMap();
	var snap = null;
	var gameSvg = null;
	var menuSvg = null;
	var menuGroupSvg = null;
	var player = new SvgPlayer(map);
	var currentLevel = 0;
	var now = new Date('2017-12-31');
	var context = new Object();

	// var now = new Date();
	var images = [];

	var saves = [];
	for (var i = 1; i < 25; i++) {
		saves[i] = {'win': false};
	}

	//window.localStorage.removeItem("appParams");

	if(window.localStorage.getItem("saves")){
		saves = JSON.parse(window.localStorage.getItem("saves"));
	}else {
		window.localStorage.setItem("saves", JSON.stringify(saves));
	}

	$(window).on("beforeunload", function() { 
		if(window.localStorage.getItem("saves")){
	    	window.localStorage.setItem("saves", JSON.stringify(saves)); 
		}
	});	

	lib.loadSvgs([
			{name :'player', url : 'images/player.svg'}
		], function() {

		player.setSvg(lib.getSvg('player'));

		player.setSvgDirectionID('none', '#Santaclausarret');
		player.setSvgDirectionID('left', '#Santaclausgauche');
		player.setSvgDirectionID('right', '#Santaclausdroit');
		player.setSvgDirectionID('up', '#Santaclaushaut');
		player.setSvgDirectionID('down', '#Santaclausbas');

		player.setOffset(-64, -128);
		player.setSound('walk', 'sound/sound_walk-snow.mp3')

		keyboard.onKeyboardChange(function(lastKeyChange, keys){

			if(!keys[lastKeyChange]){

				player.stop();
				return;

			}

			player.move(lastKeyChange);

		});

		mouseinput.onMouseClick(function(m_x, m_y){

			let bound = map.getTileBound();

			let x = parseInt(m_x / bound[0]);
			let y = parseInt(m_y / bound[1]);

			// console.log(x,y);

			let playerPos = player.getPosition();

			let path = map.getPath(playerPos, [x, y]);
			if(path.length == 0 && y < 9){
				path = map.getPath(playerPos, [x, y + 1]);
			}

			player.movePath(path);

		});

	});


	var levels = [];
	var gameLevel = null;
	var me = this;

	this.isDev = function() {
		return dev;
	}

	this.setNow = function(_date){

		if(document.location.search != '?god'){
			now = _date;
		}

	}

	this.run = function(){

		snap = Snap("#svg");

		this.menu();
		
	}

	this.setGiftImages = function(_images){

		images = _images;
	}

	this.menu = function(){

		lib.loadSvgs([
			{name :'menu', url : 'images/level.svg'}
		], function() {

			menuSvg = lib.getSvg('menu');

			menuGroupSvg = snap.group(menuSvg);

			//menuSvg.select("#fullscreen").click(function(){
			//	me.fullScreen();
			//});
			if(now.getDate() != (new Date()).getDate()){
				let triche = snap.text(60,30,"C'est pas joli de vouloir tricher en modifiant l'heure de son ordinateur !");
				triche.attr({'fill': '#000000',
					'font-size' : 30});
				let triche2 = triche.clone();
				triche2.attr({
					'x' : 61,
					'y' : 31,
					'fill': '#ff2323',
					'font-size' : 30});

				let tricheGroup = menuGroupSvg.group();

				tricheGroup.append(triche);
				tricheGroup.append(triche2);

				setTimeout(function() {
					tricheGroup.animate({opacity:0}, 1500, mina.linear, function(){
						tricheGroup.remove();
					});
				}, 5000);
			}

			var windows = [];

			for (var i = 1; i < 25; i++) {
				
				windows[i] = menuGroupSvg.select('#Day_' + i);

				(function(element, levelNo){

					if(typeof levels[levelNo] == 'undefined' || (now.getFullYear() < 2017 && ( now.getDate() < i || now.getMonth() < 11)) ){

						element.select('polygon').attr({
							'style':'fill:grey!important;',
							'opacity' : 0.2
						});
						
					} else {

						if(saves[i].win){

							element.attr({
								'style':'cursor:pointer;'
							});

							element.select('polygon').attr({
								'opacity': 0.2
							});

							me.addMenuGift(element, i);


						} else {

							element.attr({
								'style':'cursor:pointer;'
							});

						}

						element.animating = false;
						element.hover(function(){

							if (element.animating) return;
								element.animating = true;

							
							element.animate({opacity:0.25}, 40);

							let bbox = element.getBBox();

							// console.log(bbox);
							let t_hover = new Snap.Matrix(); 
							t_hover.scale(0.9, 0.9, bbox.x, bbox.y);

							let t_init = new Snap.Matrix(); 
							t_init.scale(1, 1, bbox.x, bbox.y);

							element.transform(t_hover);

							setTimeout(function() {
								element.animate({opacity:1,transform: t_init}, 500, mina.elastic);
							}, 50);


							setTimeout(function(){element.animating = false}, 550);

						});						

						element.click(function(){

							// me.fullScreen();
							currentLevel = levelNo;
							me.runLevel(levelNo);

						});


					}


				})(windows[i], i);
			}


		});

	}

	this.addMenuGift = function(element, id){

		let giftLevel = menuSvg.select('#GiftLevel');
		let gl = giftLevel.clone();

		let bbox = element.getBBox();
		let tp = new Snap.Matrix();
		tp.translate(bbox.x -64 + (bbox.width / 3), bbox.y -128 + bbox.height);

		gl.transform(tp);
		gl.attr({'display':'inherit'})
		element.parent().append(gl);

		if(typeof images[id - 1] != 'undefined'){

			gl.click(function(){

				var image = null;
				if(images[id - 1].o == '|'){
					image = snap.image(images[id - 1].url, 0, 0, 576, 384 );
					image.transform( 't150,576,r90,576,0' );
				}else{
					image = snap.image(images[id - 1].url, 0, 0, 867, 576 );
					image.transform( 't78,0' );
				}
				image.attr({'style':'cursor:pointer;'});
				
				menuSvg.append(image);
				image.click(function(){
					image.remove();
				});
				
				
			});

			gl.attr({'style':'cursor:pointer;'});
		}

	}

	this.runLevel = function(_level) {

		console.log('runLevel', _level);

		gameSvg = snap.group();
		gameLevel = levels[_level];
	
		lib.loadSvgs(gameLevel.ressources, function() {

			context = new Object();
			context.snap = gameSvg;
			context.map = map;
			context.keyboard = keyboard;
			context.mouseinput = mouseinput;
			context.lib = lib;
			context.player = player;
			player.clearOnReachDestination();

			me.startInput();

			map.setSize(16, 9);
			
			gameLevel.runLevel(context);

			
			if(me.isDev()){

				let tileBound = map.getTileBound();

				for (var y = 0; y < 9; y++) {
					for (var x = 0; x < 16; x++) {
						
						let tile = map.getTile(x, y);

						if(tile.getSvg()){

							let bbox = tile.getSvg().getBBox();
							let txt = game.getContext().snap.text((x * tileBound[0]) + (18), (y * tileBound[1]) + 13, x + " - " + y);

							if(typeof tile.getAccessTo != 'undefined'){

								let access = tile.getAccessTo();
								if(access['up']){
									txt = game.getContext().snap.text((x * tileBound[0]) + (tileBound[0]/2), (y * tileBound[1])  + (tileBound[1]/2), "1");	
									txt.attr({'fill' : 'red'});
								}
								if(access['right']){
									txt = game.getContext().snap.text((x * tileBound[0]) + (tileBound[0]/2) + 10 , (y * tileBound[1]) + (tileBound[1]/2) + 10, "2");	
									txt.attr({'fill' : 'blue'});
								}
								if(access['down']){
									txt = game.getContext().snap.text((x * tileBound[0])  + (tileBound[0]/2)  ,(y * tileBound[1]) + (tileBound[1]/2) + 20, "4");	
									txt.attr({'fill' : 'green'});
								}
								if(access['left']){
									txt = game.getContext().snap.text((x * tileBound[0])  + (tileBound[0]/2) - 10, (y * tileBound[1]) + (tileBound[1]/2) + 10, "8");	
									txt.attr({'fill' : 'yellow'});
								}
							}
						}

					}

				}

			
			}


		});

	}

	this.getContext = function(){
		return context;
	}

	this.addLevel = function(_level, gameLevel){

		levels[_level] = gameLevel;

	}

	var elem = document.getElementById("svg");

	this.fullScreen = function() {

		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}

	}

	this.win = function(){

		if(typeof stats != 'undefined'){
			stats.notifiyUrl({search: '?win_level_' + currentLevel});
		}

		saves[currentLevel].win = true;
		let element = menuSvg.select('#Day_' + currentLevel);
		element.select('polygon').attr({
							'opacity' : 0.2
						});
		me.addMenuGift(element, currentLevel);

		lib.loadSvgs([
				{name :'finish', url : 'images/finish.svg'}
			], function() {

			var finish = gameSvg.group(lib.getSvg('finish'));

			let bbox = finish.getBBox();

			let t_start = new Snap.Matrix(); 
			t_start.scale(0.2, 0.2, bbox.x, bbox.y);

			let t_end = new Snap.Matrix(); 
			t_end.scale(1, 1, bbox.x, bbox.y);

			finish.transform(t_start);
			finish.attr({opacity:0.25});

			finish.animate({opacity:1, transform: t_end}, 800, mina.elastic, function(){

				setTimeout(function(){

					gameSvg.animate({opacity:0}, 1000, mina.linear, function(){

						// finish.attr({style : 'display:none'});
						gameSvg.attr({style : 'display:none'});

					});

				}, 3000 );

			});

		});

		

	}

	this.stopInput = function(){

		keyboard.stopCapture();
		mouseinput.stopCapture();

	}

	this.startInput = function(){

		keyboard.startCapture();
		mouseinput.startCapture();
		
	}

	$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(){
		
	 	if (document.fullScreen || document.mozFullScreen || document.webkitFullScreen || document.MSFullscreen){
	 		$(document.body).addClass('fullscreen');
	 	} else {
	 		$(document.body).removeClass('fullscreen');
	 	}
	});


	$(document.body).click(function(){

	 	// game.fullScreen();

	});	

}

var game = new Game();

$(document).ready(function(){



		game.setNow(new Date());
		game.run();	


});	



