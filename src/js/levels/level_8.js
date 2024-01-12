
game.addLevel(8, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(11, 8);

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
		Objs['Snowman'] = objects.select("#Snowman");
		Objs['Toilette'] = objects.select("#Toilette");
		Objs['Souche'] = objects.select("#Souche");
		Objs['Arbre'] = objects.select("#Arbre");
		Objs['Scie'] = objects.select("#Scie");
		Objs['Pick'] = objects.select("#Pick");

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg (1,2,Objs['Snow'],offset, 2);
		map.addDecorSvg(1,2,Objs['Toilette'],offset);
		map.setTileSvg (2,2,Objs['Snow'],offset, 10);
		var scie = map.addDecorSvg(2,2,Objs['Scie'],offset);
		map.setTileSvg (3,2,Objs['Snow'],offset, 10);
		map.setTileSvg (4,2,Objs['Snow'],offset, 8);
		map.addDecorSvg(4,2,Objs['Cave'],offset);
		map.addDecorSvg(5,2,Objs['Ice'],offset);


		map.setTileSvg (9,2,Objs['Snow'],offset, 6);
		map.setTileSvg (10,2,Objs['Snow'],offset, 10);
		map.setTileSvg (11,2,Objs['Snow'],offset, 10);
		map.addDecorSvg(11,2,Objs['Cave'],offset);
		map.setTileSvg (12,2,Objs['Ice'],offset, 12);



		map.setTileSvg (0,5,Objs['Snow'],offset, 2);
		map.addDecorSvg(0,5,Objs['Toilette'],offset);
		map.setTileSvg (1,5,Objs['Snow'],offset, 10);
		var pick = map.addDecorSvg(1,5,Objs['Pick'],offset);
		map.setTileSvg (2,5,Objs['Ice'],offset, 10);
		var arbre = map.addDecorSvg(2,5,Objs['Arbre'],offset);
		var souche = map.addDecorSvg(2,5,Objs['Souche'],offset);
		souche.invisible();
		map.setTileSvg (3,5,Objs['Ice'],offset, 2);
		var bulQuestion = map.addDecorSvg(3,3,invs.select("#Bul-Question"), [0, -10]);
		bulQuestion.invisible();
		map.setTileSvg (4,5,Objs['Snow'],offset, 10);
		map.setTileSvg (5,5,Objs['Snow'],offset, 8);
		map.addDecorSvg(5,5,Objs['Cave'],offset);
		map.addDecorSvg (6,5,Objs['Snow'],offset);
		
		map.setTileSvg (10,5,Objs['Snow'],offset, 4);
		var bulQuestionIce = map.addDecorSvg(10,3,invs.select("#Bul-Question"), [0, -10]);
		bulQuestionIce.invisible();
		map.setTileSvg (11,5,Objs['Ice'],offset, 10);
		var iceberg = map.addDecorSvg(11,5,Objs['Iceberg'],offset);
		map.setTileSvg (12,5,Objs['Snow'],offset, 8);


		map.setTileSvg (6,3,Objs['Ice'],offset, 2);
		map.addDecorSvg (6,3,Objs['Sapin3'],offset);
		map.setTileSvg (7,3,Objs['Ice'],offset, 10);
		map.addDecorSvg(7,3,Objs['Cave'],offset);
		map.setTileSvg (8,3,Objs['Ice'],offset, 10);
		map.setTileSvg (9,3,Objs['Ice'],offset, 9);
		map.addDecorSvg(9,3,Objs['Ladder'],offset);


		map.setTileSvg (12,3,Objs['Ice'],offset, 3);
		map.addDecorSvg(12,3,Objs['Ladder'],offset);
		map.setTileSvg (13,3,Objs['Ice'],offset, 10);
		map.setTileSvg (14,3,Objs['Ice'],offset, 10);
		map.addDecorSvg(14,3,Objs['Cave'],offset);
		map.setTileSvg (15,3,Objs['Ice'],offset, 8);


		map.setTileSvg (6,8,Objs['Ice'],offset, 2);
		map.setTileSvg (7,8,Objs['Ice'],offset, 2);
		map.addDecorSvg(7,8,Objs['Cave'],offset);
		map.setTileSvg (8,8,Objs['Ice'],offset, 10);
		map.setTileSvg (9,8,Objs['Snow'],offset, 10);
		map.setTileSvg (10,8,Objs['Ice'],offset, 11);
		map.addDecorSvg(10,8,Objs['Ladder'],offset);
		map.setTileSvg (11,8,Objs['Ice'],offset, 10);
		map.addDecorSvg(11,8,Objs['Toilette'],offset);
		map.setTileSvg (12,8,Objs['Snow'],offset, 8);

		map.setTileSvg (10,7,Objs['Ladder'],offset, 5);
		map.setTileSvg (10,6,Objs['Ladder'],offset, 5);



		var gift = map.addDecorSvg(12,5,Objs['Gift'],offset);

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

			let tile = null;

			if(x == 7 && y == 8) {

				player.teleportPlayer(11, 2);

			}
			if(x == 14 && y == 3) {

				player.teleportPlayer(4, 2);

			}
			if(x == 7 && y == 3) {

				player.teleportPlayer(5, 5);

			}
			if(x == 4 && y == 2) {

				player.teleportPlayer(11, 2);

			}
			if(x == 5 && y == 5) {

				player.teleportPlayer(11, 2);

			}
			if(x == 1 && y == 2) {

				player.teleportPlayer(11, 8);

			}
			if(x == 0 && y == 5) {

				player.teleportPlayer(11, 8);

			}


			if(x == 10 && y == 5) {
				if(!inventories.hasInventory("Pick")){

					bulQuestionIce.show(function(){ setTimeout(function(){ bulQuestionIce.hide() }, 1000 ) });

				} else {

					iceBrake.play();
					iceberg.hide();
					tile = map.getTile(10, 5);
					tile.setAccessTo('right', true);
				}
			}

			if(x == 3 && y == 5) {
				if(!inventories.hasInventory("Scie")){

					bulQuestion.show(function(){ setTimeout(function(){ bulQuestion.hide() }, 1000 ) });

				} else {

					iceBrake.play();
					arbre.hide();
					souche.show();
					tile = map.getTile(3, 5);
					tile.setAccessTo('left', true);
				}
			}


			if(x == 1 && y == 5) {
				if(!inventories.hasInventory("Pick")){

					beep.play();
					player.stop();
					inventories.takeInventory("Pick");
					pick.hide();

				} 
			}

			if(x == 2 && y == 2) {
				if(!inventories.hasInventory("Scie")){

					beep.play();
					player.stop();
					inventories.takeInventory("Scie");
					scie.hide();

				} 
			}

			// Gagné
			if(x == 12 && y == 5) {


				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})