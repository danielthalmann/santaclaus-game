
game.addLevel(2, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(4, 5);

		
		var objects = context.lib.getSvg('objects');

		let Objs = [];
		
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


		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg(3,5,Objs['Snow'],offset, 2);
		map.setTileSvg(4,5,Objs['Snow'],offset, 10);
		map.setTileSvg(5,5,Objs['Snow'],offset, 12);

		map.addDecorSvg(4,5,Objs['House'],offset);

		map.setTileSvg(5,6,Objs['Ladder'],offset, 5);

		map.setTileSvg(5,7,Objs['Ice'],offset, 3);
		map.addDecorSvg(5,7,Objs['Ladder'],offset);
		map.setTileSvg(6,7,Objs['Rock'],offset, 10);
		map.setTileSvg(7,7,Objs['Rock'],offset, 8);

		map.addDecorSvg(7,7,Objs['Cave'],offset);
		map.addDecorSvg(8,7,Objs['Snow'],offset);


		map.setTileSvg(11,2,Objs['Ice'],offset, 6);
		map.setTileSvg(12,2,Objs['Snow'],offset, 10);
		map.setTileSvg(13,2,Objs['Snow'],offset, 10);
		map.addDecorSvg(13,2,Objs['Cave'],offset);
		map.setTileSvg(14,2,Objs['Snow'],offset, 8);

		map.setTileSvg(11,3,Objs['Ladder'],offset, 5);
		map.addDecorSvg(11,4,Objs['Ladder'],offset);
		map.setTileSvg(11,4,Objs['Snow'],offset, 11);
		map.addDecorSvg(12,4,Objs['Sapin'],offset);

		map.setTileSvg(10,4,Objs['Snow'],offset, 10);
		map.setTileSvg(9,4,Objs['Snow'],offset, 2);
		map.addDecorSvg(9,4,Objs['Cave'],offset);
		map.addDecorSvg(8,4,Objs['Ice'],offset);
		map.addDecorSvg(8,4,Objs['Sapin'],offset);

		map.setTileSvg(12,4,Objs['Snow'],offset, 10);
		map.setTileSvg(13,4,Objs['Ice'],offset, 10);
		map.setTileSvg(14,4,Objs['Snow'],offset, 8);
		map.addDecorSvg(14,4,Objs['Cave'],offset);
		map.addDecorSvg(15,4,Objs['Rock'],offset);
//		map.addDecorSvg(16,4,Objs['Rock'],offset);
		map.addDecorSvg(15,4,Objs['Sapin'],offset);


		map.setTileSvg(10,6,Objs['Snow'],offset, 2);
		map.setTileSvg(11,6,Objs['Rock'],offset, 14);
		map.addDecorSvg(11,6,Objs['Cave'],offset);
		map.setTileSvg(12,6,Objs['Snow'],offset, 8);
		map.setTileSvg(11,7,Objs['Ladder'],offset, 5);


		map.setTileSvg(8,8,Objs['Snow'],offset, 2);
		map.setTileSvg(9,8,Objs['Rock'],offset, 10);
		map.addDecorSvg(9,8,Objs['Cave'],offset);
		map.setTileSvg(10,8,Objs['Snow'],offset, 10);
		map.setTileSvg(11,8,Objs['Snow'],offset, 11);
		map.addDecorSvg(11,8,Objs['Ladder'],offset);
		map.setTileSvg(12,8,Objs['Snow'],offset, 10);
		map.setTileSvg(13,8,Objs['Snow'],offset, 8);
		map.addDecorSvg(13,8,Objs['Cave'],offset);
		map.setTileSvg(14,8,Objs['Snow'],offset, 8);


		map.setTileSvg(0,5,Objs['Snow'],offset, 2);
		map.addDecorSvg(0,5,Objs['Toilette'],offset);
		map.setTileSvg(1,5,Objs['Snow'],offset, 8);
		map.addDecorSvg(1,5,Objs['Gift'],offset);
		

		map.draw(context.snap);
		player.draw(context.snap);

		let soundBackground = new SoundPlayer('sound/music_christmas_3.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		let soundWin = new SoundPlayer('sound/sound_win.mp3');

		let wind = new SoundPlayer('sound/sound_wind.mp3');


		player.onReachDestination(function(x, y) {

			if(x == 7 && y == 7) {

				player.teleportPlayer(13, 2);

			}

			if(x == 14 && y == 4) {

				player.teleportPlayer(4, 5);

			}

			if(x == 9 && y == 4) {

				player.teleportPlayer(11, 6);

			}

			if(x == 9 && y == 8) {

				player.teleportPlayer(4, 5);

			}

			if(x == 13 && y == 8) {

				player.teleportPlayer(0, 5);

			}

			// Gagné
			
			if(x == 1 && y == 5) {

				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}
			

		});

	}

})