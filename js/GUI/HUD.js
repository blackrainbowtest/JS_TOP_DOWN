export class HUD {
    constructor(playerFrameCounters) {
        this.playerFrameCounters = playerFrameCounters;
        this.ammoCount = 0
    }

    update(activeWeapon) {
        this.ammoCount = this.playerFrameCounters[activeWeapon].ammo

    }

    draw(ctx, activeWeapon) {
        if (activeWeapon === 'flashlight' || activeWeapon === 'knife') {

        } else {
            ctx.fillStyle = "black";
            ctx.font = "24px Arial";
            ctx.fillText(`Ammo: ${this.ammoCount}`, 20, 40);
        }
    }
}