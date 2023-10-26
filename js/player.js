import { ctx, canvas } from "./utils/utils.js";
import { Bullet } from './bullet.js';

export class Player {
    constructor(x, y, slicer, image, frame, speed) {
        this.x = x
        this.y = y
        this.direction = 0
        this.width = 303 / slicer
        this.height = 223 / slicer
        this.frame = frame
        this.load = image
        this.image = {}
        this.bullets = []                   // keep active bullet classes here, remove when isOutOfScreen === true
        this.speed = speed
        this.isMoving = false
        this.isShooting = false
        this.canShoot = true
        this.targetX = 0
        this.targetY = 0
        this.shootFrameCounter = 0
        this.playerFrameCounters = {
            flashlight: { KD: 1, clip: Infinity, ammo: 0, reg: 7 },
            handgun: { KD: 4, clip: 8, ammo: 0, reg: 7 },
            knife: { KD: 1, clip: Infinity, ammo: 0, reg: 7 },
            rifle: { KD: 2, clip: 30, ammo: 0, reg: 7 },
            shotgun: { KD: 3, clip: 7, ammo: 0, reg: 7 },
        }
        this.loadImage()
        this.reloadCounter = 0
    }

    loadImage() {
        this.image = this.load.Top_Down_Survivor[this.frame.type][this.frame.action][this.frame.count]
        this.image.onload = () => {
            this.draw()
        };
    }

    // PLAYER MOVE LOGIC
    moveUp(deltaTime) {
        const newY = this.y - this.calculateMoveDistance(deltaTime, this.speed)
        if (newY >= 0) {
            this.y = newY
        } else {
            this.y = 0
        }
    }

    moveLeft(deltaTime) {
        const newX = this.x - this.calculateMoveDistance(deltaTime, this.speed)
        if (newX >= 0) {
            this.x = newX
        } else {
            this.x = 0
        }
    }

    moveDown(deltaTime) {
        const newY = this.y + this.calculateMoveDistance(deltaTime, this.speed)
        if (newY + this.height <= canvas.height) {
            this.y = newY
        } else {
            this.y = canvas.height - this.height
        }
    }

    moveRight(deltaTime) {
        const newX = this.x + this.calculateMoveDistance(deltaTime, this.speed)
        if (newX + this.width <= canvas.width) {
            this.x = newX
        } else {
            this.x = canvas.width - this.width
        }
    }

    updateMouseDirection(mouseX, mouseY) {
        const dx = mouseX - (this.x + this.width / 2)
        const dy = mouseY - (this.y + this.height / 2)
        this.direction = Math.atan2(dy, dx) - 0.18
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
        ctx.rotate(this.direction)

        ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height)
        ctx.restore()
    }

    update(deltaTime, frame, mouseX, mouseY) {
        this.spawnBullet()
        this.frame = frame
        this.isMoving ? this.frame.action = 'move' : this.frame.action = 'idle'
        if (this.isShooting && this.canShoot) {
            this.shootFrameCounter++
            if ('shoot' in this.load.Top_Down_Survivor[this.frame.type]) {
                this.frame.action = 'shoot'
            } else {
                this.frame.action = 'meleeattack'
            }
            this.loadImage();
            if (this.frame.count === 2 && this.shootFrameCounter === 2) {
                console.log(this.shootFrameCounter);
                console.log(this.frame.count);
            }
            if (this.shootFrameCounter % this.playerFrameCounters[this.frame.type].KD === 0) {
                this.frame.count++;
                this.shootFrameCounter = 0
            }

            if (this.frame.count >= this.load.Top_Down_Survivor[this.frame.type][this.frame.action].length) {
                this.frame.count = 0;
                // checking shoot 
                this.canShoot = true;
            }
        } else {
            this.loadImage();
            this.frame.count++;

            if (this.frame.count >= this.load.Top_Down_Survivor[this.frame.type][this.frame.action].length) {
                this.frame.count = 0;
            }
        }

    }

    calculateMoveDistance(deltaTime, speed) {
        return speed * deltaTime
    }

    startShooting(targetX, targetY) {
        this.targetX = targetX;
        this.targetY = targetY;
        this.isShooting = true;
        this.frame.count = 0;

        if (this.canShoot) {
            // this.canShoot = false;
        }
    }

    stopShooting(targetX, targetY) {
        this.isShooting = false
    }

    spawnBullet() {
        this.reloadCounter++
        for (let type in this.playerFrameCounters) {
            if (this.playerFrameCounters[type].clip != Infinity) {
                if (this.playerFrameCounters[type].ammo < this.playerFrameCounters[type].clip) {
                    if (this.reloadCounter % this.playerFrameCounters[type].clip === 0) {
                        this.playerFrameCounters[type].ammo++
                    }
                }
            }
        }
        if (this.reloadCounter > 30) {
            this.reloadCounter = 1
        }
    }
}