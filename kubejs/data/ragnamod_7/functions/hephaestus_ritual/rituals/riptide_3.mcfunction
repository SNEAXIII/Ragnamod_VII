execute unless block ~ ~ ~ forbidden_arcanus:hephaestus_forge{ Items: [ { Slot: 4b, Count: 1b, id: "minecraft:book" } ] } run tag @s add RitualBroken

function ragnamod_7:hephaestus_ritual/items/minecraft_ink_sac
function ragnamod_7:hephaestus_ritual/items/forbidden_arcanus_arcane_crystal
function ragnamod_7:hephaestus_ritual/items/minecraft_ender_pearl
function ragnamod_7:hephaestus_ritual/items/forbidden_arcanus_mundabitur_dust
function ragnamod_7:hephaestus_ritual/items/minecraft_prismarine_shard
function ragnamod_7:hephaestus_ritual/items/minecraft_glowstone_dust

execute store result score @s HephaestusCheckRitual if entity @e[type=minecraft:marker, tag=RitualChecker, distance=..3.1]
execute unless score @s HephaestusCheckRitual matches 6 run tag @s add RitualBroken
