import { world } from "@minecraft/serer"

world.events.beforChat.subscribe((ev) => {
    const player = ev.sender
    const msg = ev.message

    if (msg == "/diamond") {
        player.runCommand("give @s diamond 1")
    }
})