
class App {

    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.innering = false
        this.picking = false
        this.pickX = 0
        this.pickY = 0

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

        let bWidth = 250
        let bHeight = 250
        const centerX = this.canvas.width / 2 - bWidth / 2
        const centerY = this.canvas.height / 2 - bHeight / 2
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this))
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }



}



window.onload = () => {
    new App()
}