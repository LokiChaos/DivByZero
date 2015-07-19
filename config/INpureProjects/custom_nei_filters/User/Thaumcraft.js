if (FML.isModLoaded("Thaumcraft")) {

	// Show only white and one random color or candles
	var color = 1 + java.random(14);
	NEI.override("Thaumcraft:blockCandle", [0, color]);

	// Hide Psudo-blocks
	NEI.hide("Thaumcraft:blockArcaneDoor");
	NEI.hide("Thaumcraft:blockMagicBox");
	NEI.hide("Thaumcraft:blockAlchemyFurnace");
	NEI.hide("Thaumcraft:blockManaPod");
	NEI.hide("Thaumcraft:blockArcaneFurnace");
	NEI.hide("Thaumcraft:blockWarded");
	NEI.hide("Thaumcraft:blockHole");
	NEI.hide("Thaumcraft:blockPortalEldritch");
	NEI.hide("Thaumcraft:blockEldritchNothing");
	NEI.hide("Thaumcraft:blockLootUrn");
	NEI.hide("Thaumcraft:blockLootCrate");
	NEI.hide("Thaumcraft:ItemLootBag");
	NEI.hide("Thaumcraft:ItemWispEssence");

	// Hide Items/Blocks Disabled by modtweaker
	NEI.hide("Thaumcraft:ItemGolemPlacer");
	NEI.hide("Thaumcraft:ItemGolemCore");
	NEI.hide("Thaumcraft:ItemGolemUpgrade");
	NEI.hide("Thaumcraft:GolemBell");
	NEI.hide("Thaumcraft:ItemGolemDecoration");
	NEI.hide("Thaumcraft:blockChestHungry");
	NEI.hide("Thaumcraft:TrunkSpawner");
	NEI.hide("Thaumcraft:HandMirror");
	NEI.hide("Thaumcraft:ItemNugget");
	NEI.hide("Thaumcraft:HoverHarness");
	NEI.hide("Thaumcraft:ItemGirdleHover");
	// Hide Golem Fetter
	NEI.override("Thaumcraft:blockCosmeticSolid", [0,1,2,3,4,5,6,7,8,11,12,14,15] );
	// Hide Arcane Bore and Base
	NEI.override("Thaumcraft:blockWoodenDevice" , [0,1,2,6,7,8]);
	// Hide Disabled Mirrors
	NEI.hide("Thaumcraft:blockMirror");
}
