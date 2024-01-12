
game.addLevel(20, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;

		var map = context.map;
		var player = context.player;
		player.setPosition(14,1);

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

		map.setTileSvg(1,2,Objs['Snow'],offset);
		map.addDecorSvg(1,2,Objs['Sapin'],offset);
		map.setTileSvg(2,2,Objs['Snow'],offset);
		map.setTileSvg(3,2,Objs['Snow'],offset);
		map.setTileSvg(4,2,Objs['Snow'],offset);
		map.setTileSvg(5,2,Objs['Snow'],offset);
		map.setTileSvg(6,2,Objs['Snow'],offset);


		map.setTileSvg(2,3,Objs['Ladder'],offset);
		map.addDecorSvg(2,4,Objs['Ladder'],offset);

		map.setTileSvg(0,4,Objs['Snow'],offset);
		map.setTileSvg(1,4,Objs['Snow'],offset);
		map.setTileSvg(2,4,Objs['Ice'],offset);
		map.setTileSvg(3,4,Objs['Ice'],offset);


		map.setTileSvg(0,5,Objs['Ladder'],offset);
		map.setTileSvg(0,6,Objs['Ladder'],offset);
		map.addDecorSvg(0,7,Objs['Ladder'],offset);

		map.setTileSvg(0,7,Objs['Snow'],offset);
		map.setTileSvg(1,7,Objs['Ice'],offset);
		map.setTileSvg(2,7,Objs['Snow'],offset);
		map.setTileSvg(3,7,Objs['Snow'],offset);
		map.addDecorSvg(3,7,Objs['Toilette'],offset);
		map.setTileSvg(4,7,Objs['Snow'],offset);
		map.setTileSvg(5,7,Objs['Snow'],offset);
		map.setTileSvg(6,7,Objs['Snow'],offset);

		map.setTileSvg(6,4,Objs['Ladder'],offset);
		map.addDecorSvg(6,5,Objs['Ladder'],offset);

		map.setTileSvg(5,5,Objs['Snow'],offset);
		map.setTileSvg(6,5,Objs['Snow'],offset);
		
		map.setTileSvg(8,5,Objs['Snow'],offset);

		map.setTileSvg (8,6,Objs['Ladder'],offset);
		map.setTileSvg (8,7,Objs['Ladder'],offset);
		map.addDecorSvg(8,8,Objs['Ladder'],offset);


		map.addDecorSvg(6,3,Objs['Ladder'],offset);
		map.setTileSvg (6,3,Objs['Snow'],offset);
		map.setTileSvg (7,3,Objs['Snow'],offset);
		map.setTileSvg (8,3,Objs['Snow'],offset);
		map.addDecorSvg(8,3,Objs['Sapin'],offset);
		map.setTileSvg (9,3,Objs['Snow'],offset);
		map.setTileSvg (10,3,Objs['Snow'],offset);
		map.setTileSvg (11,3,Objs['Snow'],offset);
		map.addDecorSvg(11,3,Objs['House'],offset);
		map.setTileSvg (12,3,Objs['Ice'],offset);

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
		map.addDecorSvg(12,8,Objs['BigIce'],offset);
		map.addDecorSvg(13,8,Objs['BigIce'],offset);

		map.setTileSvg (12,4,Objs['Ladder'],offset);
		map.setTileSvg (12,5,Objs['Ladder'],offset);
		map.setTileSvg (12,6,Objs['Ladder'],offset);
		map.addDecorSvg (12,7,Objs['Ladder'],offset);

	
		map.setTileSvg (14,1,Objs['Ice'],offset);
		map.setTileSvg (15,1,Objs['Ice'],offset);

		map.setTileSvg (15,2,Objs['Ladder'],offset);
		map.addDecorSvg(15,3,Objs['Ladder'],offset);

		map.setTileSvg(14,5,Objs['Snow'],offset);
		map.setTileSvg(15,5,Objs['Snow'],offset);

		map.setTileSvg (14,4,Objs['Ladder'],offset);
		map.addDecorSvg(14,5,Objs['Ladder'],offset);

		map.setTileSvg(12,7,Objs['Snow'],offset);
		map.setTileSvg(13,7,Objs['Snow'],offset);
		map.setTileSvg(14,7,Objs['Snow'],offset);
		map.setTileSvg(15,7,Objs['Snow'],offset);

		map.setTileSvg (15,6,Objs['Ladder'],offset);
		map.addDecorSvg(15,7,Objs['Ladder'],offset);

		map.addDecorSvg(9,8,Objs['Sapin'],offset);
		map.addDecorSvg(9,8,Objs['Sapin2'],offset);

		map.addDecorSvg( 9,3,Objs['Sapin'],offset);
		map.addDecorSvg( 9,3,Objs['Sapin2'],offset);

		map.addDecorSvg(4,7,Objs['Sapin3'],offset);
		map.addDecorSvg(4,7,Objs['Sapin2'],offset);


		var iceberg = map.addDecorSvg(4,2,Objs['Iceberg'],offset);

		var gift = map.addDecorSvg(6,7,Objs['Gift'],offset);

		var pick = map.addDecorSvg(8,5,Objs['Pick'],offset);

		map.autoAccess();

		tile = map.getTile(5,2);
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

			if(x == 8 && y == 5) {

				if(!inventories.hasInventory("Pick")){

					pick.hide();
					beep.play();
					inventories.takeInventory("Pick");
					
				}

			}			

			if(x == 5 && y == 2) {

				if(inventories.hasInventory("Pick")){
					
					iceBrake.play();
					game.stopInput();

					iceberg.hide(function() {
						game.startInput();
						inventories.leaveInventory("Pick");
					});

					tile = map.getTile(5, 2);
					tile.setAccessTo('left', true);
				
				}
			}


			// Gagné
			if(x == 6 && y == 7) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})