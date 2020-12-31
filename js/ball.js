export class Ball {

    constructor() {
    }

    update(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color || '#000000'
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.lineWidth = 0
        ctx.arc(this.x, this.y, this.radius,0, Math.PI * 2)

        ctx.fillStyle = this.color
        ctx.fill()

        ctx.closePath()
    }
}