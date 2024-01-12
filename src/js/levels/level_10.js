
game.addLevel(10, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(0, 1);

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
		Objs['Snowman'] = objects.select("#Snowman");
		Objs['Toilette'] = objects.select("#Toilette");
		Objs['Souche'] = objects.select("#Souche");
		Objs['Arbre'] = objects.select("#Arbre");
		Objs['Scie'] = objects.select("#Scie");
		Objs['Pick'] = objects.select("#Pick");
		Objs['Nuage'] = objects.select("#Nuage");

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];


		map.setTileSvg (0,1,Objs['Nuage'],offset, 2);
		map.setTileSvg (1,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (2,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (3,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (4,1,Objs['Nuage'],offset, 12);

		map.setTileSvg (6,1,Objs['Nuage'],offset, 2);
		map.setTileSvg (7,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (8,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (9,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (10,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (11,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (12,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (13,1,Objs['Nuage'],offset, 10);
		map.setTileSvg (14,1,Objs['Nuage'],offset, 12);



		map.setTileSvg (1,3,Objs['Nuage'],offset, 2);
		map.setTileSvg (2,3,Objs['Nuage'],offset, 10);
		map.setTileSvg (3,3,Objs['Nuage'],offset, 10);

		map.setTileSvg(4,2,Objs['Ladder'],offset, 5);
		map.setTileSvg (4,3,Objs['Nuage'],offset, 3);
		map.addDecorSvg(4,3,Objs['Ladder'],offset);
		map.setTileSvg (5,3,Objs['Nuage'],offset, 10);
		map.setTileSvg (6,3,Objs['Nuage'],offset, 10);
		map.setTileSvg (7,3,Objs['Nuage'],offset, 10);
		map.setTileSvg (8,3,Objs['Nuage'],offset, 14);
		map.setTileSvg (9,3,Objs['Nuage'],offset, 10);
		map.setTileSvg (10,3,Objs['Nuage'],offset, 8);

		map.setTileSvg(8,4,Objs['Ladder'],offset, 5);

		map.setTileSvg (1,5,Objs['Nuage'],offset, 6);
		map.setTileSvg (2,5,Objs['Nuage'],offset, 10);
		map.setTileSvg (3,5,Objs['Nuage'],offset, 10);

		map.setTileSvg (5,5,Objs['Nuage'],offset, 6);
		map.setTileSvg (6,5,Objs['Nuage'],offset, 10);
		map.setTileSvg (7,5,Objs['Nuage'],offset, 10);
		map.setTileSvg (8,5,Objs['Nuage'],offset, 9);
		map.addDecorSvg(8,5,Objs['Ladder'],offset);



		map.setTileSvg (1,6,Objs['Ladder'],offset, 5);

		map.setTileSvg (5,6,Objs['Ladder'],offset, 5);

		map.setTileSvg (0,7,Objs['Nuage'],offset, 2);
		map.addDecorSvg(1,7,Objs['Ladder'],offset);
		map.setTileSvg (1,7,Objs['Nuage'],offset, 10);
		map.setTileSvg (2,7,Objs['Nuage'],offset, 10);
		map.setTileSvg (3,7,Objs['Nuage'],offset, 10);
		map.setTileSvg (4,7,Objs['Nuage'],offset, 10);
		map.setTileSvg (5,7,Objs['Nuage'],offset, 9);
		map.addDecorSvg(5,7,Objs['Ladder'],offset);



		map.setTileSvg (9,7,Objs['Nuage'],offset, 2);
		map.setTileSvg (10,7,Objs['Nuage'],offset, 10);
		map.setTileSvg (11,7,Objs['Nuage'],offset, 10);
		map.setTileSvg (12,7,Objs['Nuage'],offset, 10);

		map.setTileSvg (13,7,context.snap.group(),offset, 10);
		map.setTileSvg (14,7,Objs['Nuage'],offset, 9);
		map.addDecorSvg(14,7,Objs['Ladder'],offset);

		map.setTileSvg (14,6,Objs['Ladder'],offset, 5);
		map.setTileSvg (14,5,Objs['Ladder'],offset, 5);
		map.setTileSvg (14,4,Objs['Ladder'],offset, 5);
		map.setTileSvg (14,3,Objs['Ladder'],offset, 5);
		map.setTileSvg (14,2,Objs['Ladder'],offset, 5);

		var gift = map.addDecorSvg(2,1,Objs['Gift'],offset);


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

			if(x == 1 && y == 1) {

				player.stop();
				game.stopInput();
				player.moveTo(1,3, 800, mina.easeout, function(){game.startInput();});
			}			
			if(x == 2 && y == 3) {

				player.stop();
				game.stopInput();
				player.moveTo(2,5, 800, mina.easeout, function(){game.startInput();});
			}
			if(x == 7 && y == 1) {

				player.stop();
				game.stopInput();
				player.moveTo(6,3, 800, mina.easeout, function(){game.startInput();});
			}
			if(x == 3 && y == 5) {

				player.stop();
				game.stopInput();
				player.moveTo(3,7, 800, mina.easeout, function(){game.startInput();});
			}
			if(x == 10 && y == 3) {

				player.stop();
				game.stopInput();
				player.moveTo(11,7, 800, mina.easeout, function(){game.startInput();});
			}

			if(x == 12 && y == 7) {

				player.stop();
			}

			if(x == 7 && y == 3) {

				player.stop();
				game.stopInput();
				tile = map.getTile(6, 8);
				let tr = tile.getTransition();
				let trOut = new Snap.Matrix();
				trOut.translate(0, 50);
				tr.add(trOut);

				player.getSvg().animate({'transform' : tr, 'opacity' : 0}, 400, mina.easeout, function(){

					player.invisible();
					player.setPosition(0, 1);
					player.show();
					game.startInput();

				});

			}

			if(x == 1 && y == 7) {

				player.stop();
				game.stopInput();
				tile = map.getTile(0, 8);
				let tr = tile.getTransition();
				let trOut = new Snap.Matrix();
				trOut.translate(0, 50);
				tr.add(trOut);

				player.getSvg().animate({'transform' : tr, 'opacity' : 0}, 400, mina.easeout, function(){

					player.invisible();
					player.setPosition(0, 1);
					player.show();
					game.startInput();

				});

			}

			// Gagné
			if(x == 2 && y == 1) {


				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})