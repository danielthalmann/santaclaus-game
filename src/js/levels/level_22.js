
game.addLevel(22, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;

		var map = context.map;
		var player = context.player;
		player.setPosition(0, 2);

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

		map.setTileSvg ( 0,2,Objs['Ice'],offset);
		map.setTileSvg ( 1,2,Objs['Ice'],offset);
		map.setTileSvg ( 2,2,Objs['Ice'],offset);
		map.setTileSvg ( 3,2,Objs['Snow'],offset);
		map.setTileSvg ( 4,2,Objs['Snow'],offset);
		map.setTileSvg ( 5,2,Objs['Snow'],offset);
		map.addDecorSvg( 5,3,Objs['Ladder'],offset);
		map.setTileSvg ( 5,3,Objs['Dirt'],offset);
		map.setTileSvg ( 6,3,Objs['Dirt'],offset);
		map.setTileSvg ( 7,3,Objs['Ice'],offset);
		map.setTileSvg ( 8,3,Objs['Ice'],offset);
		map.setTileSvg ( 9,3,Objs['Ice'],offset);
		map.addDecorSvg( 9,4,Objs['Ladder'],offset);
		map.setTileSvg ( 9,4,Objs['Ice'],offset);
		map.setTileSvg (10,4,Objs['Ice'],offset);
		map.setTileSvg (11,4,Objs['Snow'],offset);
		map.setTileSvg (12,4,Objs['Ice'],offset);
		map.setTileSvg (13,4,Objs['Snow'],offset);
		map.setTileSvg (14,4,Objs['Snow'],offset);

		map.addDecorSvg( 0,8,Objs['BigIce'],offset);
		map.setTileSvg ( 1,8,Objs['Ice'],offset);
		map.setTileSvg ( 2,8,Objs['Ice'],offset);
		map.setTileSvg ( 3,8,Objs['Snow'],offset);
		map.setTileSvg ( 4,8,Objs['Snow'],offset);
		map.addDecorSvg( 4,8,Objs['Ladder'],offset);
		map.setTileSvg ( 4,7,Objs['Snow'],offset);
		map.setTileSvg ( 5,7,Objs['Snow'],offset);
		map.setTileSvg ( 6,7,Objs['Ice'],offset);
		map.setTileSvg ( 7,7,Objs['Ice'],offset);
		map.setTileSvg ( 8,7,Objs['Ice'],offset);
		map.setTileSvg ( 9,7,Objs['Ice'],offset);
		map.addDecorSvg(10,7,Objs['Ladder'],offset);
		map.setTileSvg (10,7,Objs['Ice'],offset);
		map.setTileSvg (10,6,Objs['Ice'],offset);
		map.setTileSvg (11,6,Objs['Ice'],offset);
		map.setTileSvg (12,6,Objs['Ice'],offset);
		map.setTileSvg (13,6,Objs['Snow'],offset);
		map.setTileSvg (14,6,Objs['Snow'],offset);
		map.addDecorSvg (14,6,Objs['Ladder'],offset);
		map.setTileSvg (14,5,Objs['Ladder'],offset);

		
		map.addDecorSvg( 3,2,Objs['Snowman'],offset);
		map.addDecorSvg( 4,2,Objs['Sapin'],offset);
		map.addDecorSvg( 8,3,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,3,Objs['Sapin'],offset);
		map.addDecorSvg(10,4,Objs['Sapin3'],offset);
		map.addDecorSvg(10,4,Objs['Sapin2'],offset);

		map.addDecorSvg(11,4,Objs['Sapin3'],offset);
		map.addDecorSvg(11,4,Objs['Sapin2'],offset);

		map.addDecorSvg(12,4,Objs['Sapin'],offset);
		map.addDecorSvg(12,4,Objs['Sapin2'],offset);

		map.addDecorSvg(13,4,Objs['Sapin3'],offset);
		map.addDecorSvg(13,4,Objs['Sapin'],offset);

		map.setTileSvg ( 12,1,Objs['Nuage'],offset);
		map.setTileSvg ( 13,1,Objs['Nuage'],offset);

		map.addDecorSvg( 8,7,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,7,Objs['Sapin2'],offset);
		map.addDecorSvg( 8,7,Objs['Sapin'],offset);

		map.addDecorSvg( 6,7,Objs['Sapin3'],offset);
		map.addDecorSvg( 6,7,Objs['Sapin'],offset);

		map.addDecorSvg(11,6,Objs['Sapin3'],offset);
		map.addDecorSvg(11,6,Objs['Sapin2'],offset);
		map.addDecorSvg(11,6,Objs['Sapin'],offset);


		map.addDecorSvg( 0,7,Objs['BigIce'],offset);
		map.addDecorSvg( 0,6,Objs['BigIce'],offset);
		map.addDecorSvg( 0,5,Objs['BigIce'],offset);
		map.addDecorSvg( 0,4,Objs['BigIce'],offset);
		map.addDecorSvg( 0,3,Objs['BigIce'],offset);

		map.addDecorSvg( 1,5,Objs['BigIce'],offset);
		map.addDecorSvg( 1,4,Objs['BigIce'],offset);
		map.addDecorSvg( 1,3,Objs['BigIce'],offset);

		map.addDecorSvg( 2,4,Objs['BigIce'],offset);
		map.addDecorSvg( 2,3,Objs['BigIce'],offset);

		map.addDecorSvg( 3,4,Objs['BigIce'],offset);
		map.addDecorSvg( 3,3,Objs['BigIce'],offset);

		map.addDecorSvg( 4,4,Objs['BigIce'],offset);
		map.addDecorSvg( 4,3,Objs['BigIce'],offset);

		map.addDecorSvg( 4,4,Objs['BigIce'],offset);
		map.addDecorSvg( 5,4,Objs['BigIce'],offset);
		map.addDecorSvg( 6,4,Objs['BigIce'],offset);
		map.addDecorSvg( 7,4,Objs['BigIce'],offset);
		map.addDecorSvg( 8,4,Objs['BigIce'],offset);


		let text = context.snap.group(context.snap.text(330,560,"Joli mais ultra facile ! L'inspiration commence à manquer !")
					.attr({'fill': '#000000',
					'font-size' : 22}));

		text.append(context.snap.text(329,559,"Joli mais ultra facile ! L'inspiration commence à manquer !")
					.attr({'fill': '#ffffff',
					'font-size' : 22}));

		text.attr({'opacity':0});
		

		var gift = map.addDecorSvg(2,8,Objs['Gift'],offset);

		map.autoAccess();

		map.draw(context.snap);
		player.draw(context.snap);
		inventories.draw(context.snap);

		context.snap.append(text);

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

			if(x == 5 && y == 2) {
				text.animate({opacity: 1}, 2000);
			}

			// Gagné
			if(x == 2 && y == 8) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})