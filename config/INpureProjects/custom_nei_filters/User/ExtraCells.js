if (FML.isModLoaded("extracells")) {

	// Hide the billion Fluid Patters and just show the empty one
	NEI.override("extracells:pattern.fluid", [0]);
	NEI.hide("extracells:fluid.item");
}
