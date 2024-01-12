
game.addLevel(21, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;
		var playerOnNuage = false;
		var playerFall = false;

		var map = context.map;
		var player = context.player;
		player.setPosition(14, 2);

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

		var dirtBricks = [];

		map.setTileSvg ( 0,2,Objs['Ice'],offset);
		map.setTileSvg ( 1,2,Objs['Ice'],offset);
		map.setTileSvg (15,2,Objs['Dirt'],offset);
		dirtBricks.push( map.setTileSvg (14,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg (13,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg (12,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg (11,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg (10,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg ( 9,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg ( 8,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg ( 7,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg ( 6,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg ( 5,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg ( 4,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg ( 3,2,Objs['Dirt'],offset) );
		dirtBricks.push( map.setTileSvg ( 2,2,Objs['Dirt'],offset) );

		var rock = map.setTileSvg ( 14,0,Objs['Rock2'],offset);
		rock.invisible();

		var dirtBrickHide = function(i){
			if(i < dirtBricks.length){

				let pos = dirtBricks[i].getPosition();
				let playerPos = player.getPosition();

				dirtBricks[i].moveTo(pos[0],pos[1] + 2,500, mina.easeout, function(){
					dirtBrickHide(i+1);
				});
				dirtBricks[i].hide();
				dirtBricks[i].setAccessTo('right', false);

				if(i == dirtBricks.length-1){
					rock.moveTo(pos[0],pos[1] + 2,500, mina.easeout);
				}

				if(playerPos[0] == pos[0] && playerPos[1] == pos[1]){
					
					player.stop();
					player.moveTo(pos[0],pos[1] + 2, 500,mina.easeout);
					player.hide();
					playerFall = true;
				}
				
			}else {
				if(playerFall){
					reLive();
				}
			}
		}

		var reLive = function(){

			playerFall = false;
			for (var i = dirtBricks.length - 1; i >= 0; i--) {
				let pos = dirtBricks[i].getPosition();
				dirtBricks[i].setAccessTo('right', true);
				dirtBricks[i].moveTo(pos[0], 2, 5);
				dirtBricks[i].show();
			}

			rock.moveTo(14, 0, 5, mina.easeout);

			player.moveTo(14, 2, 5);
			player.show();

		}

		
		map.setTileSvg ( 0,5,Objs['Ice'],offset);
		map.addDecorSvg( 0,5,Objs['Ladder'],offset);
		map.setTileSvg ( 1,5,Objs['Ice'],offset);
		map.setTileSvg ( 2,5,Objs['Ice'],offset);

		map.setTileSvg ( 0,3,Objs['Ladder'],offset);
		map.setTileSvg ( 0,4,Objs['Ladder'],offset);


		map.setTileSvg ( 9,5,Objs['Ice'],offset);
		map.setTileSvg (10,5,Objs['Ice'],offset);
		map.setTileSvg (11,5,Objs['Dirt'],offset);
		map.setTileSvg (12,5,Objs['Ice'],offset);
		map.setTileSvg (13,5,Objs['Ice'],offset);
		map.setTileSvg (13,6,Objs['Ladder'],offset);
		map.addDecorSvg(13,7,Objs['Ladder'],offset);



		map.setTileSvg ( 4,7,Objs['Snow'],offset);
		map.setTileSvg ( 5,7,Objs['Snow'],offset);
		map.setTileSvg ( 6,7,Objs['Snow'],offset);

		map.setTileSvg ( 8,7,Objs['Ice'],offset);
		map.setTileSvg ( 9,7,Objs['Ice'],offset);
		map.setTileSvg (10,7,Objs['Ice'],offset);

		map.setTileSvg (12,7,Objs['Ice'],offset);
		map.setTileSvg (13,7,Objs['Snow'],offset);
		map.setTileSvg (14,7,Objs['Snow'],offset);
		map.setTileSvg (15,7,Objs['Snow'],offset);


		map.setTileSvg ( 6,8,Objs['Ice'],offset);
		map.addDecorSvg( 6,8,Objs['Ladder'],offset);
		map.setTileSvg ( 7,8,Objs['Ice'],offset);
		map.setTileSvg ( 8,8,Objs['Ice'],offset);
		map.setTileSvg ( 9,8,Objs['Ice'],offset);
		map.setTileSvg (10,8,Objs['Ice'],offset);
		map.setTileSvg (11,8,Objs['Ice'],offset);
		map.setTileSvg (12,8,Objs['Ice'],offset);
		map.addDecorSvg(12,8,Objs['Ladder'],offset);

		
		map.addDecorSvg( 5,7,Objs['Sapin'],offset);
		map.addDecorSvg( 8,7,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,7,Objs['Sapin'],offset);
		map.addDecorSvg(10,7,Objs['Sapin3'],offset);
		map.addDecorSvg(10,7,Objs['Sapin2'],offset);

		map.addDecorSvg( 1,2,Objs['Sapin3'],offset);
		map.addDecorSvg( 1,2,Objs['Sapin2'],offset);

		map.addDecorSvg( 1,5,Objs['Sapin'],offset);

		map.setTileSvg ( 9,0,Objs['Nuage'],offset);
		map.setTileSvg (10,0,Objs['Nuage'],offset);

		map.setTileSvg ( 3,0,Objs['Nuage'],offset);
		map.setTileSvg ( 4,0,Objs['Nuage'],offset);
		map.setTileSvg ( 5,0,Objs['Nuage'],offset);

		map.addDecorSvg(14,3,Objs['BigDirt'],offset);
		map.addDecorSvg(15,3,Objs['BigDirt'],offset);
		map.addDecorSvg(15,4,Objs['BigDirt'],offset);
		map.addDecorSvg(15,5,Objs['BigDirt'],offset);
		map.addDecorSvg(15,6,Objs['BigDirt'],offset);

		map.addDecorSvg(14,8,Objs['BigIce'],offset);
		map.addDecorSvg(15,8,Objs['BigIce'],offset);

		map.addDecorSvg(12,5,Objs['Snowman'],offset);

		var brick = map.addDecorSvg (8,5,Objs['Dirt'],offset);

		var brickMoveToLeft = function() {

			setTimeout(function(){

				var t;
				t = map.getTile(2,5);
				t.setAccessTo('right', false);

				t = map.getTile(9,5);
				t.setAccessTo('left', false);

				brick.moveTo(3,5,1500,mina.easeout,function(){

					t = map.getTile(2,5);
					t.setAccessTo('right', true);

					brickMoveToRight();
				});
				

			},2000);

		}
		var brickMoveToRight = function() {

			setTimeout(function(){
				
				var t;
				t = map.getTile(2,5);
				t.setAccessTo('right', false);

				t = map.getTile(9,5);
				t.setAccessTo('left', false);

				brick.moveTo(8,5,1500,mina.easeout,function(){

					t = map.getTile(9,5);
					t.setAccessTo('left', true);

					brickMoveToLeft();
				});
				
			},2000);

		}

		brickMoveToLeft();

		var gift = map.addDecorSvg(4,7,Objs['Gift'],offset);

		map.autoAccess();

		tile = map.getTile(1,2);
		tile.setAccessTo('right', false);

		tile = map.getTile(10,8);
		tile.setAccessTo('up', false);
		tile = map.getTile(9,8);
		tile.setAccessTo('up', false);
		tile = map.getTile(8,8);
		tile.setAccessTo('up', false);

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

		var explosion = new SoundPlayer('sound/sound_explosion.mp3');

		brick.onMove(function(transPosition, speed_time, specifiedMina, _x, _y) {
			
			if(playerOnNuage){
				game.stopInput();
				player.getSvg().animate({'transform' : transPosition}, speed_time, specifiedMina, function(){

					player.moveTo(_x,_y);
					game.startInput();

				});
			}

		});					   

		player.onReachDestination(function(x, y) {

			if(x == 6 && y == 2 || x == 4 && y == 2) {
				
				player.stop();

			}
			
			if((x == 3 && y == 5) || (x == 8 && y == 5)) {
				
				playerOnNuage = true;

			}
			if(x == 2 && y == 5 || x == 9 && y == 5) {

				playerOnNuage = false;

			}			


			if(x == 11 && y == 2) {
				
				player.stop();


				rock.show();
				rock.moveTo(14,2,1000, mina.easeout, function(){

					explosion.play();

					setTimeout(function(){
					
						rock.moveTo(2,2,6500,mina.linear,function(){
							rock.hide();
						});
												
						dirtBrickHide(0);

					}, 400);

				});

			}

			// Gagné
			if(x == 4 && y == 7) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}


		});


	}

})