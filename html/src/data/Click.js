import { context } from "../CanvasCtn.js"

export class Click {
    constructor(color, x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.fill();

        context.lineWidth = 5;
        context.strokeStyle = "darkgrey";
        context.stroke();
    }
}