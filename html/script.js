import { canvas_ctn, resetBackground, distribute_positions, draw } from './src/CanvasCtn.js'
import { Click } from './src/data/Click.js'

resetBackground();

const role_config = {
    "Corp": {
        "message": "First, draw a card",
        "color": "blue",
        "clicks": 3,
        "radius": 100
    },
    "Runner": {
        "color": "red",
        "clicks": 4,
        "radius": 100
    },

}

export function reset_clicks() {
    const current_role = role_config[current_player]
    const positions = distribute_positions(current_role.clicks, current_role.radius)
    return positions.map((element, index) => new Click(current_role.color, element[0], element[1], current_role.radius))
}

let current_player = "Corp"
let clicks = reset_clicks()

window.addEventListener('keydown', (e) => {
    if (e.key == " ") {
        current_player = current_player === "Corp" ? "Runner" : "Corp"
        clicks = reset_clicks()
    }
})

setInterval(
    function () {
        draw(clicks);
    }, (1 / 50) * 1000.
);


