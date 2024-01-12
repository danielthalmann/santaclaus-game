
game.addLevel(5, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(8, 7);

		var objects = context.lib.getSvg('objects');
		var invs = context.lib.getSvg('inventories');


		console.log(objects);


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
		Objs['Snowman'] = objects.select("#Snowman");
		Objs['Toilette'] = objects.select("#Toilette");


		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];


		map.setTileSvg (1,7,Objs['Snow'],offset, 2);
		map.setTileSvg (2,7,Objs['Snow'],offset, 10);
		map.setTileSvg (3,7,Objs['Snow'],offset, 10);
		map.setTileSvg (4,7,Objs['Snow'],offset, 10);
		map.setTileSvg (5,7,Objs['Snow'],offset, 10);
		map.setTileSvg (6,7,Objs['Snow'],offset, 10);
		map.setTileSvg (7,7,Objs['Snow'],offset, 10);
		map.setTileSvg (8,7,Objs['Ice'],offset, 10);
		map.setTileSvg (9,7,Objs['Snow'],offset, 11);
		map.setTileSvg (10,7,Objs['Snow'],offset, 10);
		map.setTileSvg (11,7,Objs['Snow'],offset, 10);
		map.setTileSvg (12,7,Objs['Snow'],offset, 10);
		map.setTileSvg (13,7,Objs['Snow'],offset, 10);
		map.setTileSvg (14,7,Objs['Snow'],offset, 8);

		map.addDecorSvg(2,7,Objs['Sapin3'],offset);
		map.addDecorSvg(2,7,Objs['Sapin2'],offset);

		map.addDecorSvg(3,7,Objs['Sapin'],offset);
		map.addDecorSvg(3,7,Objs['Sapin2'],offset);

		map.addDecorSvg(4,7,Objs['Sapin'],offset);
		map.addDecorSvg(4,7,Objs['Sapin2'],offset);

		map.addDecorSvg(6,7,Objs['Sapin'],offset);
		map.addDecorSvg(6,7,Objs['Sapin2'],offset);

		map.addDecorSvg(10,7,Objs['Sapin'],offset);
		map.addDecorSvg(10,7,Objs['Sapin3'],offset);
		map.addDecorSvg(10,7,Objs['Sapin2'],offset);

		map.addDecorSvg(11,7,Objs['Sapin'],offset);
		map.addDecorSvg(11,7,Objs['Sapin2'],offset);
		map.addDecorSvg(11,7,Objs['Sapin3'],offset);

		map.addDecorSvg(13,7,Objs['Sapin'],offset);
		map.addDecorSvg(14,7,Objs['Sapin'],offset);

		let ladderGrp1 = [];
		let ladderGrp2 = [];
		let ladderGrp3 = [];

		ladderGrp1[0] = map.addDecorSvg(1,7,Objs['Ladder'],offset, 5);
		ladderGrp1[1] = map.setTileSvg (1,6,Objs['Ladder'],offset, 5);
		ladderGrp1[2] = map.setTileSvg (1,5,Objs['Ladder'],offset, 5);
		ladderGrp1[3] = map.setTileSvg (1,4,Objs['Ladder'],offset, 5);
		ladderGrp1[4] = map.setTileSvg (0,3,Objs['Snow'],offset, 2);
		ladderGrp1[5] = map.setTileSvg (1,3,Objs['Snow'],offset, 14);
		ladderGrp1[6] = map.setTileSvg (2,3,Objs['Snow'],offset, 10);
		ladderGrp1[7] = map.setTileSvg (3,3,Objs['Snow'],offset, 8);
		ladderGrp1[8] = map.addDecorSvg(1,3,Objs['Sapin'],offset);
		ladderGrp1[9] = map.addDecorSvg(1,3,Objs['Sapin2'],offset);
		ladderGrp1[10] = map.addDecorSvg(2,3,Objs['Sapin3'],offset);


		ladderGrp2[0] = map.addDecorSvg(5,7,Objs['Ladder'],offset, 5);
		ladderGrp2[1] = map.setTileSvg (5,6,Objs['Ladder'],offset, 5);
		ladderGrp2[2] = map.setTileSvg (5,5,Objs['Ladder'],offset, 5);
		ladderGrp2[3] = map.setTileSvg (4,4,Objs['Snow'],offset, 2);
		ladderGrp2[4] = map.setTileSvg (5,4,Objs['Ice'],offset, 14);
		ladderGrp2[5] = map.setTileSvg (6,4,Objs['Ice'],offset, 10);
		ladderGrp2[6] = map.setTileSvg (7,4,Objs['Snow'],offset, 8);
		ladderGrp2[7] = map.addDecorSvg(4,4,Objs['Sapin'],offset);
		ladderGrp2[8] = map.addDecorSvg(6,4,Objs['Sapin3'],offset);
		ladderGrp2[9] = map.addDecorSvg(6,4,Objs['Sapin2'],offset);
		ladderGrp2[10] = map.addDecorSvg(6,4,Objs['Sapin'],offset);
		ladderGrp2[11] = map.addDecorSvg(7,4,Objs['Sapin2'],offset);
		ladderGrp2[12] = map.addDecorSvg(7,4,Objs['Sapin3'],offset);


		map.addDecorSvg(9,7,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,6,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,5,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,4,Objs['Ladder'],offset, 5);
		map.setTileSvg (9,3,Objs['Ladder'],offset, 5);


		ladderGrp3[0] = map.addDecorSvg(12,7,Objs['Ladder'],offset, 5);
		ladderGrp3[1] = map.setTileSvg (12,6,Objs['Ladder'],offset, 5);
		ladderGrp3[2] = map.setTileSvg (12,5,Objs['Ladder'],offset, 5);
		ladderGrp3[3] = map.setTileSvg (12,4,Objs['Ladder'],offset, 5);
		ladderGrp3[4] = map.setTileSvg (12,3,Objs['Ladder'],offset, 5);
		ladderGrp3[5] = map.setTileSvg (12,2,Objs['Ladder'],offset, 5);
		ladderGrp3[6] = map.setTileSvg (12,1,Objs['Snow'],offset, 6);
		ladderGrp3[7] = map.setTileSvg (13,1,Objs['Ice'],offset, 10);
		ladderGrp3[8] = map.setTileSvg (14,1,Objs['Ice'],offset, 10);
		ladderGrp3[9] = map.setTileSvg (15,1,Objs['Snow'],offset, 8);


		for (var i = ladderGrp1.length - 1; i >= 0; i--) {
			ladderGrp1[i].invisible();
		}
		for (var i = ladderGrp2.length - 1; i >= 0; i--) {
			ladderGrp2[i].invisible();
		}
		for (var i = ladderGrp3.length - 1; i >= 0; i--) {
			ladderGrp3[i].invisible();
		}

		map.setTileSvg (7,2,Objs['Snow'],offset, 2);
		map.setTileSvg (8,2,Objs['Ice'],offset, 10);
		map.setTileSvg (9,2,Objs['Snow'],offset, 14);
		map.setTileSvg (10,2,Objs['Snow'],offset, 8);

		map.addDecorSvg(8,2,Objs['Sapin'],offset);
		map.addDecorSvg(8,2,Objs['Sapin3'],offset);
		map.addDecorSvg(8,2,Objs['Sapin2'],offset);
		map.addDecorSvg(10,2,Objs['Sapin'],offset);
		map.addDecorSvg(10,2,Objs['Sapin2'],offset);
		map.addDecorSvg(10,2,Objs['Sapin3'],offset);		

		var gift = map.addDecorSvg(14,1,Objs['Gift'],offset);
		gift.invisible();

		let allpass = [];
		allpass[0] = false;
		allpass[1] = false;
		allpass[2] = false;
		allpass[3] = false;
		let passed = false;


		var bulpick = map.addDecorSvg(8,5,invs.select("#Bul-Gift"), [0, -10]);
		bulpick.invisible();

