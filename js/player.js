import { ctx, canvas } from "./utils/utils.js";

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
        this.speed = speed
        this.isMoving = false
        this.loadImage()
    }

    loadImage() {
        this.image = this.load.Top_Down_Survivor[this.frame.type][this.frame.action][this.frame.count]
        this.image.onload = () => {
            this.draw()
        };
    }

    // PLAYER MOVE LOGIC
    moveUp(deltaTime) {
        this.y -= this.calculateMoveDistance(deltaTime, this.speed)
    }

    moveLeft(deltaTime) {
        this.x -= this.calculateMoveDistance(deltaTime, this.speed)
    }

    moveDown(deltaTime) {
        this.y += this.calculateMoveDistance(deltaTime, this.speed)
    }

    moveRight(deltaTime) {
        this.x += this.calculateMoveDistance(deltaTime, this.speed)
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

    update(deltaTime, frame) {
        this.frame = frame
        this.isMoving ? this.frame.action = 'move' : this.frame.action = 'idle'
        this.loadImage()
        this.frame.count++

        if (this.frame.count > this.load.Top_Down_Survivor[this.frame.type][this.frame.action].length -1) {
            this.frame.count = 0
        }

    }

    calculateMoveDistance(deltaTime, speed) {
        return speed * deltaTime
    }
}