
game.addLevel(6, {


	ressources: [
		{name :'background-night', url : 'images/background-night.svg'},
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;

		var player = context.player;
		player.setPosition(2, 8);		

		var inventories = new Inventories(map);
		
		var objects = context.lib.getSvg('objects');
		var invs = context.lib.getSvg('inventories');

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
		Objs['Toilette'] = objects.select("#Toilette");

		console.log(Objs);

		context.snap.append(context.lib.getSvg('background-night'));

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
		map.setTileSvg(2,4,Objs['Ice'],offset, 10);
		map.setTileSvg(3,4,Objs['Ice'],offset, 12);
		map.setTileSvg(3,5,Objs['Ladder'],offset, 1);


		map.setTileSvg(0,5,Objs['Ladder'],offset, 5);
		map.setTileSvg(0,6,Objs['Ladder'],offset, 5);
		map.setTileSvg(0,7,Objs['Ladder'],offset, 5);
		map.addDecorSvg(0,8,Objs['Ladder'],offset, 5);

		map.setTileSvg(0,8,Objs['Snow'],offset, 3);
		map.setTileSvg(1,8,Objs['Ice'],offset, 10);
		map.setTileSvg(2,8,Objs['Snow'],offset, 10);
		map.setTileSvg(3,8,Objs['Snow'],offset, 8);

		map.addDecorSvg(2,8,Objs['House'],offset);

		map.setTileSvg(3,6,Objs['Snow'],offset, 2);
		map.setTileSvg(4,6,Objs['Snow'],offset, 10);
		map.setTileSvg(5,6,Objs['Snow'],offset, 11);
		map.setTileSvg(6,6,Objs['Snow'],offset, 8);

		map.setTileSvg(6,2,Objs['Ladder'],offset, 5);
		map.setTileSvg(6,3,Objs['Ladder'],offset, 5);
		map.setTileSvg(6,4,Objs['Ladder'],offset, 5);
		map.addDecorSvg(6,5,Objs['Ladder'],offset, 5);

		map.setTileSvg(5,5,Objs['Snow'],offset, 6);
		map.addDecorSvg(5,6,Objs['Ladder'],offset, 5);
		map.setTileSvg(6,5,Objs['Snow'],offset, 11);
		map.setTileSvg(7,5,Objs['Snow'],offset, 10);
		map.setTileSvg(8,5,Objs['Snow'],offset, 8);

		map.setTileSvg(8,6,Objs['Ladder'],offset, 5);
		map.setTileSvg(8,7,Objs['Ladder'],offset, 5);
		map.addDecorSvg(8,8,Objs['Ladder'],offset, 5);


		map.setTileSvg(6,1,Objs['Snow'],offset, 8);
		map.setTileSvg(5,1,Objs['Snow'],offset, 10);
		map.setTileSvg(4,1,Objs['Snow'],offset, 6);


		map.setTileSvg(8,3,Objs['Snow'],offset, 2);
		map.addDecorSvg(8,3,Objs['Sapin'],offset, 2);
		map.setTileSvg(9,3,Objs['Snow'],offset, 14);
		map.setTileSvg(10,3,Objs['Snow'],offset, 8);

		map.addDecorSvg(11,3,Objs['Snow'],offset, 10);
		map.addDecorSvg(11,3,Objs['Iceberg'],offset, 10);

		map.addDecorSvg(13,3,Objs['Iceberg'],offset, 10);
		map.addDecorSvg(13,3,Objs['Snow'],offset, 0);

		map.setTileSvg(14,3,Objs['Snow'],offset, 2);
		map.setTileSvg(15,3,Objs['Snow'],offset, 8);

		map.setTileSvg (9,4,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,5,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,6,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,7,Objs['Ladder'],offset, 5);
		map.addDecorSvg(9,8,Objs['Ladder'],offset, 11);

		map.setTileSvg (8,8,Objs['Snow'],offset, 3);
		map.setTileSvg (9,8,Objs['Snow'],offset, 11);
		map.setTileSvg (10,8,Objs['Snow'],offset, 10);
		map.setTileSvg (11,8,Objs['Snow'],offset, 10);
		map.setTileSvg (12,8,Objs['Ice'],offset, 9);

		map.setTileSvg (12,2,Objs['Ladder'],offset, 5);
		map.setTileSvg (12,3,Objs['Ladder'],offset, 5);
		map.setTileSvg (12,4,Objs['Ladder'],offset, 5);
		map.setTileSvg (12,5,Objs['Ladder'],offset, 5);
		map.setTileSvg (12,6,Objs['Ladder'],offset, 5);
		map.setTileSvg (12,7,Objs['Ladder'],offset, 5);
		map.addDecorSvg(12,8,Objs['Ladder'],offset, 11);

		map.setTileSvg (12,1,Objs['Snow'],offset, 6);
		map.setTileSvg (13,1,Objs['Snow'],offset, 10);
		map.setTileSvg (14,1,Objs['Ice'],offset, 10);
		map.setTileSvg (15,1,Objs['Ice'],offset, 12);

		map.setTileSvg (15,2,Objs['Ladder'],offset, 5);
		map.addDecorSvg(15,3,Objs['Ladder'],offset, 11);


		map.addDecorSvg(14,3,Objs['Gift'],offset);

		var soundBackground = new SoundPlayer('sound/music_christmas_2.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		var soundWin = new SoundPlayer('sound/sound_win.mp3');

		let wind = new SoundPlayer('sound/sound_wind.mp3');
		wind.setLoop(true)
				   .play();

		var circle = context.snap.circle(100,100,120).attr({ stroke: '#123456', 'strokeWidth': 20, fill: '#ffffff' });

		circle.transform(player.getMatrix());
		
		var backgroup = context.snap.group();

		map.draw(backgroup);
		//map.draw(context.snap);
		player.draw(context.snap);
		inventories.draw(context.snap);

		backgroup.attr({ mask: circle });

		player.onMove(function(transPosition, speed_time) {
			
			circle.animate({'transform' : transPosition}, speed_time, mina.linear);

		});

		var passed = false;

		player.onReachDestination(function(x, y) {

			if(x == 0 && y == 4) {

				let t = map.getTile(2, 4);
				t.setAccessTo('up', true);

			}
			if(x == 4 && y == 1) {

				let t = map.getTile(6, 1);
				t.setAccessTo('down', true);

			}

			if(x == 6 && y == 5) {

				let t = map.getTile(8, 5);
				t.setAccessTo('down', true);

			}

			if(x == 9 && y == 8) {

				let t = map.getTile(12, 8);
				t.setAccessTo('up', true);

			}

			// Gagné
			
			if(x == 14 && y == 3) {

				soundBackground.stop();
				soundWin.play();
				wind.stop();
				game.stopInput();
				game.win();

			}
			

		});

	}

})