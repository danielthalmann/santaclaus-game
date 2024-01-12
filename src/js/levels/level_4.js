
game.addLevel(4, {


	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;

		var player = context.player;
		player.setPosition(5, 2);		

		var inventories = new Inventories(map);
		
		var objects = context.lib.getSvg('objects');
		var invs = context.lib.getSvg('inventories');

		inventories.addInventory("Pick", invs.select("#Inv-Pick"));

		let Objs = new Object();
		
		Objs['Ice'] = objects.select("#Ice");
		Objs['Snow'] = objects.select("#Snow");
		Objs['Iceberg'] = objects.select("#Iceberg");
		Objs['Sapin'] = objects.select("#Sapin");
		Objs['Ladder'] = objects.select("#Ladder");
		Objs['Gift'] = objects.select("#Gift");
		Objs['Cave'] = objects.select("#Cave");
		Objs['House'] = objects.select("#House");
		Objs['Rock'] = objects.select("#Rock");
		Objs['Toilette'] = objects.select("#Toilette");
		Objs['Pick'] = objects.select("#Pick");

		console.log(Objs);

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg(1,2,Objs['Snow'],offset, 2);
		map.addDecorSvg(1,2,Objs['Sapin'],offset, 2);
		map.setTileSvg(2,2,Objs['Snow'],offset, 14);
		map.setTileSvg(3,2,Objs['Snow'],offset, 10);
		map.setTileSvg(4,2,Objs['Snow'],offset, 11);
		map.setTileSvg(5,2,Objs['Snow'],offset, 8);

		map.addDecorSvg(4,2,Objs['Ladder'],offset, 5);


		map.setTileSvg(2,3,Objs['Ladder'],offset, 5);
		map.addDecorSvg(2,4,Objs['Ladder'],offset);

		map.setTileSvg(0,4,Objs['Snow'],offset, 6);
		map.setTileSvg(1,4,Objs['Snow'],offset, 10);
		map.setTileSvg(2,4,Objs['Ice'],offset, 11);
		map.setTileSvg(3,4,Objs['Ice'],offset, 8);

		var pick = map.addDecorSvg(3,4,Objs['Pick'],offset);

		map.setTileSvg(0,5,Objs['Ladder'],offset, 5);
		map.setTileSvg(0,6,Objs['Ladder'],offset, 5);
		map.setTileSvg(0,7,Objs['Ladder'],offset, 5);
		map.addDecorSvg(0,8,Objs['Ladder'],offset, 5);

		map.setTileSvg(0,8,Objs['Snow'],offset, 3);
		map.setTileSvg(1,8,Objs['Ice'],offset, 10);
		map.setTileSvg(2,8,Objs['Snow'],offset, 10);
		map.setTileSvg(3,8,Objs['Snow'],offset, 8);

		map.addDecorSvg(2,8,Objs['Cave'],offset);

		map.setTileSvg(3,6,Objs['Snow'],offset, 2);
		map.setTileSvg(4,6,Objs['Snow'],offset, 10);
		map.setTileSvg(5,6,Objs['Snow'],offset, 10);
		map.setTileSvg(6,6,Objs['Snow'],offset, 9);

		map.addDecorSvg(4,6,Objs['Cave'],offset);

		map.addDecorSvg(6,6,Objs['Ladder'],offset);
		map.setTileSvg(6,5,Objs['Ladder'],offset, 5);
		map.setTileSvg(6,4,Objs['Ladder'],offset, 5);
		map.setTileSvg(6,3,Objs['Ladder'],offset, 5);
		map.setTileSvg(6,2,Objs['Ladder'],offset, 5);

		map.setTileSvg(6,1,Objs['Snow'],offset, 12);
		map.setTileSvg(5,1,Objs['Snow'],offset, 10);
		map.setTileSvg(4,1,Objs['Snow'],offset, 6);


		map.setTileSvg(8,3,Objs['Snow'],offset, 2);
		map.addDecorSvg(8,3,Objs['Sapin'],offset, 2);
		map.setTileSvg(9,3,Objs['Snow'],offset, 14);
		map.setTileSvg(10,3,Objs['Snow'],offset, 10);
		map.setTileSvg(11,3,Objs['Snow'],offset, 10);
		map.setTileSvg(12,3,Objs['Snow'],offset, 8);
		map.setTileSvg(13,3,Objs['Snow'],offset, 10);
		map.setTileSvg(14,3,Objs['Snow'],offset, 8);

		map.addDecorSvg(10,3,Objs['Cave'],offset);

		map.setTileSvg (9,4,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,5,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,6,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,7,Objs['Ladder'],offset, 5);
		map.addDecorSvg(9,8,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,8,Objs['Snow'],offset, 3);
		map.setTileSvg (10,8,Objs['Snow'],offset, 8);
		map.addDecorSvg (11,8,Objs['Snow'],offset, 8);

		map.addDecorSvg(10,8,Objs['Cave'],offset);

		var iceberg = map.addDecorSvg(13,3,Objs['Iceberg'],offset);

		map.addDecorSvg(14,3,Objs['Gift'],offset);
		var bulpick = map.addDecorSvg(12,1,invs.select("#Bul-Pick"), [0, -10]);
		bulpick.invisible();

		let positionOffset = new Snap.Matrix();
		positionOffset.translate( offset[0], offset[1]);
		
		map.draw(context.snap);
		player.draw(context.snap);
		inventories.draw(context.snap);
		
		var soundBackground = new SoundPlayer('sound/music_christmas.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		var soundWin = new SoundPlayer('sound/sound_win.mp3');

		var wind = new SoundPlayer('sound/sound_wind.mp3');

		var beep = new SoundPlayer('sound/sound_beep.mp3');

		var iceBrake = new SoundPlayer('sound/sound_ice-brack.mp3');

		player.onMove(function(transPosition, speed_time) {
			
			

		});

		var passed = false;

		player.onReachDestination(function(x, y) {

			if(x == 10 && y == 8) {

				player.teleportPlayer(5, 2);

			}

			if(x == 4 && y == 6) {

				if(passed){
					player.teleportPlayer(10, 3);
				} else {
					player.teleportPlayer(2, 8);
					passed = true;
				}

			}

			if(x == 2 && y == 8) {

				if(passed){
					player.teleportPlayer(10, 3);
				} else {
					player.teleportPlayer(4, 6);
					passed = true;
				}

			}


			if(x == 3 && y == 4) {

				if(!inventories.hasInventory("Pick")){

					pick.hide();
					beep.play();
					inventories.takeInventory("Pick");
					
				}

			}

			if(iceberg.isVisible()){

				if(x == 12 && y == 3) {

					if(!inventories.hasInventory("Pick")){


						bulpick.show(function(){ setTimeout(function(){ bulpick.hide() }, 1000 ) });

						
					} else {

						
						iceBrake.play();
						game.stopInput();

						iceberg.hide(function() {
							game.startInput();
							inventories.leaveInventory("Pick");
						});

						let t = map.getTile(12, 3);

						t.setAccessTo('right', true);
					

					}

				}

			}


			// Gagné
			
			if(x == 14 && y == 3) {

				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}
			

		});

	}

})