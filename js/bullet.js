export class Bullet {
    constructor(x, y, targetX, targetY, radius, color, speed) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.speed = speed

        const deltaX = targetX - x
        const deltaY = targetY - y
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)

        // geting vector way
        this.dx = deltaX / distance
        this.dy = deltaY / distance
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    move(deltaTime) {
        // move by vector way by bullet speed * deltatime
        const frameDistance = this.speed * deltaTime
        this.x += this.dx * frameDistance
        this.y += this.dy * frameDistance
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