if (FML.isModLoaded("Backpack")) {
	// Only Show Uncolored and one example color of each backpack
	// Hide all Mid-Tier Backpack (100's)
	// Show Ender Backpack 31999
	var color = java.random(15)
	NEI.override("Backpack:backpack", [0, 1 + color, 200, 201 + color, 31999]);
}

