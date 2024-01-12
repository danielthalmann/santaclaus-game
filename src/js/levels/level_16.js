
game.addLevel(16, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;

		var map = context.map;
		var player = context.player;
		player.setPosition(15, 4);

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


		map.setTileSvg ( 1,3,Objs['Snow'],offset);
		map.addDecorSvg( 1,3,Objs['Toilette'],offset);
		map.setTileSvg ( 2,3,Objs['Snow'],offset);
		map.setTileSvg ( 3,3,Objs['Snow'],offset);
		map.setTileSvg ( 4,3,Objs['Nuage'],offset);
		


		map.setTileSvg ( 9,3,Objs['Snow'],offset);
		map.setTileSvg (10,3,Objs['Snow'],offset);
		map.setTileSvg (11,3,Objs['Snow'],offset);
		map.addDecorSvg(11,3,Objs['Cave'],offset);
		map.setTileSvg (12,3,Objs['Ice'],offset);

		map.setTileSvg ( 0,6,Objs['Snow'],offset);
		map.addDecorSvg( 0,6,Objs['Toilette'],offset);
		map.setTileSvg ( 1,6,Objs['Snow'],offset);
		map.setTileSvg ( 2,6,Objs['Ice'],offset);
		map.setTileSvg ( 3,6,Objs['Ice'],offset);
		map.setTileSvg ( 4,6,Objs['Snow'],offset);
		map.setTileSvg ( 5,6,Objs['Snow'],offset);

		map.setTileSvg ( 6,6,Objs['Snow'],offset);
		map.setTileSvg ( 7,6,Objs['Ice'],offset);

		
		map.setTileSvg (10,6,Objs['Snow'],offset);
		map.setTileSvg (11,6,Objs['Ice'],offset);
		map.setTileSvg (12,6,Objs['Snow'],offset);

		map.setTileSvg ( 5,4,Objs['Nuage'],offset);
		map.setTileSvg ( 6,4,Objs['Ice'],offset);
		map.addDecorSvg( 6,4,Objs['Sapin3'],offset);
		map.setTileSvg ( 7,4,Objs['Ice'],offset);

		map.setTileSvg ( 8,4,Objs['Ice'],offset);
		map.setTileSvg ( 9,4,Objs['Ice'],offset);
		map.addDecorSvg( 9,4,Objs['Ladder'],offset);

		map.setTileSvg (12,4,Objs['Ice'],offset);
		map.addDecorSvg(12,4,Objs['Ladder'],offset);
		map.setTileSvg (13,4,Objs['Ice'],offset);
		map.setTileSvg (14,4,Objs['Ice'],offset);
		map.setTileSvg (15,4,Objs['Ice'],offset);

		map.setTileSvg (10,8,Objs['Ladder'],offset);
		map.setTileSvg (10,7,Objs['Ladder'],offset);

		map.setTileSvg ( 5,8,Objs['Snow'],offset);
		map.setTileSvg ( 6,8,Objs['Ice'],offset);
		map.setTileSvg ( 7,8,Objs['Snow'],offset);
		map.setTileSvg ( 8,8,Objs['Ice'],offset);
		var nuage = map.addDecorSvg ( 8,8,Objs['Nuage'],offset);
		nuage.invisible();
		map.setTileSvg ( 9,8,Objs['Nuage'],offset);
		map.setTileSvg (10,8,Objs['Nuage'],offset);
		map.addDecorSvg(10,8,Objs['Ladder'],offset);
		map.setTileSvg (11,8,Objs['Nuage'],offset);
		map.setTileSvg (12,8,Objs['Nuage'],offset);


		map.addDecorSvg(14,4,Objs['Sapin'],offset);
		map.addDecorSvg(14,4,Objs['Sapin2'],offset);

		map.addDecorSvg(13,4,Objs['Sapin3'],offset);
		map.addDecorSvg(13,4,Objs['Sapin2'],offset);

		map.addDecorSvg(11,3,Objs['Sapin'],offset);
		map.addDecorSvg(11,3,Objs['Sapin3'],offset);
		map.addDecorSvg(11,3,Objs['Sapin2'],offset);

		map.addDecorSvg( 5,6,Objs['Snowman'],offset);
		map.addDecorSvg( 2,6,Objs['Sapin'],offset);
		map.addDecorSvg( 2,6,Objs['Sapin3'],offset);
		map.addDecorSvg( 2,6,Objs['Sapin2'],offset);
		map.addDecorSvg( 3,6,Objs['Sapin'],offset);
		map.addDecorSvg( 3,6,Objs['Sapin3'],offset);
		map.addDecorSvg( 3,6,Objs['Sapin2'],offset);
		map.addDecorSvg( 5,8,Objs['Sapin3'],offset);
		map.addDecorSvg( 6,8,Objs['Sapin3'],offset);
		map.addDecorSvg( 6,8,Objs['Sapin2'],offset);

		let ladderGrp = [];

		ladderGrp[0] = map.setTileSvg (7,7,Objs['Ladder'],offset);
		ladderGrp[1] = map.addDecorSvg(7,8,Objs['Ladder'],offset);
		
		for (var i = ladderGrp.length - 1; i >= 0; i--) {
			ladderGrp[i].invisible();
		}

		var gift = map.addDecorSvg(12,6,Objs['Gift'],offset);

		map.autoAccess();

		tile = map.getTile(7,6);
		tile.setAccessTo('down', false);

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

		var playerFall = false;

		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {


			if(x == 7 && y == 6) {

				tile = map.getTile(7,6);
				tile.setAccessTo('down', true);

				player.stop();
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
			}

			if(x == 4 && y == 3) {

				player.stop();
				player.moveTo(4,6, 700, mina.easeout, function(){game.startInput();});

			}
			if(x == 5 && y == 4) {

				player.stop();
				player.moveTo(5,6, 600, mina.easeout, function(){game.startInput();});

			}
			if(x == 0 && y == 6) {

				player.stop();
				player.teleportPlayer(1, 3);

			}

			if(x == 8 && y == 8) {

				if(!playerFall){
					playerFall = true;
					player.stop();
					game.stopInput();
					tile = map.getTile(8,8);
					let t = new Snap.Matrix();
					t.translate(0, 50);
					tile.hide();
					let tr = tile.getTransition();
					player.getSvg().animate({'transform' : tr.add(t), 'opacity' : 0}, 400, mina.easeout, function(){
						game.startInput();
						player.teleportPlayer(1,3);
					});	

					setTimeout(function(){
						nuage.show();
					}, 5000);
				}
				

			}


			// Gagné
			if(x == 12 && y == 6) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})