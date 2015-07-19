var vanilla_blocks = ["portal", "end_portal", "fire", "water", "lava", "mob_spawner", "end_portal_frame"];
if (vanilla_enabled) {
    for each(block in vanilla_blocks){
        // Vanilla items and blocks have special handlers.
        NEI.hide("minecraft", block);
    }
    NEI.override("minecraft:potion", [0]);

	// Only show pristine anvil
    NEI.override("minecraft:anvil", [0]);
	// Show white + random color of the following
	var color = 1 + java.random(14);
    NEI.override("minecraft:wool", [0, color]);
    NEI.override("minecraft:carpet", [0, color]);
    NEI.override("minecraft:stained_glass", [0, color]);
    NEI.override("minecraft:stained_glass_pane", [0, color]);
    NEI.override("minecraft:stained_hardened_clay", [0, color]);
}
