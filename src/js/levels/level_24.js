
game.addLevel(24, {

	ressources: [
		{name :'background', url : 'images/background.svg'},
		{name :'objects', url : 'images/objects.svg'},
		{name :'inventories', url : 'images/inventories.svg'} ,
		{name :'traineau', url : 'images/traineau.svg'} ,
		{name :'paths', url : 'images/paths.svg'}
		],

	runLevel: function(context){

		var tile = null;

		var map = context.map;
		var player = context.player;
		player.setPosition(0, 5);

		var objects = context.lib.getSvg('objects');
		var invs = context.lib.getSvg('inventories');
		var traineauLib = context.lib.getSvg('traineau');
		var paths = context.lib.getSvg('paths');
		
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
		Objs['Path2'] = paths.select("#Path2");
		Objs['TextNoel'] = traineauLib.select("#TextNoel").clone();

		context.snap.append(context.lib.getSvg('background'));

		let offset = [-64, -128];

		map.setTileSvg ( 0,5,Objs['Snow'],offset);
		map.setTileSvg ( 1,5,Objs['Snow'],offset);
		map.setTileSvg ( 2,5,Objs['Snow'],offset);
		map.setTileSvg ( 3,5,Objs['Snow'],offset);
		map.setTileSvg ( 4,5,Objs['Snow'],offset);
		map.setTileSvg ( 5,5,Objs['Snow'],offset);
		map.setTileSvg ( 6,5,Objs['Snow'],offset);
		map.setTileSvg ( 7,5,Objs['Snow'],offset);
		map.setTileSvg ( 8,5,Objs['Dirt'],offset);
		map.setTileSvg ( 9,5,Objs['Dirt'],offset);
		map.setTileSvg (10,5,Objs['Dirt'],offset);
		map.setTileSvg (11,5,Objs['Dirt'],offset);


		map.addDecorSvg( 0,6,Objs['BigIce'],offset);
		map.addDecorSvg( 1,6,Objs['BigIce'],offset);
		map.addDecorSvg( 2,6,Objs['BigIce'],offset);
		map.addDecorSvg( 3,6,Objs['BigIce'],offset);
		map.addDecorSvg( 4,6,Objs['BigIce'],offset);
		map.addDecorSvg( 5,6,Objs['BigIce'],offset);
		map.addDecorSvg( 6,6,Objs['BigDirt'],offset);
		map.addDecorSvg( 7,6,Objs['BigDirt'],offset);
		map.addDecorSvg( 8,6,Objs['BigDirt'],offset);
		map.addDecorSvg( 9,6,Objs['HalfRightDirt'],offset);

		map.addDecorSvg( 0,7,Objs['BigIce'],offset);
		map.addDecorSvg( 1,7,Objs['BigIce'],offset);
		map.addDecorSvg( 2,7,Objs['BigIce'],offset);
		map.addDecorSvg( 3,7,Objs['BigIce'],offset);
		map.addDecorSvg( 4,7,Objs['BigIce'],offset);
		map.addDecorSvg( 5,7,Objs['BigDirt'],offset);
		map.addDecorSvg( 6,7,Objs['BigDirt'],offset);
		map.addDecorSvg( 7,7,Objs['BigDirt'],offset);
		map.addDecorSvg( 8,7,Objs['HalfRightDirt'],offset);

		map.addDecorSvg( 0,8,Objs['BigIce'],offset);
		map.addDecorSvg( 1,8,Objs['BigIce'],offset);
		map.addDecorSvg( 2,8,Objs['BigIce'],offset);
		map.addDecorSvg( 3,8,Objs['BigDirt'],offset);
		map.addDecorSvg( 4,8,Objs['BigDirt'],offset);
		map.addDecorSvg( 5,8,Objs['BigDirt'],offset);
		map.addDecorSvg( 6,8,Objs['BigDirt'],offset);
		map.addDecorSvg( 7,8,Objs['HalfRightDirt'],offset);
		
		map.addDecorSvg( 3,5,Objs['Snowman'],offset);
		map.addDecorSvg( 5,5,Objs['Sapin'],offset);
		map.addDecorSvg( 8,5,Objs['Sapin3'],offset);
		map.addDecorSvg( 8,5,Objs['Sapin'],offset);
		map.addDecorSvg(10,5,Objs['Sapin3'],offset);
		map.addDecorSvg(10,5,Objs['Sapin2'],offset);

		map.setTileSvg ( 9,0,Objs['Nuage'],offset);
		map.setTileSvg (10,0,Objs['Nuage'],offset);

		map.setTileSvg ( 3,1,Objs['Nuage'],offset);
		map.setTileSvg ( 4,1,Objs['Nuage'],offset);


		map.autoAccess();


		map.draw(context.snap);
		player.draw(context.snap);

		var traineau = traineauLib.select("#Traineau").clone();
		traineau.select(".PN").attr({ opacity: 0});

		context.snap.append(traineau);
	
		var beep = new SoundPlayer('sound/sound_beep.mp3');

		var iceBrake = new SoundPlayer('sound/sound_ice-brack.mp3');

		let soundBackground = new SoundPlayer('sound/music_christmas_4.mp3');
		soundBackground.setLoop(true)
					   .setvolume(0.2)
					   .play();
		var soundWin = new SoundPlayer('sound/sound_win.mp3');

		player.onMove(function(transPosition, speed_time) {

		});					   

		player.onReachDestination(function(x, y) {

			if(x == 7 && y == 5){

				player.stop();
				player.hide();
				traineau.select(".PN").animate({ opacity: 1}, 600, mina.easeout);

				setTimeout(function() { 
			
					setTimeout(function() { 
						traineau.animate({ opacity: 0}, 2000, mina.easeout);
					}, 3000);

					let transPosition = new Snap.Matrix();
					
					let traineauBBox = traineau.getBBox();

					transPosition.translate(traineauBBox.x / 2,traineauBBox.y / 2);

					traineau.drawAtPath( Objs['Path2'], 5000, {startingTransform : transPosition.toTransformString(), callback: function(){

						//
						// c'est la fin
						//
						context.snap.append(Objs['TextNoel']);
						let m = new Snap.Matrix();
						m.translate(0, -150);
						Objs['TextNoel'].transform(m);

			
						let paths = Objs['TextNoel'].selectAll('path');
			
						 Objs['TextNoel'].attr({
							  fill:"red",
						  	 "fill-opacity": 0,
						 });
			
	
						for (var i = paths.length - 1; i >= 0; i--) {
							
							var myPathA = paths[i];
			
							var len = myPathA.getTotalLength();
						
							// SVG1 - Animate Path
							myPathA.attr({
								  stroke: '#fff',
								  strokeWidth: 2,
							    // Animate Path
							    "stroke-dasharray": len + ' ' + len,
							    "stroke-dashoffset":len
							  }).animate({"stroke-dashoffset": 0, stroke: '#000'}, 5500, mina.easeinout, function(){
							  	Objs['TextNoel'].animate({"fill-opacity": "1"}, 4500, mina.easeinout);
							  });		
						}

						setTimeout(function() { 

							player.show();
							soundBackground.stop();
							game.stopInput();
							game.win();

						}, 13000);

										
					}});
				
				}, 1000);

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