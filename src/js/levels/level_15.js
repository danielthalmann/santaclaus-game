
game.addLevel(15, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;

		var map = context.map;
		var player = context.player;
		player.setPosition(3, 8);

		var objects = context.lib.getSvg('objects');
		var invs = context.lib.getSvg('inventories');

		var inventories = new Inventories(map);
		inventories.addInventory("Pick", invs.select("#Inv-Pick"));
		inventories.addInventory("Scie", invs.select("#Inv-Scie"));

		let Objs = new Object();
		
		Objs['Ice'] = objects.select("#Ice");
		Objs['Snow'] = objects.select("#Snow");
		Objs['Iceberg'] = objects.select("#Iceberg");
		Objs['Sapin'] = objects.select("#Sapin");
		Objs['Sapin2'] = objects.select("#Sapin2");
		Objs['Sapin3'] = objects.select("#Sapin3");
		Objs['Ladder'] = objects.select("#Ladder");
		Objs['Gift'] = objects.select("#Gift");
		Objs['Cave'] = objects.select("#Cave");
		Objs['House'] = objects.select("#House");
		Objs['Rock'] = objects.select("#Rock");
		Objs['Rock2'] = objects.select("#Rock2");
		Objs['Rock3'] = objects.select("#Rock3");
		Objs['Snowman'] = objects.select("#Snowman");
		Objs['Toilette'] = objects.select("#Toilette");
		Objs['Souche'] = objects.select("#Souche");
		Objs['Arbre'] = objects.select("#Arbre");
		Objs['Scie'] = objects.select("#Scie");
		Objs['Pick'] = objects.select("#Pick");
		Objs['Nuage'] = objects.select("#Nuage");
		Objs['Portail'] = objects.select("#Portail");
		Objs['Interrupteur'] = objects.select("#Interrupteur");
		

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];
		var caseTiles = [];

		map.setTileSvg(1,2,Objs['Snow'],offset);
		map.addDecorSvg(1,2,Objs['Sapin'],offset);
		map.setTileSvg(2,2,Objs['Snow'],offset);
		map.setTileSvg(3,2,Objs['Snow'],offset);
		map.setTileSvg(4,2,Objs['Snow'],offset);

		map.addDecorSvg(4,2,Objs['Ladder'],offset);


		map.setTileSvg(2,3,Objs['Ladder'],offset);
		map.addDecorSvg(2,4,Objs['Ladder'],offset);

		map.setTileSvg(0,4,Objs['Snow'],offset);
		map.setTileSvg(1,4,Objs['Snow'],offset);
		map.setTileSvg(2,4,Objs['Ice'],offset);
		map.setTileSvg(3,4,Objs['Ice'],offset);


		map.setTileSvg(0,5,Objs['Ladder'],offset);
		map.setTileSvg(0,6,Objs['Ladder'],offset);
		map.setTileSvg(0,7,Objs['Ladder'],offset);
		map.addDecorSvg(0,8,Objs['Ladder'],offset);

		map.setTileSvg(0,8,Objs['Snow'],offset);
		map.setTileSvg(1,8,Objs['Ice'],offset);
		map.setTileSvg(2,8,Objs['Snow'],offset);
		map.setTileSvg(3,8,Objs['Snow'],offset);

		map.addDecorSvg(3,8,Objs['Toilette'],offset);

		map.setTileSvg(4,7,Objs['Snow'],offset);
		map.setTileSvg(5,7,Objs['Snow'],offset);
		map.addDecorSvg(5,7,Objs['Ladder'],offset);
		map.setTileSvg(6,7,Objs['Snow'],offset);

		map.setTileSvg(6,2,Objs['Ladder'],offset);
		map.setTileSvg(6,3,Objs['Ladder'],offset);
		map.setTileSvg(6,4,Objs['Ladder'],offset);
		map.addDecorSvg(6,5,Objs['Ladder'],offset);

		map.setTileSvg(5,5,Objs['Snow'],offset);
		map.setTileSvg(6,5,Objs['Snow'],offset);
		
		caseTiles[0] = map.setTileSvg(7,5,Objs['Snow'],offset);

		map.setTileSvg(8,5,Objs['Snow'],offset);

		map.setTileSvg(5,6,Objs['Ladder'],offset);
		map.setTileSvg(8,6,Objs['Ladder'],offset);
		map.setTileSvg(8,7,Objs['Ladder'],offset);
		map.addDecorSvg(8,8,Objs['Ladder'],offset);


		map.setTileSvg(6,1,Objs['Snow'],offset);
		caseTiles[1] = map.setTileSvg(5,1,Objs['Snow'],offset);
		map.setTileSvg(4,1,Objs['Snow'],offset);


		map.setTileSvg(8,3,Objs['Snow'],offset);
		map.addDecorSvg(8,3,Objs['Sapin'],offset);
		map.setTileSvg(9,3,Objs['Snow'],offset);
		map.setTileSvg(10,3,Objs['Snow'],offset);

		map.addDecorSvg(11,3,Objs['Snow'],offset);
		map.addDecorSvg(11,3,Objs['Snowman'],offset);

		map.setTileSvg(14,3,Objs['Snow'],offset);
		map.setTileSvg(15,3,Objs['Snow'],offset);

		map.setTileSvg (10,4,Objs['Ladder'],offset);
		map.setTileSvg (10,5,Objs['Ladder'],offset);
		map.setTileSvg (10,6,Objs['Ladder'],offset);
		map.setTileSvg (10,7,Objs['Ladder'],offset);
		map.addDecorSvg(10,8,Objs['Ladder'],offset);

		map.setTileSvg (8,8,Objs['Snow'],offset);
		map.setTileSvg (9,8,Objs['Snow'],offset);
		map.setTileSvg (10,8,Objs['Snow'],offset);
		caseTiles[2] = map.setTileSvg (11,8,Objs['Snow'],offset);
		map.setTileSvg (12,8,Objs['Ice'],offset);

		map.setTileSvg (12,2,Objs['Ladder'],offset);
		map.setTileSvg (12,3,Objs['Ladder'],offset);
		map.setTileSvg (12,4,Objs['Ladder'],offset);
		map.setTileSvg (12,5,Objs['Ladder'],offset);
		map.setTileSvg (12,6,Objs['Ladder'],offset);
		map.setTileSvg (12,7,Objs['Ladder'],offset);
		map.addDecorSvg(12,8,Objs['Ladder'],offset);

		map.setTileSvg (12,1,Objs['Snow'],offset);
		map.setTileSvg (13,1,Objs['Snow'],offset);
		map.setTileSvg (14,1,Objs['Ice'],offset);
		map.setTileSvg (15,1,Objs['Ice'],offset);

		map.setTileSvg (14,2,Objs['Ladder'],offset);
		map.addDecorSvg(14,3,Objs['Ladder'],offset);

		map.setTileSvg(14,5,Objs['Snow'],offset);
		map.setTileSvg(15,5,Objs['Snow'],offset);

		map.setTileSvg (15,4,Objs['Ladder'],offset);
		map.addDecorSvg(15,5,Objs['Ladder'],offset);

		map.addDecorSvg(9,8,Objs['Sapin'],offset);
		map.addDecorSvg(9,8,Objs['Sapin2'],offset);

		map.addDecorSvg(13,1,Objs['Sapin'],offset);
		map.addDecorSvg(13,1,Objs['Sapin2'],offset);

		map.addDecorSvg(4,7,Objs['Sapin3'],offset);
		map.addDecorSvg(4,7,Objs['Sapin2'],offset);

		for (var i = caseTiles.length - 1; i >= 0; i--) {
			caseTiles[i].invisible();
		}

		var boutons = [];

		boutons.push({
			'position': [6,7],
			'element': map.addDecorSvg(6,7,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#ff0000"
		});

		boutons.push({
			'position': [9,3],
			'element': map.addDecorSvg(9,3,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#00ff00"
		});		

		boutons.push({
			'position': [3,4],
			'element': map.addDecorSvg(3,4,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#00ffff"
		});	

		var gift = map.addDecorSvg(14,5,Objs['Gift'],offset);

		map.autoAccess();

		tile = map.getTile(6,5);
		tile.setAccessTo('right', false);
		tile = map.getTile(8,5);
		tile.setAccessTo('left', false);


		tile = map.getTile(10,8);
		tile.setAccessTo('right', false);
		tile = map.getTile(12,8);
		tile.setAccessTo('left', false);


		tile = map.getTile(4,1);
		tile.setAccessTo('right', false);
		tile = map.getTile(6,1);
		tile.setAccessTo('left', false);


		map.draw(context.snap);
		player.draw(context.snap);
		inventories.draw(context.snap);

		let soundBackground = new SoundPlayer('sound/music_christmas.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		var soundWin = new SoundPlayer('sound/sound_win.mp3');

		var beep = new SoundPlayer('sound/sound_beep.mp3');

		var iceBrake = new SoundPlayer('sound/sound_ice-brack.mp3');


		var checkAcces = function(bti){

			if(typeof(bti) != 'undefined'){

				if(!boutons[bti].actif){
					boutons[bti].actif = true;
					boutons[bti].element.attr({fill: boutons[bti].color, stroke: boutons[bti].color});
					beep.play();
				}else{
					boutons[bti].actif = false;
					boutons[bti].element.attr({fill: 'none', stroke: '#000000'});
					beep.play();
				}

				setTimeout(function(){

					player.stop();
					let xy = player.getPosition();

					if(xy[0] == 5 && xy[1] == 1){
						player.teleportPlayer(3,8);
					}
					if(xy[0] == 7 && xy[1] == 5){
						player.teleportPlayer(3,8);
					}
					if(xy[0] == 11 && xy[1] == 8){
						player.teleportPlayer(3,8);
					}
					boutons[bti].actif = false;
					boutons[bti].element.attr({fill: 'none', stroke: '#000000'});
					beep.play();

					checkAcces();

				}, 4100);

			}
			

			if(boutons[0].actif){
				caseTiles[0].show();
				tile = map.getTile(6,5);
				tile.setAccessTo("right", true);
				tile = map.getTile(8,5);
				tile.setAccessTo('left', true);

			}else {
				caseTiles[0].hide();
				tile = map.getTile(6,5);
				tile.setAccessTo("right", false);
				tile = map.getTile(8,5);
				tile.setAccessTo('left', false);
			}

			if(boutons[1].actif){
				caseTiles[2].show();
				tile = map.getTile(10,8);
				tile.setAccessTo("right", true);
				tile = map.getTile(12,8);
				tile.setAccessTo('left', true);
			}else {
				caseTiles[2].hide();
				tile = map.getTile(10,8);
				tile.setAccessTo("right", false);
				tile = map.getTile(12,8);
				tile.setAccessTo('left', false);
			}

			if(boutons[2].actif){
				caseTiles[1].show();
				tile = map.getTile(4,1);
				tile.setAccessTo("right", true);
				tile = map.getTile(6,1);
				tile.setAccessTo('left', true);

			}else {
				caseTiles[1].hide();
				tile = map.getTile(4,1);
				tile.setAccessTo("right", false);
				tile = map.getTile(6,1);
				tile.setAccessTo('left', false);
			}

		}		


		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {

			for (var i = boutons.length - 1; i >= 0; i--) {
				let xy = boutons[i].position;
				if(x == xy[0] && y == xy[1]){
					checkAcces(i);
				}
			}

			// Gagné
			if(x == 14 && y == 5) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})