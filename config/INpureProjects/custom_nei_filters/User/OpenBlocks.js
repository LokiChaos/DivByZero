if (FML.isModLoaded("OpenBlocks")) {

	NEI.override("OpenBlocks:elevator", [0]);
	NEI.override("OpenBlocks:paintcan", [0]);
	NEI.override("OpenBlocks:paintBrush", [0]);
	NEI.override("OpenBlocks:imaginary", [0, 1]);
	NEI.override("OpenBlocks:stencil", [0]);
	NEI.override("OpenBlocks:crayonGlasses", [0]);
	NEI.override("OpenBlocks:tank", [0]);
	NEI.hide("OpenBlocks:grave");
	NEI.hide("OpenBlocks:generic");
}
