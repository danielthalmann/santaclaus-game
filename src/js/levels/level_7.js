
game.addLevel(7, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(5, 7);

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
		Objs['Rock2'] = objects.select("#Rock2");
		Objs['Snowman'] = objects.select("#Snowman");
		Objs['Toilette'] = objects.select("#Toilette");


		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];


		map.setTileSvg (1,5,Objs['Snow'],offset, 2);
		map.setTileSvg (2,5,Objs['Snow'],offset, 10);
		map.setTileSvg (3,5,Objs['Snow'],offset, 10);
		map.addDecorSvg(3,5,Objs['Snowman'],offset);
		map.setTileSvg (4,5,Objs['Snow'],offset, 10);
		map.setTileSvg (5,5,Objs['Snow'],offset, 10);
		map.setTileSvg (6,5,Objs['Snow'],offset, 10);
		map.setTileSvg (7,5,Objs['Snow'],offset, 11);
		map.setTileSvg (8,5,Objs['Snow'],offset, 10);
		map.setTileSvg (9,5,Objs['Snow'],offset, 10);
		map.setTileSvg (10,5,Objs['Snow'],offset, 8);
		let rockbreak = map.setTileSvg (11,5,Objs['Rock'],offset, 10);
		rockbreak.invisible();
		map.setTileSvg (12,5,Objs['Snow'],offset, 8);

		map.setTileSvg(1,6,Objs['Ladder'],offset, 5);

		map.setTileSvg (1,7,Objs['Snow'],offset, 3);
		map.addDecorSvg(1,7,Objs['Ladder'],offset);
		map.setTileSvg (2,7,Objs['Snow'],offset, 10);
		map.setTileSvg (3,7,Objs['Snow'],offset, 10);
		map.setTileSvg (4,7,Objs['Snow'],offset, 10);
		map.setTileSvg (5,7,Objs['Snow'],offset, 8);



		map.addDecorSvg(2,7,Objs['Sapin3'],offset);
		map.addDecorSvg(2,7,Objs['Sapin2'],offset);

		map.addDecorSvg(3,7,Objs['Sapin'],offset);
		map.addDecorSvg(3,7,Objs['Sapin2'],offset);

		map.addDecorSvg(4,7,Objs['Sapin'],offset);
		map.addDecorSvg(4,7,Objs['Sapin2'],offset);


		map.addDecorSvg(7,5,Objs['Ladder'],offset, 5);
		map.setTileSvg (7,4,Objs['Ladder'],offset, 5);
		map.setTileSvg (7,3,Objs['Ladder'],offset, 5);

		map.setTileSvg (7,2,Objs['Snow'],offset, 6);
		map.setTileSvg (8,2,Objs['Ice'],offset, 10);
		map.setTileSvg (9,2,Objs['Snow'],offset, 10);
		map.setTileSvg (10,2,Objs['Snow'],offset, 8);

		let rock = map.addDecorSvg(9,2,Objs['Rock2'],offset);

		map.addDecorSvg(5,5,Objs['Sapin'],offset);
		map.addDecorSvg(5,5,Objs['Sapin3'],offset);
		map.addDecorSvg(5,5,Objs['Sapin2'],offset);

		map.addDecorSvg(8,2,Objs['Sapin'],offset);
		map.addDecorSvg(8,2,Objs['Sapin3'],offset);
		map.addDecorSvg(8,2,Objs['Sapin2'],offset);
		map.addDecorSvg(10,2,Objs['Sapin'],offset);
		map.addDecorSvg(10,2,Objs['Sapin2'],offset);
		map.addDecorSvg(10,2,Objs['Sapin3'],offset);

		
		var gift = map.addDecorSvg(12,5,Objs['Gift'],offset);

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
		var soundWin = new SoundPlayer('sound/sound_win.mp3');


		let pushRock = false;

		player.onMove(function(transPosition, speed_time) {
			
			if(pushRock){
				let t = new Snap.Matrix();
				t.translate(64, 0);
				rock.getSvg().animate({'transform' : transPosition.add(t)}, speed_time, mina.linear);
			}

		});					   

		player.onReachDestination(function(x, y) {

			let tile = null;

			if(x == 8 && y == 2) {

				player.stop();
				pushRock = !pushRock;

			}

			if(x == 10  && y == 2) {

				pushRock = false;

				tile = map.getTile(11,5);

				let t = new Snap.Matrix();
				t.translate(0, 50);

				let tr = tile.getTransition();
				rock.getSvg().animate({'transform' : tr.add(t)}, 400, mina.easeout, function(){

					rock.hide();
					rockbreak.show();
					tile = map.getTile(10,5);
					tile.setAccessTo('right', true);

				});


			}

			// Gagné
			if(x == 12 && y == 5) {


				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})