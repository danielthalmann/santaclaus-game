
game.addLevel(1, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'ice', url : 'images/ice2.svg'},
		{name :'sapin', url : 'images/sapin.svg'},
		{name :'objects', url : 'images/objects.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(1, 4);

		var objects = context.lib.getSvg('objects');

		console.log(objects);


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
		Objs['Snowman'] = objects.select("#Snowman");
		Objs['Toilette'] = objects.select("#Toilette");


		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg(1,2,Objs['Snow'],offset, 4);

		map.setTileSvg(1,3,Objs['Ladder'],offset, 5);
		map.setTileSvg(10,3,Objs['Snow'],offset, 10);
		map.setTileSvg(11,3,Objs['Ice'],offset, 10);

		map.setTileSvg(0,4,Objs['Ice'],offset, 2);
		map.setTileSvg(1,4,Objs['Ice'],offset, 11);
		map.setTileSvg(2,4,Objs['Ice'],offset, 10);
		map.setTileSvg(3,4,Objs['Ice'],offset, 10);
		map.setTileSvg(4,4,Objs['Snow'],offset, 12);

		map.setTileSvg(4,5,Objs['Ladder'],offset, 5);

		map.setTileSvg(4,6,Objs['Snow'],offset, 3);
		map.setTileSvg(5,6,Objs['Snow'],offset, 10);
		map.setTileSvg(6,6,Objs['Snow'],offset, 10);
		map.setTileSvg(7,6,Objs['Snow'],offset, 8);

		map.addDecorSvg(1,2,Objs['Sapin'],offset);

		map.addDecorSvg(10,3,Objs['Sapin'],offset);
		map.addDecorSvg(11,3,Objs['Sapin'],offset);

		map.addDecorSvg(1,4,Objs['Ladder'],offset);

		map.addDecorSvg(0,4,Objs['Snowman'],offset);
		map.addDecorSvg(3,4,Objs['Sapin'],offset);

		map.addDecorSvg(4,6,Objs['Ladder'],offset);
		map.addDecorSvg(7,6,Objs['Gift'],offset);


/*
		var gift = new SvgMapElement(map, 3, 2);
		gift.setSvg(Objs[6]);
		gift.setOffset(offset[0], offset[1]);
*/

		map.draw(context.snap);
		console.log('player');
		player.draw(context.snap);

		let soundBackground = new SoundPlayer('sound/music_christmas.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		let soundWin = new SoundPlayer('sound/sound_win.mp3');

//		let wind = new SoundPlayer('sound/sound_wind.mp3');
//		wind.setLoop(true)
//				   .play();

		player.onReachDestination(function(x, y) {

			// Gagné
			if(x == 7 && y == 6) {

				soundBackground.stop();
//				wind.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}

		});


	}

})