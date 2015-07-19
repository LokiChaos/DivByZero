if (FML.isModLoaded("MineFactoryReloaded") && MFR_enabled) {
	// Show only one color
	var color = java.random(15);
    NEI.override("MineFactoryReloaded:stainedglass.block", [color]);
    NEI.override("MineFactoryReloaded:stainedglass.pane", [color]);
    NEI.override("MineFactoryReloaded:ceramicdye", [color]);

	// Show uncolored (16) and a random colored one only
    NEI.override("MineFactoryReloaded:conveyor", [16, color]);

	// Hide the Sacred Saplings
	NEI.override("MineFactoryReloaded:rubberwood.sapling", [0]);

	// Hide Debugger (rednet.meter:2)
	NEI.override("MineFactoryReloaded:rednet.meter", [0, 1]);
}
