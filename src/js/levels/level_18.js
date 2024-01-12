
game.addLevel(18, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;

		var map = context.map;
		var player = context.player;
		player.setPosition(9, 8);

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
		

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg ( 1,5,Objs['Snow'],offset);
		map.setTileSvg ( 2,5,Objs['Snow'],offset);
		map.setTileSvg ( 3,5,Objs['Snow'],offset);
		map.setTileSvg ( 4,5,Objs['Snow'],offset);
		map.setTileSvg ( 5,5,Objs['Snow'],offset);
		map.setTileSvg ( 6,5,Objs['Snow'],offset);
		map.setTileSvg ( 7,5,Objs['Snow'],offset);
		map.setTileSvg ( 8,5,Objs['Snow'],offset);
		map.setTileSvg ( 9,5,Objs['Snow'],offset);
		map.setTileSvg (10,5,Objs['Snow'],offset);
		
		map.addDecorSvg(12,8,Objs['Rock2'],offset);
		
		
		map.setTileSvg (12,5,Objs['Snow'],offset);
		map.setTileSvg (13,5,Objs['Snow'],offset);

		map.setTileSvg ( 1,6,Objs['Ladder'],offset);
		map.setTileSvg ( 1,7,Objs['Ladder'],offset);
		map.addDecorSvg( 1,8,Objs['Ladder'],offset);

		map.setTileSvg ( 1,8,Objs['Snow'],offset);
		map.setTileSvg ( 2,8,Objs['Snow'],offset);
		map.setTileSvg ( 3,8,Objs['Snow'],offset);
		map.setTileSvg ( 4,8,Objs['Snow'],offset);
		map.setTileSvg ( 5,8,Objs['Snow'],offset);
		map.setTileSvg ( 6,8,Objs['Snow'],offset);
		map.setTileSvg ( 7,8,Objs['Snow'],offset);
		map.setTileSvg ( 8,8,Objs['Snow'],offset);
		map.setTileSvg ( 9,8,Objs['Snow'],offset);
		map.setTileSvg (10,8,Objs['Snow'],offset);
		map.setTileSvg (11,8,Objs['Snow'],offset);
		map.setTileSvg (12,8,Objs['Snow'],offset);
		map.setTileSvg (13,8,Objs['Snow'],offset);


		map.addDecorSvg( 2,8,Objs['Sapin3'],offset);
		map.addDecorSvg( 2,8,Objs['Sapin2'],offset);
		map.addDecorSvg( 3,8,Objs['Sapin'],offset);
		map.addDecorSvg( 3,8,Objs['Sapin2'],offset);
		map.addDecorSvg( 4,8,Objs['Sapin'],offset);
		map.addDecorSvg( 4,8,Objs['Sapin2'],offset);
		map.addDecorSvg( 8,8,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,8,Objs['Sapin2'],offset);


		map.addDecorSvg( 7,5,Objs['Ladder'],offset);
		map.setTileSvg ( 7,4,Objs['Ladder'],offset);
		map.setTileSvg ( 7,3,Objs['Ladder'],offset);

		map.setTileSvg ( 5,2,Objs['Snow'],offset);
		map.setTileSvg ( 6,2,Objs['Snow'],offset);
		map.setTileSvg ( 7,2,Objs['Snow'],offset);
		map.setTileSvg ( 8,2,Objs['Ice'],offset);

		
		map.addDecorSvg( 5,5,Objs['Sapin'],offset);
		map.addDecorSvg( 5,5,Objs['Sapin3'],offset);
		map.addDecorSvg( 5,5,Objs['Sapin2'],offset);

		map.addDecorSvg( 6,8,Objs['Snowman'],offset);

		map.addDecorSvg( 8,2,Objs['Sapin'],offset);
		map.addDecorSvg( 8,2,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,2,Objs['Sapin2'],offset);
		map.addDecorSvg( 8,5,Objs['Sapin'],offset);
		map.addDecorSvg( 8,5,Objs['Sapin2'],offset);
		map.addDecorSvg( 8,5,Objs['Sapin3'],offset);

		var portail = map.addDecorSvg(10,5,Objs['Portail'],offset);
		portail.select(".Lampe1").attr({fill: "none"});
		portail.select(".Lampe2").attr({fill: "none"});
		portail.select(".Lampe3").attr({fill: "none"});
		var hideBar = false;

		var portail2 = map.addDecorSvg(13,5,Objs['Portail'],offset);
		portail2.select(".Lampe1").attr({display: "none"});
		portail2.select(".Lampe2").attr({display: "none"});
		portail2.select(".Lampe3").attr({display: "none"});
		portail2.select(".Barre").attr({display: "none"});

		var boutons = [];

		map.addDecorSvg( 7,8,Objs['Ladder'],offset);
		map.addDecorSvg( 3,5,Objs['Ladder'],offset);
		map.addDecorSvg( 5,2,Objs['Ladder'],offset);

		map.setTileSvg ( 7,7,Objs['Rock3'],offset);
		map.setTileSvg ( 3,4,Objs['Rock3'],offset);
		map.setTileSvg ( 5,1,Objs['Rock3'],offset);

		boutons.push({
			'element': map.addDecorSvg(7,7,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#ff0000"
		});

		boutons.push({
			'element': map.addDecorSvg(3,4,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#00ff00"
		});

		boutons.push({
			'element': map.addDecorSvg(5,1,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,

			'color' : "#ffff00"
		});

		var gift = map.addDecorSvg(12,5,Objs['Gift'],offset);

		map.autoAccess();

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

		var error = new SoundPlayer('sound/sound_jump.mp3');

		player.onMove(function(transPosition, speed_time) {

		});

		var activeButtons = function(bti){

			beep.play();

			boutons[bti].actif = true;
			boutons[bti].element.attr({fill: boutons[bti].color, stroke: boutons[bti].color});
			portail.select(".Lampe" + (bti + 1)).attr({fill: boutons[bti].color});

			if(boutons[0].actif && boutons[1].actif && boutons[2].actif){
				portail.select(".Barre").attr({display: "none"});
			}

		}

		var clearButtons = function(){
			
			error.play();

			for (var i = boutons.length - 1; i >= 0; i--) {
				boutons[i].actif = false;
				boutons[i].element.attr({fill: "none", stroke: "#000000"});
			}
			for (var i = 1; i < 4; i++) {
				portail.select(".Lampe" + i).attr({fill: "none"});
			}
		}

		player.onReachDestination(function(x, y) {

			if(x == 7 && y == 7) {

				if(boutons[1].actif && !boutons[2].actif){
					activeButtons(0);
				}else {
					clearButtons();
				}

			}
			if(x == 3 && y == 4) {
		
				if(!boutons[0].actif && !boutons[2].actif){
					activeButtons(1);
				}else {
					clearButtons();
				}

			}

			if(x == 5 && y == 1) {
		
				if(boutons[0].actif && boutons[1].actif){
					activeButtons(2);
				}else {
					clearButtons();
				}

			}	

			if(x == 10 && y == 5) {

				if(boutons[0].actif && boutons[1].actif && boutons[2].actif){
					player.teleportPlayer(13,5);
				}

			}

			// Gagné
			if(x == 12 && y == 5) {

				player.stop();
				soundBackground.stop();
				soundWin.play();
				game.stopInput();
				game.win();

			}



		});


	}

})