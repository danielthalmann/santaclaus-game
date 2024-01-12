
game.addLevel(15, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'},
		{name :'paths', url : 'images/paths.svg'}
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(5, 7);

		var objects = context.lib.getSvg('objects');
		var invs = context.lib.getSvg('inventories');
		var paths = context.lib.getSvg('paths');

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
		Objs['Path1'] = paths.select("#Path1");

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg (1,5,Objs['Snow'],offset);
		var Pick = map.addDecorSvg(1,5,Objs['Snowman'],offset);
		map.setTileSvg (2,5,Objs['Ice'],offset);
		map.addDecorSvg(2,5,Objs['Arbre'],offset);
		map.setTileSvg (3,5,Objs['Rock'],offset);
		var bulQuestion = map.addDecorSvg(3,3,invs.select("#Bul-Question"), [0, -10]);
		bulQuestion.invisible();
		bulQuestion.show(function(){ setTimeout(function(){ bulQuestion.hide() }, 1000 ) });


		var gift = map.addDecorSvg(12,5,Objs['Gift'],offset);

		map.autoAccess();

		map.draw(context.snap);
		player.draw(context.snap);
		inventories.draw(context.snap);

		let s = player.getSvg();
		console.log(s);
		s.drawAtPath( Objs['Path1'], 2000 , {startingTransform : player.getMatrix().toTransformString()});

		let soundBackground = new SoundPlayer('sound/music_christmas.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();

		var beep = new SoundPlayer('sound/sound_beep.mp3');

		var iceBrake = new SoundPlayer('sound/sound_ice-brack.mp3');


		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {

			let tile = null;

			// Gagné
			if(x == 12 && y == 5) {


				player.stop();
				soundBackground.stop();
				game.stopInput();
				game.win();

			}



		});


	}

})