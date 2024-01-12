
game.addLevel(9, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(4, 8);

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

		var bulQuestion = map.addDecorSvg(4,6,invs.select("#Bul-Question"), [0, -10]);
		bulQuestion.invisible();
		setTimeout(function(){
				bulQuestion.show(function(){ setTimeout(function(){ bulQuestion.hide() }, 1500 ) });
		}, 1000);

		map.setTileSvg (4,8,Objs['Ice'],offset, 2);
		map.setTileSvg (5,8,Objs['Ice'],offset, 10);
		map.setTileSvg (6,8,Objs['Snow'],offset, 10);
		map.setTileSvg (7,8,Objs['Snow'],offset, 10);
		map.setTileSvg (8,8,Objs['Ice'],offset, 10);
		map.setTileSvg (9,8,Objs['Snow'],offset, 10);
		map.setTileSvg (10,8,Objs['Ice'],offset, 8);


		map.addDecorSvg (1,1,Objs['Nuage'],offset);
		map.addDecorSvg (15,0,Objs['Nuage'],offset);

		map.addDecorSvg (2,3,Objs['Nuage'],offset);
		map.addDecorSvg (3,3,Objs['Nuage'],offset);
		map.addDecorSvg (4,3,Objs['Nuage'],offset);

		map.addDecorSvg (10,4,Objs['Nuage'],offset);
		map.addDecorSvg (11,4,Objs['Nuage'],offset);
		map.addDecorSvg (12,4,Objs['Nuage'],offset);

		let ladderGrp = [];

		ladderGrp[0] = map.addDecorSvg(7,8,Objs['Ladder'],offset, 5);
		ladderGrp[1] = map.setTileSvg (7,7,Objs['Ladder'],offset, 5);
		ladderGrp[2] = map.setTileSvg (7,6,Objs['Ladder'],offset, 5);
		ladderGrp[3] = map.setTileSvg (7,5,Objs['Ladder'],offset, 5);
		ladderGrp[4] = map.setTileSvg (7,4,Objs['Ladder'],offset, 5);
		ladderGrp[5] = map.setTileSvg (7,3,Objs['Ladder'],offset, 5);
		ladderGrp[6] = map.setTileSvg (7,2,Objs['Ladder'],offset, 7);
		ladderGrp[7] = map.setTileSvg (7,1,Objs['Ladder'],offset, 4);

		for (var i = ladderGrp.length - 1; i >= 0; i--) {
			ladderGrp[i].invisible();
		}		

		map.addDecorSvg(7,2,Objs['Nuage'],offset);
		map.setTileSvg (8,2,Objs['Nuage'],offset, 10);
		map.setTileSvg (9,2,Objs['Nuage'],offset, 10);
		map.setTileSvg (10,2,Objs['Nuage'],offset, 8);

		map.addDecorSvg(7,5,Objs['Nuage'],offset);

		var gift = map.addDecorSvg(10,2,Objs['Gift'],offset);

		map.draw(context.snap);
		player.draw(context.snap);
		inventories.draw(context.snap);

		let soundBackground = new SoundPlayer('sound/music_christmas_3.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		var soundWin = new SoundPlayer('sound/sound_win.mp3');

		var beep = new SoundPlayer('sound/sound_beep.mp3');

		var iceBrake = new SoundPlayer('sound/sound_ice-brack.mp3');
		var giftFall = false;
		var ladderShow = false;

		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {

			let tile = null;

			if(x == 7 && y == 8) {

				if(!ladderShow){
					player.stop();
					game.stopInput();

					tile = map.getTile(7, 8);
					tile.setAccessTo('up', true);

					var showLadder = function(i){
						if(i < ladderGrp.length){
							ladderGrp[i].show(function(){
								showLadder(i+1);
							});
						}else {
							game.startInput();
						}
					}
					showLadder(0);
					ladderShow = true;
				}


				
			}
			if(x == 9 && y == 2) {

				giftFall = true;
				tile = map.getTile(10, 8);
				let tr = tile.getTransition();
				gift.getSvg().animate({'transform' : tr}, 400, mina.easeout)
			}


			// Gagné
			if(x == 10 && y == 8) {

				if(giftFall){

					soundBackground.stop();
					soundWin.play();
					game.stopInput();
					game.win();

				}


			}



		});


	}

})