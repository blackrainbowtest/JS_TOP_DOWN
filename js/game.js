import { canvas, ctx } from "./utils/utils.js"
import { preloadImages } from "./utils/load.js"
import { Player } from "./player.js"
import { HUD } from "./GUI/HUD.js";

let data = {
    player: { x: innerWidth / 2 - 151, y: innerHeight - 223, frame: { count: 0, action: 'idle', type: 'handgun' }, speed: 200 },
    images: preloadImages(1),
    slicer: 1.5,
}

export class Game {

    constructor(framesPerSecond = 30) {
        this.framesPerSecond = framesPerSecond
        this.frameInterval = 1000 / this.framesPerSecond
        this.lastFrameTime = 0
        this.animation = null
        this.mouseX = 0
        this.mouseY = 0
        this.player = new Player(data.player.x, data.player.y, data.slicer, data.images, data.player.frame, data.player.speed)
        this.hud = new HUD(this.player.playerFrameCounters)
        canvas.addEventListener("mousemove", this.handleMouseMove.bind(this))
        // player controller binding
        window.addEventListener('keydown', this.handleKeyDown.bind(this))
        window.addEventListener('keyup', this.handleKeyUp.bind(this))
        canvas.addEventListener("mousedown", this.handleMouseDown.bind(this))
        canvas.addEventListener("mouseup", this.handleMouseUp.bind(this))
        this.keys = {
            A: false, D: false, S: false, W: false
        }
        this.CANVAS_WIDTH = canvas.width = innerWidth
        this.CANVAS_HEIGHT = canvas.height = innerHeight
    }

    handleMouseMove(event) {
        const rect = canvas.getBoundingClientRect()
        this.mouseX = event.clientX - rect.left
        this.mouseY = event.clientY - rect.top
    }

    play() {
        this.lastFrameTime = performance.now()
        // this.update()
        this.gameLoop(this.lastFrameTime)
    }

    gameLoop(currentTime) {
        const deltaTime = currentTime - this.lastFrameTime
        if (deltaTime >= this.frameInterval) {
            this.update(deltaTime / 1000)
            this.draw()
            this.lastFrameTime = currentTime
        }
        this.animation = requestAnimationFrame(this.gameLoop.bind(this))
    }

    update(deltaTime) {
        if (this.keys.W) {
            this.player.moveUp(deltaTime);
        }
        if (this.keys.A) {
            this.player.moveLeft(deltaTime);
        }
        if (this.keys.S) {
            this.player.moveDown(deltaTime);
        }
        if (this.keys.D) {
            this.player.moveRight(deltaTime);
        }
        if (!this.keys.W && !this.keys.A && !this.keys.S && !this.keys.D) {
            this.player.isMoving = false
        } else {
            this.player.isMoving = true
        }
        this.player.updateMouseDirection(this.mouseX, this.mouseY)
        this.player.update(deltaTime, data.player.frame, this.mouseX, this.mouseY)
        this.hud.update(this.player.frame.type)
    }

    draw() {
        ctx.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT)   // cleare frame
        this.player.draw()
        this.hud.draw(ctx, this.player.frame.type)
    }

    drawRedCircle() {
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI)
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.closePath()
    }

    handleKeyDown(event) {
        switch (event.code) {
            case 'Digit1':
                data.player.frame.type = 'flashlight'
                data.player.frame.count = 0
                break
            case 'Digit2':
                data.player.frame.type = 'knife'
                data.player.frame.count = 0
                break;
            case 'Digit3':
                data.player.frame.type = 'handgun'
                data.player.frame.count = 0
                break
            case 'Digit4':
                data.player.frame.type = 'shotgun'
                data.player.frame.count = 0
                break
            case 'Digit5':
                data.player.frame.type = 'rifle'
                data.player.frame.count = 0
                break
            case 'KeyW':
                this.keys.W = true
                break
            case 'KeyA':
                this.keys.A = true
                break
            case 'KeyS':
                this.keys.S = true
                break
            case 'KeyD':
                this.keys.D = true
                break
            default:
                break
        }
    }

    handleKeyUp(event) {
        switch (event.code) {
            case 'KeyW':
                this.keys.W = false
                break
            case 'KeyA':
                this.keys.A = false
                break
            case 'KeyS':
                this.keys.S = false
                break
            case 'KeyD':
                this.keys.D = false
                break
            default:
                break
        }
    }

    handleMouseDown(event) {   
        this.player.startShooting(this.mouseX, this.mouseY);
    }

    handleMouseUp(event) {   
        this.player.stopShooting(this.mouseX, this.mouseY);
    }
}