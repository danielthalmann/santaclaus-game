
game.addLevel(13, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(2, 5);

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

		map.setTileSvg (1,5,Objs['Snow'],offset);
		var Pick = map.addDecorSvg(4,7,Objs['Snowman'],offset);
		
		map.setTileSvg ( 2,5,Objs['Ice'],offset);
		map.setTileSvg ( 3,5,Objs['Snow'],offset);
		map.addDecorSvg( 3,5,Objs['Ladder'],offset);

		map.setTileSvg ( 3,7,Objs['Snow'],offset);
		map.setTileSvg ( 4,7,Objs['Snow'],offset);
		map.setTileSvg ( 5,7,Objs['Ice'],offset);
		map.addDecorSvg( 5,7,Objs['Snow'],offset);

		map.setTileSvg ( 3,4,Objs['Ladder'],offset);

		map.setTileSvg ( 5,4,Objs['Ladder'],offset);
		map.setTileSvg ( 5,5,Objs['Ladder'],offset);
		map.setTileSvg ( 5,6,Objs['Ladder'],offset);
		map.addDecorSvg( 5,7,Objs['Ladder'],offset);

		
		var bulQuestion = map.addDecorSvg(6,1,invs.select("#Bul-Question"), [0, -10]);
		bulQuestion.invisible();
		

		var scie = map.addDecorSvg(3,7,Objs['Scie'],offset);
		var arbre = map.addDecorSvg(7,3,Objs['Arbre'],offset);
		var souche = map.addDecorSvg(7,3,Objs['Souche'],offset);
		souche.invisible();


		map.setTileSvg ( 3,3,Objs['Rock3'],offset);
		map.setTileSvg ( 4,3,Objs['Rock3'],offset);
		map.setTileSvg ( 5,3,Objs['Ice'],offset);
		map.addDecorSvg( 5,3,Objs['Sapin2'],offset);
		map.setTileSvg ( 6,3,Objs['Snow'],offset);
		map.setTileSvg ( 7,3,Objs['Rock3'],offset);
		map.setTileSvg ( 8,3,Objs['Ice'],offset);

		map.addDecorSvg( 8,3,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,3,Objs['Sapin'],offset);
		map.setTileSvg ( 9,3,Objs['Nuage'],offset);

		map.addDecorSvg( 1,5,Objs['Sapin3'],offset);
		map.addDecorSvg( 1,5,Objs['Sapin2'],offset);
		map.addDecorSvg( 2,5,Objs['Sapin'],offset);


		map.setTileSvg( 11,4,Objs['Nuage'],offset);
		map.setTileSvg( 12,4,Objs['Nuage'],offset);

		map.setTileSvg( 13,5,Objs['Nuage'],offset);
		map.setTileSvg( 14,5,Objs['Nuage'],offset);

		var gift = map.addDecorSvg(9,3,Objs['Gift'],offset);

		map.autoAccess();

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


		let tile = null;
		tile = map.getTile(6, 3);
		tile.setAccessTo("right", false);


		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {

			let tile = null;


			if(x == 6 && y == 3) {

				if(!inventories.hasInventory("Scie")){

					bulQuestion.show(function(){ setTimeout(function(){ bulQuestion.hide() }, 1000 ) });

				} else {

					iceBrake.play();
					arbre.hide();
					souche.show();
					tile = map.getTile(6, 3);
					tile.setAccessTo('right', true);
				}
			}

			if(x == 3 && y == 7) {
				if(!inventories.hasInventory("Scie")){

					beep.play();
					player.stop();
					inventories.takeInventory("Scie");
					scie.hide();

				} 
			}

			// Gagné
			if(x == 9 && y == 3) {


				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})