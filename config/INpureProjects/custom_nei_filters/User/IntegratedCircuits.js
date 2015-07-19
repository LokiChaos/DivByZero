if (FML.isModLoaded("integratedcircuits")) {

	// Hide the billion Fluid Patters and just show the empty one
	NEI.override("integratedcircuits:integratedcircuits_7segment", [0]);
	NEI.override("integratedcircuits:integratedcircuits_7segment_fmp", [0]);
}
