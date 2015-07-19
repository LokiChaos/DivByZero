if (FML.isModLoaded("GardenTrees")) {

	// Hide All but Oak Post and Fence
	NEI.override("GardenTrees:thin_log", [0]);
	NEI.override("GardenTrees:thin_log_fence", [0]);
}


if (FML.isModLoaded("GardenCore")) {

	// Hide Useless Used kits
	NEI.hide("GardenCore:soil_test_kit_used");
}

if (FML.isModLoaded("GardenContainers")) {


	var color = java.random(15);
	NEI.override("GardenContainers:wood_window_box", [0]);
	NEI.override("GardenContainers:stone_window_box", [0]);
	NEI.override("GardenContainers:large_pot_colored", [color]);
	NEI.override("GardenContainers:medium_pot_colored", [color]);

}
