const size = 200
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let rect = ctx.strokeRect(i * size, j * size, size, size)
    }
}
let currM = X

$(document).ready(function () {
    ("rect").onclick(this)
})
