if (FML.isModLoaded("RedLogic")) {
	// Select color randomly
	var color = java.random(15);
	// Show one example button of each color
	NEI.override("RedLogic:redlogic.button", [0 + color, 16 + color, 32 + color, 48 + color, 256 + color, 272 + color, 288 + color, 304 + color]);
	
	// Just Show one color of each lamp type
	NEI.override("RedLogic:redlogic.lampCubeIndicatorOff", [color]);
	NEI.override("RedLogic:redlogic.lampCubeDecorative", [color]);
	NEI.override("RedLogic:redlogic.lampCubeOff", [color]);
	// This has 6 sub-types
	NEI.override("RedLogic:redlogic.lampNonCube", [64 + color, 80 + color, 96 + color, 128 + color, 144 + color, 160 + color ]);

	// Hide the "On" psudo blocks - they instantly revert to the off on placement and are uncraftable
	NEI.hide("RedLogic:redlogic.lampCubeIndicatorOn");
	NEI.hide("RedLogic:redlogic.lampCubeOn");
}

