// Microblocks always require special handling.
if (FML.isModLoaded("ExtraUtilities") && ExtraUtilities_enabled) {

	// Hide Broken Watering Can
	NEI.override("ExtraUtilities:watering_can", [0, 1, 3])
    // Show only empty barrels
    NEI.override("ExtraUtilities:drum", [0, 1]);
    // Show only one (random) color of each type
    var color = java.random(15);
    NEI.override("ExtraUtilities:colorStoneBrick", [color]);
    NEI.override("ExtraUtilities:colorWoodPlanks", [color]);
    NEI.override("ExtraUtilities:color_lightgem", [color]);
    NEI.override("ExtraUtilities:color_stone", [color]);
    NEI.override("ExtraUtilities:color_quartzBlock", [color]);
    NEI.override("ExtraUtilities:color_hellsand", [color]);
    NEI.override("ExtraUtilities:color_redstoneLight", [color]);
    NEI.override("ExtraUtilities:color_brick", [color]);
    NEI.override("ExtraUtilities:color_stonebrick", [color]);
    NEI.override("ExtraUtilities:color_blockLapis", [color]);
    NEI.override("ExtraUtilities:color_obsidian", [color]);
    NEI.override("ExtraUtilities:color_blockRedstone", [color]);
    NEI.override("ExtraUtilities:color_blockCoal", [color]);
    NEI.override("ExtraUtilities:greenscreen", [color]);


    if (FML.isModLoaded("ForgeMicroblock")) {

        // Special handler for cleanly removing them.
        ExtraUtilities.obliterate_microblocks([1, 2, 3], ForgeMicroblock.getRandomMaterial());
    }
}
