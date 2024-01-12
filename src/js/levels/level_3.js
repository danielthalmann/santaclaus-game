
game.addLevel(3, {


	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;

		var player = context.player;
		player.setPosition(3, 6);

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

		map.setTileSvg(3,3,Objs['Snow'],offset, 2);
		map.setTileSvg(4,3,Objs['Snow'],offset, 10);
		map.setTileSvg(5,3,Objs['Snow'],offset, 10);
		map.setTileSvg(6,3,Objs['Snow'],offset, 14);
		map.setTileSvg(7,3,Objs['Snow'],offset, 8);


		map.setTileSvg(3,6,Objs['Snow'],offset, 2);
		map.setTileSvg(4,6,Objs['Snow'],offset, 10);
		map.setTileSvg(5,6,Objs['Snow'],offset, 10);
		map.setTileSvg(6,6,Objs['Snow'],offset, 11);
		map.setTileSvg(7,6,Objs['Snow'],offset, 10);
		map.setTileSvg(8,6,Objs['Snow'],offset, 8);
		map.setTileSvg(9,6,Objs['Snow'],offset, 10);
		map.setTileSvg(10,6,Objs['Snow'],offset, 8);


		map.addDecorSvg(6,6,Objs['Ladder'],offset);
		map.setTileSvg(6,5,Objs['Ladder'],offset, 5);
		map.setTileSvg(6,4,Objs['Ladder'],offset, 5);

		var pick = map.addDecorSvg(3,3,Objs['Pick'],offset);
		
		var iceberg = map.addDecorSvg(9,6,Objs['Iceberg'],offset);

		map.addDecorSvg(10,6,Objs['Gift'],offset);

		var bulpick = map.addDecorSvg(8,4,invs.select("#Bul-Pick"), [0, -10]);
		bulpick.invisible();

		map.draw(context.snap);
		player.draw(context.snap);
		inventories.draw(context.snap);
		

		var soundBackground = new SoundPlayer('sound/music_christmas_3.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		var soundWin = new SoundPlayer('sound/sound_win.mp3');

		var wind = new SoundPlayer('sound/sound_wind.mp3');

		var beep = new SoundPlayer('sound/sound_beep.mp3');

		var iceBrake = new SoundPlayer('sound/sound_ice-brack.mp3');

		player.onReachDestination(function(x, y) {

			if(x == 3 && y == 3) {

				if(!inventories.hasInventory("Pick")){

					pick.hide();
					beep.play();
					inventories.takeInventory("Pick");
					
				}

			}

			if(iceberg.isVisible()){

				if(x == 8 && y == 6) {

					if(!inventories.hasInventory("Pick")){


						bulpick.show(function(){ setTimeout(function(){ bulpick.hide() }, 1000 ) });

						
					} else {

						
						iceBrake.play();
						game.stopInput();

						iceberg.hide(function() {
							game.startInput();
							inventories.leaveInventory("Pick");
						});

						let t = map.getTile(8, 6);

						t.setAccessTo('right', true);
					

					}

				}

			}


			// Gagné
			
			if(x == 10 && y == 6) {

				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}
			

		});

	}

})