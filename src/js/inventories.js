"use strict";

var Inventories = function(map) {

	var inventories = [];
	var inventories_index = 0;

	this.addInventory = function(name, _svg){

		inventories_index++;

		let element = new SvgMapElement(map, inventories_index, 8);
		element.setSvg(_svg);

		inventories.push({
			'name' : name,
			'element' : element,
			'has' : false
		});


	}

	this.hasInventory = function(name){

		for (var i = inventories.length - 1; i >= 0; i--) {
			let inventory = inventories[i];

			if(inventory.name == name){

				return inventory.has;

			}

		};

		return false;

	}

	this.takeInventory = function(name){

		inventories.forEach(function(inventory) {

			if(inventory.name == name){

				if(!inventory.has){

					console.log('show');
					inventory.element.show();		
					inventory.has = true;

				}

			}
		});

	}

	this.leaveInventory = function(name){

		inventories.forEach(function(inventory) {

			if(inventory.name == name){

				if(inventory.has){

					console.log('show');
					inventory.element.hide();		
					inventory.has = false;

				}

			}
		});

	}


	this.draw = function(canvas){
		
		
		inventories.forEach(function(inventory) {

			inventory.element.draw(canvas);
			inventory.element.invisible();

		});
	
		return this;

	}
	
}