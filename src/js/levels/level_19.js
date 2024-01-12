
game.addLevel(19, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;

		var map = context.map;
		var player = context.player;
		player.setPosition(2, 7);

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
		Objs['Void'] = objects.select("#Void");
		Objs['BigIce'] = objects.select("#BigIce");
		Objs['BigDirt'] = objects.select("#BigDirt");
		Objs['HalfRightDirt'] = objects.select("#HalfRightDirt");
		Objs['Dirt'] = objects.select("#Dirt");

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.addDecorSvg( 1,8,Objs['BigIce'],offset);
		map.addDecorSvg( 2,8,Objs['BigIce'],offset);
		map.addDecorSvg( 3,8,Objs['BigIce'],offset);

		map.setTileSvg ( 1,3,Objs['Snow'],offset);
		map.addDecorSvg( 1,3,Objs['Toilette'],offset);
		map.setTileSvg ( 2,3,Objs['Ice'],offset);
		map.setTileSvg ( 3,3,Objs['Snow'],offset);
		map.addDecorSvg( 3,3,Objs['Toilette'],offset);
		map.setTileSvg ( 4,3,Objs['Snow'],offset);
		map.setTileSvg ( 5,3,Objs['Snow'],offset);
		map.addDecorSvg( 5,3,Objs['Toilette'],offset);
		
		map.setTileSvg ( 6,2,Objs['Snow'],offset);
		map.addDecorSvg( 6,2,Objs['Toilette'],offset);
		map.setTileSvg ( 7,2,Objs['Dirt'],offset);
		map.setTileSvg ( 8,2,Objs['Dirt'],offset);
		map.addDecorSvg( 8,2,Objs['Toilette'],offset);
		map.setTileSvg ( 9,2,Objs['Dirt'],offset);
		map.setTileSvg (10,2,Objs['Snow'],offset);
		map.addDecorSvg(10,2,Objs['Toilette'],offset);
		map.setTileSvg (11,2,Objs['Snow'],offset);

		map.setTileSvg ( 1,7,Objs['Ice'],offset);
		map.addDecorSvg( 1,7,Objs['Toilette'],offset);
		map.setTileSvg ( 2,7,Objs['Snow'],offset);
		map.setTileSvg ( 3,7,Objs['Snow'],offset);
		map.addDecorSvg( 3,7,Objs['Ladder'],offset);
		

		map.setTileSvg ( 3,6,Objs['Snow'],offset);
		map.addDecorSvg( 3,6,Objs['Toilette'],offset);
		
		map.setTileSvg ( 5,6,Objs['Ice'],offset);
		map.addDecorSvg( 5,6,Objs['Toilette'],offset);
		map.setTileSvg ( 6,6,Objs['Snow'],offset);
		map.setTileSvg ( 7,6,Objs['Rock3'],offset);
		map.addDecorSvg( 7,6,Objs['Toilette'],offset);

		map.addDecorSvg( 9,6,Objs['Sapin3'],offset);
		map.addDecorSvg( 9,6,Objs['Sapin'],offset);
		map.setTileSvg ( 9,6,Objs['Ice'],offset);
		map.setTileSvg (10,6,Objs['Rock3'],offset);
		map.addDecorSvg(10,6,Objs['Toilette'],offset);

		map.setTileSvg ( 4,8,Objs['Snow'],offset);
		map.addDecorSvg( 4,8,Objs['Toilette'],offset);
		map.setTileSvg ( 5,8,Objs['Snow'],offset);
		map.setTileSvg ( 6,8,Objs['Snow'],offset);
		map.addDecorSvg( 6,8,Objs['Ladder'],offset);
		map.setTileSvg ( 6,7,Objs['Ladder'],offset);

		map.setTileSvg ( 8,8,Objs['Snow'],offset);
		map.addDecorSvg( 8,8,Objs['Toilette'],offset);
		map.setTileSvg ( 9,8,Objs['Snow'],offset);
		map.setTileSvg (10,8,Objs['Snow'],offset);
		map.setTileSvg (11,8,Objs['Snow'],offset);
		map.addDecorSvg(11,8,Objs['Toilette'],offset);
		map.setTileSvg (13,8,Objs['Snow'],offset);
		map.addDecorSvg(13,8,Objs['Toilette'],offset);
		map.setTileSvg (14,8,Objs['Snow'],offset);

		map.setTileSvg ( 9,7,Objs['Ladder'],offset);
		map.addDecorSvg( 9,8,Objs['Ladder'],offset);

		var sapins = [];
		sapins[0] = map.addDecorSvg( 1,3,Objs['Sapin3'],offset);
		sapins[1] = map.addDecorSvg( 1,3,Objs['Sapin'],offset);
		map.addDecorSvg( 2,3,Objs['Sapin3'],offset);

		map.addDecorSvg( 7,2,Objs['Sapin2'],offset);
		map.addDecorSvg( 7,2,Objs['Sapin3'],offset);

		map.addDecorSvg( 9,2,Objs['Sapin'],offset);
		map.addDecorSvg( 9,2,Objs['Sapin3'],offset);

		map.addDecorSvg(11,2,Objs['Sapin2'],offset);
		map.addDecorSvg(11,2,Objs['Sapin3'],offset);

		map.addDecorSvg(13,3,Objs['Nuage'],offset);
		map.addDecorSvg(14,3,Objs['Nuage'],offset);

		var gift = map.addDecorSvg(14,8,Objs['Gift'],offset);

		map.autoAccess();

		tile = map.getTile(2, 3);
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


		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {

			if((x == 1 && y == 7) || (x == 3 && y == 6)) {

				player.stop();
				player.teleportPlayer(8,2);

			}
			if(x == 7 && y == 6) {

				player.stop();
				player.teleportPlayer(6,2);

			}
			if(x == 3 && y == 3) {

				player.stop();
				player.teleportPlayer(1,7);

			}
			if(x == 5 && y == 3) {

				player.stop();
				player.teleportPlayer(3,6);

			}
			if(x == 5 && y == 6) {

				player.stop();
				player.teleportPlayer(3,6);

			}
			if(x == 10 && y == 2) {

				player.stop();
				player.teleportPlayer(3,3);

			}
			if(x == 8 && y == 8) {

				player.stop();
				player.teleportPlayer(1,7);

			}
			if(x == 6 && y == 2) {

				player.stop();
				player.teleportPlayer(11,8);

			}
			if(x == 10 && y == 6) {

				player.stop();
				player.teleportPlayer(10,2);
			}

			if(x == 8 && y == 2) {

				player.stop();
				player.teleportPlayer(3,3);
			}

			if(x == 1 && y == 3) {

				player.stop();
				player.teleportPlayer(5,6);
			}

			if(x == 4 && y == 8) {

				player.stop();
				player.teleportPlayer(13,8);
			}
			if(x == 11 && y == 8) {

				player.stop();
				player.teleportPlayer(1,7);

			}			

			if(x == 2 && y == 3) {

				tile = map.getTile(2, 3);

				if(!tile.hasAccessTo('left')){

					player.stop();
					tile.setAccessTo('left', true);

					var hideToilette = function(i){
						if(i < sapins.length){
							sapins[i].hide(function(){
								hideToilette(i+1);
							});
						}else {
							game.startInput();
						}
					}
					hideToilette(0);

				}

				
			}

			// Gagné
			if(x == 14 && y == 8) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})