/*
		var gift = new SvgMapElement(map, 3, 2);
		gift.setSvg(Objs[6]);
		gift.setOffset(offset[0], offset[1]);
*/

		map.draw(context.snap);
		console.log('player');
		player.draw(context.snap);

		bulpick.show(function(){ setTimeout(function(){ bulpick.hide() }, 3000 ) });

		let soundBackground = new SoundPlayer('sound/music_christmas.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();

		var soundWin = new SoundPlayer('sound/sound_win.mp3');					   

		player.onReachDestination(function(x, y) {

			if(x == 1 && y == 7) {

				let t = map.getTile(1, 7);
				t.setAccessTo('up', true);

				for (var i = ladderGrp1.length - 1; i >= 0; i--) {
					ladderGrp1[i].show();
				}

			}

			if(x == 5 && y == 7) {

				let t = map.getTile(5, 7);
				t.setAccessTo('up', true);

				for (var i = ladderGrp2.length - 1; i >= 0; i--) {
					ladderGrp2[i].show();
				}

			}


			if(x == 12 && y == 7) {

				let t = map.getTile(12, 7);
				t.setAccessTo('up', true);

				for (var i = ladderGrp3.length - 1; i >= 0; i--) {
					ladderGrp3[i].show();
				}

				allpass[3] = true;

				passed = true;
				for (var i = allpass.length - 1; i >= 0; i--) {
					passed = passed && allpass[i];
				}

				if (passed)	{	
					gift.show();
				}				

			}


			if(x == 1 && y == 3) {

				allpass[0] = true;

				passed = true;
				for (var i = allpass.length - 1; i >= 0; i--) {
					passed = passed && allpass[i];
				}

				if (passed)	{	
					gift.show();
				}
			}

			if(x == 5 && y == 4) {

				allpass[1] = true;

				passed = true;
				for (var i = allpass.length - 1; i >= 0; i--) {
					passed = passed && allpass[i];
				}

				if (passed)	{	
					gift.show();
				}
			}

			if(x == 9 && y == 2) {

				allpass[2] = true;

				passed = true;
				for (var i = allpass.length - 1; i >= 0; i--) {
					passed = passed && allpass[i];
				}

				if (passed)	{	
					gift.show();
				}
			}


			// Gagné
			if(x == 14 && y == 1) {

				passed = true;
				for (var i = allpass.length - 1; i >= 0; i--) {
					passed = passed && allpass[i];
				}

				if (passed)	{
					soundBackground.stop();
					soundWin.play();
					game.stopInput();
					game.win();
				}

			}



		});


	}

})