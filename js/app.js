import { Utils } from './utils.js'
import { Ballpen } from './ballpen.js'


class App {

    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)

        this.resize()
        requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth
        this.canvas.height = this.stageHeight

        this.ctx.scale(1, 1)

        this.edgeIdx = 0
        this.edgeSeq = ['left', 'right']
        this.edgeDirection = 'leftToBottom'

        this.startEdge(this[this.edgeSeq[this.edgeIdx]+'Edge'](this.canvas.width, this.canvas.height))

        this.ballpen = new Ballpen(
            this.canvas.width,
            this.canvas.height,
            this.edge.x,
            this.edge.y,
            window.utils.randomHexColor())
    }

    startEdge(obj) {
        this.edge = obj
    }

    leftEdge(cWidth, cHeight) {
        return {
            x: Math.floor(Math.random() * 100),
            y: Math.floor(Math.random() * 100)
        }
    }

    rightEdge(cWidth, cHeight) {
        return {
            x: Math.floor(cWidth - Math.random() * 100),
            y: Math.floor(Math.random() * 100)
        }
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this))

        if ((this.edgeDirection === 'leftToBottom' && this.ballpen.x > this.canvas.width && this.ballpen.y > this.canvas.height)
            || (this.edgeDirection === 'rightToBottom' && (this.ballpen.y > this.canvas.height))
        ) {
            ++this.edgeIdx
            this.edgeIdx = (this.edgeIdx === this.edgeSeq.length) ? 0 : this.edgeIdx

            this.startEdge(this[this.edgeSeq[this.edgeIdx]+'Edge'](this.canvas.width, this.canvas.height))

            this.ballpen = new Ballpen(
                this.canvas.width,
                this.canvas.height,
                this.edge.x,
                this.edge.y,
                window.utils.randomHexColor())
        }

        this.edgeDirection = this.edgeIdx ? 'rightToBottom' : 'leftToBottom'
        this.ballpen.update(this.edgeDirection)
        this.ballpen.draw(this.ctx);
    }
}
window.onload = () => {
    window.utils = new Utils()
    window.app = new App()
}