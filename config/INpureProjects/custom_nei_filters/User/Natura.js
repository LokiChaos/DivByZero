if (FML.isModLoaded("Natura")) {

	// Show only one natura wood to remind user they can craft these
	NEI.override("Natura:Natura.workbench", [0]);
	NEI.override("Natura:Natura.bookshelf", [0]);
	NEI.override("Natura:Natura.fence", [0]);

	// Hide dummy door items
	NEI.hide("Natura:door.*");

	// Should already know how to make planks, stairs, pressure plates, buttons, fence gates, and sticks
	NEI.hide("Natura:plankSlab1");
	NEI.hide("Natura:plankSlab2");
	NEI.hide("Natura:stair.*");
	NEI.hide("Natura:pressureplate.*");
	NEI.hide("Natura:trapdoor.*");
	NEI.hide("Natura:button.*");
	NEI.hide("Natura:fenceGate.*");
	NEI.hide("Natura:natura.stick");

	// Hide now useless Natura wood tools	
	NEI.hide("Natura:natura.pickaxe.*");
	NEI.hide("Natura:natura.shovel.*");
	NEI.hide("Natura:natura.axe.*");
}

