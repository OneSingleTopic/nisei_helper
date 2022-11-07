export const canvas_ctn = document.getElementById("canvas-ctn")
export const context = canvas_ctn.getContext('2d');

export function resetBackground() {
    canvas_ctn.height = canvas_ctn.offsetHeight;
    canvas_ctn.width = canvas_ctn.offsetWidth;
    context.clearRect(0, 0, canvas_ctn.width, canvas_ctn.height);
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas_ctn.width, canvas_ctn.height);
}

export function distribute_positions(n_clicks, radius) {
    console.log(canvas_ctn.width)
    const margin = 0.05 * canvas_ctn.width
    const display_width = canvas_ctn.width - 2 * margin
    const remaining_space = display_width - n_clicks * 2 * radius
    const inter_space = remaining_space / (n_clicks + 1)

    let positions = []
    for (let click_index = 0; click_index < n_clicks; click_index++) {
        positions.push(
            [margin + click_index * (inter_space + radius * 2) + inter_space + radius, canvas_ctn.height / 2]
        )
    }
    return positions


}

export function draw(clicks) {
    resetBackground();

    if (clicks.length > 0) {
        clicks.map(click => click.draw());
    }
}