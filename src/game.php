<?php
include('vendor/autoload.php');

$scripts = [
		"js/keyboard.js",
		"js/mouseinput.js",
		"js/soundplayer.js",
		"js/astar.js",
		"js/svglib.js",
		"js/svgmapelement.js",
		"js/svgtile.js",
		"js/svgmap.js",
		"js/svgplayer.js",
		"js/inventories.js",
		"js/game.js",
		"photos/gameimages.js",
	];

$output = '';

for ($i=1; $i < 25; $i++) { 
	array_push($scripts, 'js/levels/level_' . $i . '.js');
}

foreach ($scripts as $script) {

	$output .= file_get_contents($script) . "\n";
//	if(file_exists($script)){
//		$output .= \JShrink\Minifier::minify(file_get_contents($script)) . "\n";
//	}
}

echo $output;
