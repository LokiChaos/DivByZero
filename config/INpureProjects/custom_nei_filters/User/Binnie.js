if (FML.isModLoaded("BinnieCore")) {

	// Hide all but buckets of fluids
	NEI.hide("BinnieCore:containerGlass");
	NEI.hide("BinnieCore:containerCapsule");
	NEI.hide("BinnieCore:containerCan");
	NEI.hide("BinnieCore:containerCylinder");
	NEI.hide("BinnieCore:containerRefractory");

}

if (FML.isModLoaded("Botany")) {

	// Hide Misc - Need to tweak
	NEI.hide("Botany:ceramic");
	NEI.hide("Botany:ceramicBrick");
	NEI.hide("Botany:stained");
	NEI.hide("Botany:ceramicPattern");
	NEI.hide("Botany:clay");
	

	NEI.hide("Botany:seed");
	NEI.hide("Botany:pollen");
	NEI.hide("Botany:pigment");

	// Hide Dummy Item
	NEI.hide("Botany:flower");

}


if (FML.isModLoaded("ExtraBees")) {

	NEI.hide("ExtraBees:ectoplasm");
	NEI.hide("ExtraBees:hive");
	NEI.hide("ExtraBees:honeyComb");
	NEI.hide("ExtraBees:honeyDrop");
	NEI.hide("ExtraBees:misc");
	NEI.hide("ExtraBees:propolis");

}

if (FML.isModLoaded("ExtraTrees")) {

	// Hide - Need to Tweak
	NEI.hide("ExtraTrees:planks");
	NEI.hide("ExtraTrees:fence");
	NEI.hide("ExtraTrees:multifence");
	NEI.hide("ExtraTrees:log");
	NEI.hide("ExtraTrees:gate");
	NEI.hide("ExtraTrees:slab");
	NEI.hide("ExtraTrees:doubleSlab");
	NEI.hide("ExtraTrees:door");
	NEI.hide("ExtraTrees:stairs");
	NEI.hide("ExtraTrees:hedge");
	NEI.hide("ExtraTrees:carpentry");
	NEI.hide("ExtraTrees:panel");
	NEI.hide("ExtraTrees:stainedglass");
	NEI.hide("ExtraTrees:misc");
	NEI.hide("ExtraTrees:food");
	NEI.hide("ExtraTrees:drink");

}

if (FML.isModLoaded("Genetics")) {

	NEI.hide("Genetics:serum");
	NEI.hide("Genetics:serumArray");

}
