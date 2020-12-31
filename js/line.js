export class Line {

    constructor() {
    }

    update(x, y, tx, ty, width, color) {
        this.x = x
        this.y = y
        this.tx = tx
        this.ty = ty
        this.width = width
        this.color = color || '#000000'
    }

    draw(ctx) {
        ctx.beginPath()

        ctx.lineWidth = this.width
        ctx.moveTo(this.tx, this.ty)
        ctx.lineTo(this.x, this.y)

        ctx.strokeStyle = this.color
        ctx.stroke()
        ctx.closePath()
    }
}