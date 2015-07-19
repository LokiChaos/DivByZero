function Hide_Custom(domain) {
	NEI.override(domain, [0]);
	NEI.hide(domain);
}

if (FML.isModLoaded("TConstruct") && Tcon_enabled) {

	// Only Show White Wool Slab
	NEI.override("TConstruct:WoolSlab1", [0]);
	NEI.hide("TConstruct:WoolSlab2");

	NEI.override("TConstruct:GlassBlock.StainedClear", [0]);
	NEI.override("TConstruct:GlassPaneClearStained", [0]);


	// Only Show Oak Variants
	NEI.override("TConstruct:ToolStationBlock", [0, 1, 5, 10]);
	// Only Show Iron Block Variant
	NEI.override("TConstruct:ToolForgeBlock", [0]);
	
	//Hide Dummy/Internal Items
	NEI.hide("TConstruct:HeldItemBlock");
	NEI.hide("TConstruct:BattleSignBlock");

	// Hide Complete Tools
	NEI.hide("TConstruct:pickaxe");
	NEI.hide("TConstruct:shovel");
	NEI.hide("TConstruct:hatchet");
	NEI.hide("TConstruct:broadsword");
	NEI.hide("TConstruct:longsword");
	NEI.hide("TConstruct:rapier");
	NEI.hide("TConstruct:dagger");
	NEI.hide("TConstruct:cutlass");
	NEI.hide("TConstruct:frypan");
	NEI.hide("TConstruct:battlesign");
	NEI.hide("TConstruct:mattock");
	NEI.hide("TConstruct:chisel");
	NEI.hide("TConstruct:lumberaxe");
	NEI.hide("TConstruct:cleaver");
	NEI.hide("TConstruct:scythe");
	NEI.hide("TConstruct:excavator");
	NEI.hide("TConstruct:hammer");
	NEI.hide("TConstruct:battleaxe");
	NEI.hide("TConstruct:shortbow");
	NEI.hide("TConstruct:arrow");
	NEI.hide("TConstruct:BoltAmmo");
	NEI.hide("TConstruct:Crossbow");
	NEI.hide("TConstruct:ThrowingKnife");
	NEI.hide("TConstruct:Shuriken");
	NEI.hide("TConstruct:Javelin");
	NEI.hide("TConstruct:ArrowAmmo");
	NEI.hide("TConstruct:LongBow");
	NEI.hide("TConstruct:ShortBow");
//	NEI.hide("");
	
//	NEI.hide("TConstruct:creativeModifier");

}
