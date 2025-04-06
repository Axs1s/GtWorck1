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


canvas.addEventListener('click', function(){

    rect = this.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    
    ctx.drawImage(X,x,y,100,100)

})

