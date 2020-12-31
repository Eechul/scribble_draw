import { Line } from "./line.js";
import { Ball } from "./ball.js";

export class Ballpen {

    constructor(cWidth, cHeight, x, y, color, dx, dy) {
        this.cWidth = cWidth
        this.cHeight = cHeight
        this.x = x
        this.y = y
        this.tx = this.x
        this.ty = this.y
        this.dx = dx || -15.0
        this.dy = dy || 15.0
        this.lineWidth = 20.0
        this.ballRadius = this.lineWidth / 2
        this.color = color || '#c82124'

        this.ball = new Ball()
        this.line = new Line()
    }

    update(directionType) {
        this.tx = this.x
        this.ty = this.y
        if(directionType === 'leftToBottom') {
            this.x += this.dx
            this.y += this.dy
            if(this.y < 0) {
                this.dy *= -1.5
                this.dx *= -1
            } else if(this.x < 0) {
                this.dy *= -1
                this.dx *= -1.5
            }
        } else if(directionType === 'rightToBottom'){
            this.x += this.dx
            this.y -= this.dy
            if(this.x > this.cWidth) {
                this.dx *= -1.5
                this.dy *= -1
            } else if(this.x < 0 || this.y < 0) {
                this.dx *= -1
                this.dy *= -1.5
            }
        }

        this.ball.update(this.x, this.y, this.ballRadius, this.color)
        this.line.update(this.x, this.y, this.tx, this.ty, this.lineWidth, this.color)
    }

    draw(ctx) {
        this.ball.draw(ctx)
        this.line.draw(ctx)

        this.update()
    }

}