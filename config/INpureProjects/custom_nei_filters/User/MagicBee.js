if (FML.isModLoaded("MagicBees")) {

	// Show only Empty Capsules
	NEI.override("MagicBees:capsule.magic", [0]);
	NEI.override("MagicBees:capsule.void", [0]);
	NEI.override("MagicBees:magnet", [0]);
	
	NEI.hide("MagicBees:hive");
	NEI.hide("MagicBees:comb");
	NEI.hide("MagicBees:wax");
	NEI.hide("MagicBees:propolis");
	NEI.hide("MagicBees:drop");
	NEI.hide("MagicBees:miscResources");
	NEI.hide("MagicBees:pollen");
	NEI.hide("MagicBees:beeNugget");
}
