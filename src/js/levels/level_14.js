
game.addLevel(14, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} ,
		{name :'paths', url : 'images/paths.svg'}
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(2, 6);

		var objects = context.lib.getSvg('objects');
		var invs = context.lib.getSvg('inventories');
		var paths = context.lib.getSvg('paths');

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
		Objs['Path1'] = paths.select("#Path1");
		

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg ( 0,6,Objs['Ice'],offset);
		map.setTileSvg ( 1,6,Objs['Ice'],offset);
		map.setTileSvg ( 2,6,Objs['Ice'],offset);
		map.setTileSvg ( 3,6,Objs['Snow'],offset);
		map.setTileSvg ( 4,6,Objs['Snow'],offset);
		map.setTileSvg ( 5,6,Objs['Snow'],offset);
		var deco = map.setTileSvg ( 6,6,Objs['Snow'],offset);
		map.setTileSvg ( 7,6,Objs['Ice'],offset);
		map.setTileSvg ( 8,6,Objs['Ice'],offset);
		map.setTileSvg ( 9,6,Objs['Ice'],offset);
		map.setTileSvg (10,6,Objs['Ice'],offset);
		map.setTileSvg (11,6,Objs['Rock3'],offset);
		map.setTileSvg (12,6,Objs['Ice'],offset);
		map.setTileSvg (13,6,Objs['Snow'],offset);
		map.setTileSvg (14,6,Objs['Snow'],offset);
		map.setTileSvg (15,6,Objs['Snow'],offset);

		
		map.addDecorSvg( 3,6,Objs['Snowman'],offset);
		map.addDecorSvg( 5,6,Objs['Sapin'],offset);
		map.addDecorSvg( 8,6,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,6,Objs['Sapin'],offset);
		map.addDecorSvg(10,6,Objs['Sapin3'],offset);
		map.addDecorSvg(10,6,Objs['Sapin2'],offset);

		map.setTileSvg ( 8,3,Objs['Nuage'],offset);
		map.setTileSvg ( 9,3,Objs['Nuage'],offset);
		map.setTileSvg (10,3,Objs['Nuage'],offset);

		map.setTileSvg ( 2,1,Objs['Nuage'],offset);
		map.setTileSvg ( 3,1,Objs['Nuage'],offset);
		map.setTileSvg ( 4,1,Objs['Nuage'],offset);

		let ladderGrp = [];

		ladderGrp[0] = map.addDecorSvg(2,6,Objs['Ladder'],offset);
		ladderGrp[1] = map.setTileSvg (2,5,Objs['Ladder'],offset);
		ladderGrp[2] = map.setTileSvg (2,4,Objs['Ladder'],offset);
		ladderGrp[3] = map.setTileSvg (2,3,Objs['Ladder'],offset);
		ladderGrp[4] = map.setTileSvg (2,2,Objs['Ladder'],offset);
		
		for (var i = ladderGrp.length - 1; i >= 0; i--) {
			ladderGrp[i].invisible();
		}			


		var bulQuestion = map.addDecorSvg(2,4,invs.select("#Bul-Question"), [0, -10]);
		bulQuestion.invisible();
		bulQuestion.show(function(){ setTimeout(function(){ bulQuestion.hide() }, 1000 ) });


		var gift = map.addDecorSvg(14,6,Objs['Gift'],offset);

		map.autoAccess();

		let tile = null;
		tile = map.getTile(2,6);
		tile.setAccessTo('up', false);
		tile = map.getTile(7,6);
		tile.setAccessTo('left', false);

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


		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {

			let tile = null;

			if(x == 4 && y == 1) {
				
				player.stop();
				game.stopInput();

				player.getSvg().drawAtPath( Objs['Path1'], 1000 , {startingTransform : player.getMatrix().toTransformString(), callback: function(){

					player.setPosition(8,3);
					game.startInput();

				}});

			}


			if(x == 5 && y == 6) {

				player.stop();
				tile = map.getTile(5,6);
				tile.setAccessTo('right', false);

				tile = map.getTile(5,8);
				let t = new Snap.Matrix();
				t.translate(0, 50);
				let tr = tile.getTransition();
				deco.getSvg().animate({'transform' : tr.add(t), 'opacity' : 0}, 400, mina.easeout, function(){

					tile = map.getTile(2,6);
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

					
				});
				
			}

			if(x == 10 && y == 3) {

				player.stop();
				game.stopInput();
				player.moveTo(10,6, 800, mina.easeout, function(){game.startInput();});

			}

			// Gagné
			if(x == 14 && y == 6) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})