if (FML.isModLoaded("NodalMechanics")) {

	// Only Show unattued Node
	NEI.override("NodalMechanics:item.nodalmechanics.matrix", [0]);
}

