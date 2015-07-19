if (FML.isModLoaded("appliedenergistics2") && AE2_enabled) {
	// Only Show One Facade Material
    NEI.override(AE2.getFacadeItem(), [java.random(AE2.getNumberOfTypes())]);

	// Hide Internal Dummy Blocks
	NEI.hide("appliedenergistics2:tile.BlockCableBus")
	NEI.hide("appliedenergistics2:tile.BlockMatrixFrame")
	NEI.hide("appliedenergistics2:tile.BlockPaint")
}
