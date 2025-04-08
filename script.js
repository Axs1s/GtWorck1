const size = 200
let X = new Image()
let O = new Image()
X.src = "img/X.jpg"
O.src = "img/O.jpg"
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let rect = ctx.strokeRect(i * size, j * size, size, size)
    }
}

let board = Array(3).fill(null).map(() => Array(3).fill(null))

canvas.addEventListener('click', function(event){

    rect = this.getBoundingClientRect()
    let corX = event.clientX - rect.left
    let corY = event.clientY - rect.top

    let rectX = Math.floor(corX / size)
    let rectY = Math.floor(corY / size)
    
    ctx.drawImage(X, rectX * 215, rectY * 215, 150, 150)

    if (boar[rectX][rectY] !== null)return;

})

currentMove = X
