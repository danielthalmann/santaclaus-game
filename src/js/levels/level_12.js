
game.addLevel(12, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(6, 6);

		var objects = context.lib.getSvg('objects');
		var invs = context.lib.getSvg('inventories');

		var inventories = new Inventories(map);
		inventories.addInventory("Pick", invs.select("#Inv-Pick"));

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
		var acces = [];

		map.setTileSvg (1,3,Objs['Snow'],offset);
		map.setTileSvg (2,3,Objs['Ice'],offset);
		map.setTileSvg (3,3,Objs['Snow'],offset);
		map.addDecorSvg(3,3,Objs['Toilette'],offset);
		map.setTileSvg (4,3,Objs['Snow'],offset);
		map.setTileSvg (5,3,Objs['Snow'],offset);
		var iceberg = map.addDecorSvg( 5,3,Objs['Iceberg'],offset);
		map.setTileSvg (6,3,Objs['Snow'],offset);

		map.setTileSvg (6,1,Objs['Snow'],offset);
		map.setTileSvg (7,1,Objs['Snow'],offset);
		map.setTileSvg (8,1,Objs['Ice'],offset);
		acces[0] = map.setTileSvg (9,1,Objs['Ice'],offset);
		map.setTileSvg (10,1,Objs['Snow'],offset);
		map.setTileSvg (11,1,Objs['Snow'],offset);

		map.setTileSvg ( 1,6,Objs['Snow'],offset);
		map.setTileSvg ( 2,6,Objs['Snow'],offset);

		acces[1] = map.setTileSvg ( 3,6,Objs['Ice'],offset);

		map.setTileSvg ( 4,6,Objs['Rock3'],offset);
		map.setTileSvg ( 5,6,Objs['Ice'],offset);
		map.addDecorSvg( 5,6,Objs['Sapin2'],offset);
		map.setTileSvg ( 6,6,Objs['Snow'],offset);
		map.setTileSvg ( 7,6,Objs['Rock3'],offset);
		map.setTileSvg ( 8,6,Objs['Ice'],offset);
		map.addDecorSvg( 8,6,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,6,Objs['Sapin'],offset);
		map.setTileSvg ( 9,6,Objs['Ice'],offset);
		var pick = map.addDecorSvg(1,6,Objs['Pick'],offset);	

		map.setTileSvg (10,6,Objs['Rock3'],offset);


		map.setTileSvg (9,8,Objs['Snow'],offset);
		map.setTileSvg (10,8,Objs['Snow'],offset);
		map.setTileSvg (11,8,Objs['Snow'],offset);
		acces[2] = map.setTileSvg (12,8,Objs['Ice'],offset);
		map.setTileSvg (13,8,Objs['Snow'],offset);
		map.addDecorSvg (13,8,Objs['Toilette'],offset);


		map.addDecorSvg( 4,6,Objs['Ladder'],offset);
		map.addDecorSvg( 7,6,Objs['Ladder'],offset);
		map.addDecorSvg(10,6,Objs['Ladder'],offset);

		map.setTileSvg ( 4,5,Objs['Rock3'],offset);
		map.setTileSvg ( 7,5,Objs['Rock3'],offset);
		map.setTileSvg (10,5,Objs['Rock3'],offset);


		map.setTileSvg ( 9,7,Objs['Ladder'],offset);
		map.addDecorSvg( 9,8,Objs['Ladder'],offset);

		map.setTileSvg ( 6,2,Objs['Ladder'],offset);
		map.addDecorSvg( 6,3,Objs['Ladder'],offset);


		map.setTileSvg (11,2,Objs['Ladder'],offset);
		map.setTileSvg (11,3,Objs['Ladder'],offset);
		map.addDecorSvg(11,4,Objs['Ladder'],offset);

		map.addDecorSvg( 1,3,Objs['Sapin3'],offset);
		map.addDecorSvg( 1,3,Objs['Sapin'],offset);

		
		var boutons = [];

		map.setTileSvg ( 5,6,Objs['Snow'],offset);

		boutons.push({
			'element': map.addDecorSvg(4,5,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#ff0000"
		});

		boutons.push({
			'element': map.addDecorSvg(7,5,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#00ff00"
		});

		boutons.push({
			'element': map.addDecorSvg(10,5,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#ffff00"
		});

		boutons.push({
			'element': map.addDecorSvg(7,1,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#ff00ff"
		});

		map.setTileSvg (11,4,Objs['Snow'],offset);
		map.addDecorSvg(12,4,Objs['House'],offset);
		map.setTileSvg (12,4,Objs['Ice'],offset);
		map.setTileSvg (13,4,Objs['Snow'],offset);
		map.setTileSvg (14,4,Objs['Snow'],offset);
		map.addDecorSvg(14,4,Objs['Sapin2'],offset);
		map.addDecorSvg(14,4,Objs['Sapin3'],offset);
		map.setTileSvg (15,4,Objs['Snow'],offset);
	

		var gift = map.addDecorSvg(15,4,Objs['Gift'],offset);

		map.autoAccess();

		for (var i = acces.length - 1; i >= 0; i--) {
			acces[i].invisible();
		}
		let tile = null;
		tile = map.getTile(4, 6);
		tile.setAccessTo("left", false);
		tile = map.getTile(11, 8);
		tile.setAccessTo("right", false);
		tile = map.getTile(8, 1);
		tile.setAccessTo("right", false);
		tile = map.getTile(4, 3);
		tile.setAccessTo('right', false);



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

		console.log(boutons);

		var checkAcces = function(bti){

			if(!boutons[bti].actif){
				boutons[bti].actif = true;
				boutons[bti].element.attr({fill: boutons[bti].color});
				beep.play();
			}else{
				boutons[bti].actif = false;
				boutons[bti].element.attr({fill: 'none'});
				beep.play();
			}			
			
			let tile = null;

			if(boutons[0].actif && boutons[1].actif && !boutons[2].actif){
				console.log('acces[0]');
				acces[0].show();
				tile = map.getTile(8, 1);
				tile.setAccessTo("right", true);
			}else {
				acces[0].hide();
				tile = map.getTile(8, 1);
				tile.setAccessTo("right", false);
			}

			if(boutons[0].actif && !boutons[1].actif && boutons[2].actif){
				console.log('acces[1]');
				acces[1].show();
				tile = map.getTile(4, 6);
				tile.setAccessTo("left", true);
			}else {
				acces[1].hide();
				tile = map.getTile(4, 6);
				tile.setAccessTo("left", false);
			}

			if((!boutons[0].actif && boutons[1].actif && boutons[2].actif) || boutons[3].actif){
				console.log('acces[2]');
				acces[2].show();
				tile = map.getTile(11, 8);
				tile.setAccessTo("right", true);
			}else {
				acces[2].hide();
				tile = map.getTile(11, 8);
				tile.setAccessTo("right", false);
			}

		}

		player.onMove(function(transPosition, speed_time) {


		});					   

		player.onReachDestination(function(x, y) {

			let tile = null;
			let bti = 0;

			if(x == 4 && y == 5) {
				checkAcces(0);
			}

			if(x == 7 && y == 5) {
				checkAcces(1);
			}

			if(x == 10 && y == 5) {
				checkAcces(2);
			}

			if(x == 7 && y == 1) {
				checkAcces(3);

			}


			if(x == 1 && y == 6) {

				if(!inventories.hasInventory("Pick")){

					pick.hide();
					beep.play();
					inventories.takeInventory("Pick");
					
				}

			}			

			if(x == 13 && y == 8) {

				player.stop();
				player.teleportPlayer(3, 3);

			}

			if(x == 3 && y == 3) {

				player.stop();
				player.teleportPlayer(13, 8);

			}

			// Gagné
			if(x == 15 && y == 4) {


				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}

			if(x == 4 && y == 3) {

				if(inventories.hasInventory("Pick")){
					
					iceBrake.play();
					game.stopInput();

					iceberg.hide(function() {
						game.startInput();
						inventories.leaveInventory("Pick");
					});

					tile = map.getTile(4, 3);
					tile.setAccessTo('right', true);
				
				}
			}



		});


	}

})