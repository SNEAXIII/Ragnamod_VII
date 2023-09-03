onEvent('recipes', e => {

    //Ignis
    e.custom({
        "type": "summoningrituals:altar",
        "catalyst": { "item": "ragnamod_seven:ignis_soul" },
        "outputs": [
            { "mob": "cataclysm:ignis" }
        ],
        "inputs": [
            { "item": "tconstruct:ichor_congealed_slime" },
            { "item": "minecraft:gold_block" },
            { "item": "minecraft:nether_bricks" },
            { "item": "minecraft:netherrack" },
            { "item": "rootsclassic:charged_runic_focus" }
        ],
        "sacrifices": {
            "mobs": [{ "mob": "minecraft:sheep" }],
            "region": { "x": 3, "y": 3, "z": 3 }
        },
        "recipe_time": 200,
        "block_below": { "block": "minecraft:magma_block" }
    })
    //Netherite Monstrosity
    e.custom({
        "type": "summoningrituals:altar",
        "catalyst": { "item": "ragnamod_seven:netherite_monstrosity_soul" },
        "outputs": [
            { "mob": "cataclysm:netherite_monstrosity" }
        ],
        "inputs": [
            { "item": "minecraft:redstone_block" },
            { "item": "minecraft:netherite_block" },
            { "item": "minecraft:blackstone" },
            { "item": "minecraft:basalt" },
            { "item": "rootsclassic:charged_runic_focus" }
        ],
        "sacrifices": {
            "mobs": [{ "mob": "minecraft:sheep" }],
            "region": { "x": 3, "y": 3, "z": 3 }
        },
        "recipe_time": 200,
        "block_below": { "block": "minecraft:magma_block" }
    })

    //Ender Golem
    e.custom({
        "type": "summoningrituals:altar",
        "catalyst": { "item": "ragnamod_seven:ender_golem_soul" },
        "outputs": [
            { "mob": "cataclysm:ender_golem" }
        ],
        "inputs": [
            { "item": "cataclysm:obsidian_bricks" },
            { "item": "cataclysm:void_stone" },
            { "item": "cataclysm:void_stone" },
            { "item": "cataclysm:obsidian_bricks" },
            { "item": "rootsclassic:charged_runic_focus" }
        ],
        "sacrifices": {
            "mobs": [{ "mob": "minecraft:sheep" }],
            "region": { "x": 3, "y": 3, "z": 3 }
        },
        "recipe_time": 200,
        "block_below": { "block": "architects_palette:heavy_cracked_end_stone_bricks" }
    })

    //Ender Guardian
    e.custom({
        "type": "summoningrituals:altar",
        "catalyst": { "item": "ragnamod_seven:ender_guardian_soul" },
        "outputs": [
            { "mob": "cataclysm:ender_guardian" }
        ],
        "inputs": [
            { "item": "minecraft:end_stone_bricks" },
            { "item": "minecraft:obsidian" },
            { "item": "minecraft:purpur_block" },
            { "item": "cataclysm:ender_stone" },
            { "item": "rootsclassic:charged_runic_focus" }
        ],
        "sacrifices": {
            "mobs": [{ "mob": "minecraft:sheep" }],
            "region": { "x": 3, "y": 3, "z": 3 }
        },
        "recipe_time": 200,
        "block_below": { "block": "architects_palette:heavy_cracked_end_stone_bricks" }
    })

    //Ignited Revenant
    e.custom({
        "type": "summoningrituals:altar",
        "catalyst": { "item": "ragnamod_seven:revenant_soul" },
        "outputs": [
            { "mob": "cataclysm:ignited_revenant" }
        ],
        "inputs": [
            { "item": "tconstruct:scorched_stone" },
            { "item": "minecraft:magma_block" },
            { "item": "minecraft:magma_block" },
            { "item": "tconstruct:scorched_stone" },
            { "item": "rootsclassic:charged_runic_focus" }
        ],
        "sacrifices": {
            "mobs": [{ "mob": "minecraft:sheep" }],
            "region": { "x": 3, "y": 3, "z": 3 }
        },
        "recipe_time": 200,
        "block_below": { "block": "minecraft:magma_block" }
    })

})