
game.addLevel(11, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var map = context.map;
		var player = context.player;
		player.setPosition(0, 6);

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
		Objs['Portail'] = objects.select("#Portail");
		Objs['Interrupteur'] = objects.select("#Interrupteur");

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];


		map.setTileSvg (0,6,Objs['Snow'],offset);
		map.setTileSvg (1,6,Objs['Snow'],offset);
		map.setTileSvg (2,6,Objs['Ice'],offset);
		map.setTileSvg (3,6,Objs['Snow'],offset);
		map.addDecorSvg (3,6,Objs['Ladder'],offset);
		map.setTileSvg (3,5,Objs['Ladder'],offset);


		map.setTileSvg (4,6,Objs['Ice'],offset);

		var boutons = [];

		boutons.push({
			'element': map.addDecorSvg(5,6,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false
		});

		map.setTileSvg (5,6,Objs['Ice'],offset);

		
		map.setTileSvg (0,4,Objs['Snow'],offset);
		map.setTileSvg (1,4,Objs['Snow'],offset);
		map.addDecorSvg(1,4,Objs['Snowman'],offset);
		map.setTileSvg (2,4,Objs['Ice'],offset);
		map.addDecorSvg(3,4,Objs['Sapin'],offset);
		map.addDecorSvg(3,4,Objs['Sapin2'],offset);
		map.setTileSvg (3,4,Objs['Ice'],offset);
		map.setTileSvg (4,4,Objs['Ice'],offset);
		map.addDecorSvg(4,4,Objs['Sapin'],offset);
		map.addDecorSvg(4,4,Objs['Sapin3'],offset);
		map.setTileSvg (5,4,Objs['Ice'],offset);

		boutons.push({
			'element': map.addDecorSvg(0,4,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false
		});

		map.setTileSvg (3,4,Objs['Snow'],offset);


		map.setTileSvg (10,3,Objs['Snow'],offset);
		map.setTileSvg (11,3,Objs['Snow'],offset);
		map.addDecorSvg(11,3,Objs['House'],offset);
		map.setTileSvg (12,3,Objs['Ice'],offset);
		map.setTileSvg (13,3,Objs['Snow'],offset);

		var portail = map.addDecorSvg(5,4,Objs['Portail'],offset);
		portail.select(".Lampe1").attr({fill: "none"});
		portail.select(".Lampe2").attr({display: "none"});
		portail.select(".Lampe3").attr({fill: "none"});
		var hideBar = false;
		

		var gift = map.addDecorSvg(13,3,Objs['Gift'],offset);

		map.autoAccess();

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

			if(x == 5 && y == 6) {

				if(!boutons[0].actif){
					
					boutons[0].actif = true;
					boutons[0].element.attr({fill: "#ff0000"});
					portail.select(".Lampe1").attr({fill: "#ff0000"});

					if(!hideBar){

						hideBar = true;
						for (var i = boutons.length - 1; i >= 0; i--) {
							hideBar = boutons[i].actif && hideBar;
						}
						if(hideBar){
							portail.select(".Barre").animate({opacity: '0'}, 3000, mina.elastic);
						}

					}

				}

			}

			if(x == 0 && y == 4) {

				if(!boutons[1].actif){
					
					boutons[1].actif = true;
					boutons[1].element.attr({fill: "#00ff00"});
					portail.select(".Lampe3").attr({fill: "#00ff00"});

					if(!hideBar){

						hideBar = true;
						for (var i = boutons.length - 1; i >= 0; i--) {
							hideBar = boutons[i].actif && hideBar;
						}
						if(hideBar){
							portail.select(".Barre").animate({opacity: '0'}, 3000, mina.elastic);
						}

					}

				}

			}			

			if(x == 5 && y == 4) {

				if(hideBar){
					player.stop();
					player.teleportPlayer(11, 3);
				}

			}


			// Gagné
			if(x == 13 && y == 3) {


				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})