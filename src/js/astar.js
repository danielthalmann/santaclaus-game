"use strict";


function Astar(){


	var map = null;

	this.setMap = function(_map) {

		map = _map;

	}

	this.getPath = function(startNode, endNode) {

		var openList = [];
		var closeList = [];

		openList.push(startNode);

		while(openList.length > 0) {

			// console.log(openList.length);

			// Grab the lowest f(x) to process next
			var lowInd = 0;
			for(var i=0; i<openList.length; i++) {
				if(openList[i].f < openList[lowInd].f) { lowInd = i; }
			}
			var currentNode = openList[lowInd];

			// End case -- result has been found, return the traced path
			if(currentNode.isEq(endNode)) {
				var curr = currentNode;
				var ret = [];
				while(curr.parent) {
					ret.push(curr.tile);
					curr = curr.parent;
				}
				return ret.reverse();
			}
		

			// Normal case -- move currentNode from open to closed, process each of its neighbors
			var spliceIndex = openList.indexOf(currentNode);
			if (spliceIndex > -1) {

				openList.splice(spliceIndex, 1);
				// console.log('splice', openList.length);
			}
			currentNode.closed = true;
			closeList.push(currentNode);


			var neighbors = this.getNeighbors(currentNode);
			// console.log('neighbors', neighbors);

			for(var i=0; i < neighbors.length; i++) {

				var neighbor = neighbors[i];

				// console.log(neighbor);
				for(var y = 0; y < closeList.length; y++) {
					
					if(closeList[y].isEq(neighbor)) { 
						neighbor.closed = true; 
						y = closeList.length;
					}

				}

				if(neighbor.closed) {

					// console.log('neighbor.closed');

					// Ce noeud a déjà été traité
					continue;

				}
				
				// g score is the shortest distance from start to current node, we need to check if
				//   the path we have arrived at this neighbor is the shortest one we have seen yet
				var gScore = currentNode.g + 1; // 1 is the distance from a node to it's neighbor
				var gScoreIsBest = false;

				// console.log('indexOf Neighbors new', openList.indexOf(neighbor));

				if(openList.indexOf(neighbor) == -1) {
					// console.log('getNeighbors new', neighbor);

					// This the the first time we have arrived at this node, it must be the best
					// Also, we need to take the h (heuristic) score since we haven't done so yet

					gScoreIsBest = true;
					neighbor.h = neighbor.heuristic(endNode);
					openList.push(neighbor);

				}

				else if(gScore < neighbor.g) {

					// We have already seen the node, but last time it had a worse g (distance from start)
					gScoreIsBest = true;
				
				}

				if(gScoreIsBest) {

					// Found an optimal (so far) path to this node.   Store info on how we got here and
					//  just how good it really is...
					neighbor.parent = currentNode;
					neighbor.g = gScore;
					neighbor.f = neighbor.g + neighbor.h;
					neighbor.debug = "F: " + neighbor.f + "<br />G: " + neighbor.g + "<br />H: " + neighbor.h;

				}

			}

		}

		return [];


	}

	this.getNeighbors = function(node) {



		var xy = node.tile.getPosition();

		var x = xy[0];
		var y = xy[1];

		var ret = [];

		if(node.tile.hasAccessTo('left')) {
			ret.push(new AstarNode( map.getTile(x-1, y) ) );
		}
		if(node.tile.hasAccessTo('right')) {
			ret.push(new AstarNode( map.getTile(x+1, y) ) );
		}
		if(node.tile.hasAccessTo('up')) {
			ret.push(new AstarNode( map.getTile(x, y-1) ) );
		}
		if(node.tile.hasAccessTo('down')) {
			ret.push(new AstarNode( map.getTile(x, y+1) ) );
		}

		return ret;
	}

}



function AstarNode(_tile) {

	var xy = _tile.getPosition();

	this.x = xy[0];
	this.y = xy[1];
	this.g = 1; // distance jusqu'au point de départ
	this.h = 1; // distance estimée jusqu'au point d'arrivé
	this.tile = _tile;
	this.parent = null; // noeud parent le plus cours pour retourner au départ
	this.closed = false;
	this.debug = '';

	this.heuristic = function(toNode) {

		// This is the Manhattan distance
		var d1 = Math.abs (toNode.x - this.x);
		var d2 = Math.abs (toNode.y - this.y);
		return d1 + d2;

	}

	this.isEq = function(aNode){

		if(this.x == aNode.x && this.y == aNode.y){
			return true;
		} else {
			return false
		}

	}

}


