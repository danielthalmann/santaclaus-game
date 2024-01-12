
game.addLevel(23, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} 
		],

	runLevel: function(context){

		var tile = null;

		var map = context.map;
		var player = context.player;
		player.setPosition(2, 7);

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
		Objs['BigSapin'] = objects.select("#BigSapin");

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg ( 0,7,Objs['Ice'],offset);
		map.setTileSvg ( 1,7,Objs['Ice'],offset);
		map.setTileSvg ( 2,7,Objs['Ice'],offset);

		map.setTileSvg ( 5,6,Objs['Snow'],offset);
		map.setTileSvg ( 6,6,Objs['Snow'],offset);
		map.setTileSvg ( 7,6,Objs['Ice'],offset);

		map.setTileSvg (10,7,Objs['Dirt'],offset);
		map.setTileSvg (11,7,Objs['Dirt'],offset);
		map.setTileSvg (12,7,Objs['Ice'],offset);
		map.setTileSvg (13,7,Objs['Ice'],offset);


		map.setTileSvg ( 0,6,Objs['Ice'],offset);
		map.addDecorSvg( 0,7,Objs['Ladder'],offset);

		map.addDecorSvg(13,7,Objs['Ladder'],offset);
		map.setTileSvg (13,6,Objs['Ice'],offset);

		let bs = map.addDecorSvg (6,6,Objs['BigSapin'],[-60, -176]);


		map.addDecorSvg(10,7,Objs['Sapin3'],offset);
		map.addDecorSvg(10,7,Objs['Sapin2'],offset);

		map.setTileSvg ( 7,2,Objs['Nuage'],offset);
		map.setTileSvg ( 8,2,Objs['Nuage'],offset);
		map.setTileSvg ( 9,2,Objs['Nuage'],offset);
		map.setTileSvg (10,2,Objs['Nuage'],offset);
		map.setTileSvg (11,2,Objs['Nuage'],offset);

		map.setTileSvg ( 1,3,Objs['Nuage'],offset);
		map.setTileSvg ( 2,3,Objs['Nuage'],offset);

		map.setTileSvg ( 2,8,Objs['Ice'],offset);
		map.setTileSvg ( 3,8,Objs['Snow'],offset);
		map.setTileSvg ( 4,8,Objs['Snow'],offset);
		map.setTileSvg ( 5,8,Objs['Snow'],offset);
		map.setTileSvg ( 6,8,Objs['Snow'],offset);
		map.setTileSvg ( 7,8,Objs['Ice'],offset);
		map.setTileSvg ( 8,8,Objs['Ice'],offset);
		map.setTileSvg ( 9,8,Objs['Ice'],offset);
		map.setTileSvg (10,8,Objs['Ice'],offset);

		map.addDecorSvg( 2,8,Objs['Ladder'],offset);
		map.addDecorSvg(10,8,Objs['Ladder'],offset);
	

		map.addDecorSvg( 6,8,Objs['Ladder'],offset);
		map.setTileSvg ( 6,7,Objs['Ladder'],offset);

		var boutons = [];

		boutons.push({
			'element': map.addDecorSvg(0,6,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#ff0000"
		});

		boutons.push({
			'element': map.addDecorSvg(13,6,Objs['Interrupteur'],offset).select(".Bouton").attr({fill: "none"}),
			'actif' : false,
			'color' : "#ff0000"
		});


		var gift = map.addDecorSvg(7,2,Objs['Gift'],offset);

		map.autoAccess();

		map.draw(context.snap);
		player.draw(context.snap);
		inventories.draw(context.snap);

		let soundBackground = new SoundPlayer('sound/music_mon-beau-sapin-musique-noel.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		var soundWin = new SoundPlayer('sound/sound_win.mp3');

		var beep = new SoundPlayer('sound/sound_beep.mp3');

		var iceBrake = new SoundPlayer('sound/sound_ice-brack.mp3');


		var paths = bs.getSvg().selectAll('.Girlandes path');
		var circles = bs.getSvg().selectAll('circle');

		var animatePathA = function(i){
			let len = paths[i].getTotalLength();

			paths[i].attr({"stroke-dashoffset":len / 2}).animate({"stroke-dashoffset": 0, stroke: 'yellow'}, 4000, mina.easeinout, function(){
			  	animatePathB(i);
			  });			
		}

		var animatePathB = function(i){
			let len = paths[i].getTotalLength();

			paths[i].attr({"stroke-dashoffset":0}).animate({"stroke-dashoffset": len / 2, stroke: 'red'}, 4000, mina.easeinout, function(){
			  	animatePathA(i);
			  });			
		}

		for (var i = paths.length - 1; i >= 0; i--) {
			
			var len = paths[i].getTotalLength();

			 paths[i].attr({
				  stroke: 'none',
			  });

		}

		var colors = ['red', 'purple', 'blue', 'yellow', 'yellow', 'green'];

		var animateCircle = function(){

			var randomCircle = [];
			var i;
			var colori;
			
			for (var y = 2; y >= 0; y--) {

				if(randomCircle.length == 0){
					i = getRandomArbitrary(0, circles.length-1);
				}else {
					var existsI = true;
					while(existsI){
						
						i = getRandomArbitrary(0, circles.length-1);
						existsI = false;
						for (var z = randomCircle.length - 1; z >= 0; z--) {
							if(randomCircle[z] == i){
								existsI = true;
								break;
							}
						}						
					}
				}

				randomCircle.push(i);

			}

			for (var y = randomCircle.length-1; y >= 0; y--) {

				var colori = getRandomArbitrary(0, colors.length-1);

				circles[randomCircle[y]].animate({fill: colors[colori]}, 1000);
			}


			setTimeout(animateCircle, 1100);
		}

		for (var i = circles.length - 1; i >= 0; i--) {
			circles[i].originfill = circles[i].attr('fill');
			circles[i].attr('fill', 'none');
		}

		var activeButtons = function(bti){

			if(!boutons[bti].actif){

				beep.play();

				boutons[bti].actif = true;
				boutons[bti].element.attr({fill: boutons[bti].color, stroke: boutons[bti].color});

				if(bti == 1){
				
					for (var i = paths.length - 1; i >= 0; i--) {
						
						var len = paths[i].getTotalLength();
						 paths[i].attr({
							  stroke: 'red',
							  strokeWidth: 2,
						    // Animate Path
						    "stroke-dasharray": '10 4',
						    "stroke-dashoffset":len
						  });
						animatePathA(i);
					}
				}

				if(bti == 0){

					for (var i = circles.length - 1; i >= 0; i--) {
						circles[i].originfill = circles[i].attr('fill');
						circles[i].attr('fill', 'red');
					}
					animateCircle();

				}

				if(boutons[0].actif && boutons[1].actif){
					gift.moveTo(7,6,1000,mina.easeout);
				}
			}

		}

		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {

			
			if(x == 0 && y == 6) {

				activeButtons(0);
			}			
			
			if(x == 13 && y == 6) {

				activeButtons(1);
			}

			// Gagné
			if(x == 7 && y == 6) {
				if(boutons[0].actif && boutons[1].actif){

					player.stop();
					soundBackground.stop();
					soundWin.play();
					game.stopInput();
					game.win();
				}

			}



		});


	}

})

function getRandomArbitrary(min, max) {
	return parseInt(Math.random() * (max - min) + min);
}