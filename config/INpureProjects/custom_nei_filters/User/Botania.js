if (FML.isModLoaded("Botania")) {

	NEI.override("Botania:miniIsland", [0]);
	NEI.override("Botania:manaBeacon", [0]);
	NEI.override("Botania:unstableBlock", [0]);
	// NEI.override("Botania:signalFlare", [0]);
	NEI.override("Botania:dye", [0]);
	NEI.override("Botania:manaPetal", [0]);
	NEI.override("Botania:petal", [0]);
	// NEI.override("Botania:twigWand", [0]);
	// NEI.override("Botania:terraPick", [0]);
	NEI.hide("Botania:*Slab*");
	NEI.hide("Botania:quartzType*");
	NEI.hide("Botania:*Stairs*");
	NEI.hide("Botania:buriedPetals");
	NEI.hide("Botania:manaFlame");
	NEI.hide("Botania:bifrost");
	NEI.hide("Botania:solidVine");
}
