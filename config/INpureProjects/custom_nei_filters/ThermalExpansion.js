if (FML.isModLoaded("ThermalExpansion") && ThermalExpansion_enabled) {

	// Only show empty florbs
    NEI.override("ThermalExpansion:florb", [0, 1]);

	// Only show light grey rockwool (what you smelt) + random color)
	var color = java.random(7);
	NEI.override("ThermalExpansion:Rockwool", [8, color]);
}
