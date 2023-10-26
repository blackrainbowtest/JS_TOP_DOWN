export class Bullet {
    constructor(x, y, targetX, targetY, radius, color, speed) {
        this.x = x
        this.y = y
        this.targetX = targetX
        this.targetY = targetY
        this.radius = radius
        this.color = color
        this.speed = speed
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    move() {
        const deltaX = this.targetX - this.x
        const deltaY = this.targetY - this.y
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)

        if (distance > 0) {
            const directionX = deltaX / distance
            const directionY = deltaY / distance

            this.x += directionX * this.speed
            this.y += directionY * this.speed
        }
    }

    isOutOfScreen(canvasWidth, canvasHeight) {
        return (
            this.x + this.radius < 0 ||
            this.x - this.radius > canvasWidth ||
            this.y + this.radius < 0 ||
            this.y - this.radius > canvasHeight
        );
    }
}