
game.addLevel(17, {

	ressources: [
		{name :'background-night', url : 'images/background-night.svg'},
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;
		var playerOnNuage = false;

		var map = context.map;
		var player = context.player;
		player.setPosition(2, 8);

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
		Objs['Lune'] = objects.select("#Lune");
		Objs['Void'] = objects.select("#Void");
		

		context.snap.append(context.lib.getSvg('background-night'));

		let offset = [-64, -128];

		map.setTileSvg ( 0,8,Objs['Ice'],offset);
		map.setTileSvg ( 1,8,Objs['Ice'],offset);
		map.setTileSvg ( 2,8,Objs['Ice'],offset);
		map.setTileSvg ( 3,8,Objs['Snow'],offset);
		map.setTileSvg ( 4,8,Objs['Snow'],offset);
		map.setTileSvg ( 5,8,Objs['Snow'],offset);
		map.setTileSvg ( 6,8,Objs['Snow'],offset);
		map.setTileSvg ( 7,8,Objs['Ice'],offset);
		map.setTileSvg ( 8,8,Objs['Ice'],offset);
		map.setTileSvg ( 9,8,Objs['Ice'],offset);
		map.setTileSvg (10,8,Objs['Ice'],offset);
		map.setTileSvg (11,8,Objs['Snow'],offset);
		map.setTileSvg (12,8,Objs['Ice'],offset);
		map.setTileSvg (13,8,Objs['Snow'],offset);
		map.setTileSvg (14,8,Objs['Snow'],offset);
		map.setTileSvg (15,8,Objs['Snow'],offset);


		map.setTileSvg (13,2,Objs['Lune'],offset);

		map.addDecorSvg( 2,8,Objs['Sapin3'],offset);
		map.addDecorSvg( 2,8,Objs['Sapin2'],offset);
		
		map.addDecorSvg( 6,8,Objs['Snowman'],offset);
		map.addDecorSvg( 5,8,Objs['Sapin'],offset);
		map.addDecorSvg( 9,8,Objs['Sapin3'],offset);
		map.addDecorSvg( 9,8,Objs['Sapin'],offset);
		map.addDecorSvg(10,8,Objs['Sapin3'],offset);
		map.addDecorSvg(10,8,Objs['Sapin2'],offset);

		map.setTileSvg ( 5,4,Objs['Nuage'],offset);
		map.setTileSvg ( 6,4,Objs['Nuage'],offset);

		map.setTileSvg ( 7,4,Objs['Void'],offset);
		map.setTileSvg (10,4,Objs['Void'],offset);

		var nuage = map.addDecorSvg (10,4,Objs['Nuage'],offset);
		map.setTileSvg (11,4,Objs['Nuage'],offset);
		map.setTileSvg (12,4,Objs['Nuage'],offset);
		map.setTileSvg (13,4,Objs['Nuage'],offset);

		map.setTileSvg ( 3,1,Objs['Nuage'],offset);
		map.setTileSvg ( 4,1,Objs['Nuage'],offset);
		map.setTileSvg ( 5,1,Objs['Nuage'],offset);

		var NuageMoveToLeft = function() {

			setTimeout(function(){

				var t;
				t = map.getTile(6,4);
				t.setAccessTo('right', false);

				t = map.getTile(11,4);
				t.setAccessTo('left', false);

				nuage.moveTo(7,4,1000,mina.easeout,function(){

					t = map.getTile(6,4);
					t.setAccessTo('right', true);

					NuageMoveToRight();
				});
				

			},2000);

		}
		var NuageMoveToRight = function() {

			setTimeout(function(){
				
				var t;
				t = map.getTile(6,4);
				t.setAccessTo('right', false);

				t = map.getTile(11,4);
				t.setAccessTo('left', false);

				nuage.moveTo(10,4,1000,mina.easeout,function(){

					t = map.getTile(11,4);
					t.setAccessTo('left', true);

					NuageMoveToLeft();
				});
				
			},2000);

		}

		NuageMoveToLeft();


		let ladderGrp = [];

		ladderGrp[0] = map.addDecorSvg(3,8,Objs['Ladder'],offset);
		ladderGrp[1] = map.setTileSvg (3,7,Objs['Ladder'],offset);
		ladderGrp[2] = map.setTileSvg (3,6,Objs['Ladder'],offset);
		ladderGrp[3] = map.setTileSvg (3,5,Objs['Ladder'],offset);
		ladderGrp[4] = map.setTileSvg (3,4,Objs['Ladder'],offset);
		ladderGrp[5] = map.setTileSvg (3,3,Objs['Ladder'],offset);
		ladderGrp[6] = map.setTileSvg (3,2,Objs['Ladder'],offset);

		for (var i = ladderGrp.length - 1; i >= 0; i--) {
			ladderGrp[i].invisible();
		}

		let ladderGrp2 = [];

		ladderGrp2[0] = map.addDecorSvg(13,4,Objs['Ladder'],offset);
		ladderGrp2[1] = map.setTileSvg (13,3,Objs['Ladder'],offset);

		for (var i = ladderGrp2.length - 1; i >= 0; i--) {
			ladderGrp2[i].invisible();
		}

		var gift = map.addDecorSvg(13,2,Objs['Gift'],offset);

		map.autoAccess();

		tile = map.getTile(3,8);
		tile.setAccessTo('up', false);
		tile = map.getTile(6,4);
		tile.setAccessTo('right', false);
		tile = map.getTile(11,4);
		tile.setAccessTo('left', false);
		tile = map.getTile(13,4);
		tile.setAccessTo('up', false);



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


		nuage.onMove(function(transPosition, speed_time, specifiedMina, _x, _y) {

			if(playerOnNuage){
				game.stopInput();
				player.getSvg().animate({'transform' : transPosition}, speed_time, specifiedMina, function(){
					console.log(speed_time, _x, _y);
					player.moveTo(_x,_y);
					game.startInput();

				});
			}

		});					   

		player.onReachDestination(function(x, y) {

			if(x == 7 && y == 4 || x == 10 && y == 4) {

				playerOnNuage = true;

			}
			if(x == 6 && y == 4 || x == 11 && y == 4) {

				playerOnNuage = false;

			}

			if(x == 5 && y == 1) {

				player.stop();
				game.stopInput();
				tile = map.getTile(5,4);
				let tr = tile.getTransition();
				player.getSvg().animate({'transform' : tr}, 400, mina.easeout, function(){
					game.startInput();
					player.moveTo(5,4);
				});	

			}

			if(x == 13 && y == 8) {

				game.stopInput();
				tile = map.getTile(3,8);
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

			}


			if(x == 13 && y == 4) {

				//game.stopInput();
				tile = map.getTile(13,4);
				tile.setAccessTo('up', true);

				var showLadder = function(i){
					if(i < ladderGrp2.length){
						ladderGrp2[i].show(function(){
							showLadder(i+1);
						});
					}else {
						game.startInput();
					}
				}
				showLadder(0);

			}			

			// Gagné
			if(x == 13 && y == 2) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})