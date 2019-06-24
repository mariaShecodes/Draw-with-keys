var keys = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

document.addEventListener("keydown", drawKey);

var picture = document.getElementById("drawingArea");
var paper = picture.getContext("2d");
var x = 250;
var y = 250;

function drawLine(colour, xinitial, yinitial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = colour;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinitial, yinitial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

drawLine("red", x-1, y-1, x+1, y+1, paper)

function drawKey(infoEvent) {

    var colour = "green";
    var movement = 3; 

    switch (infoEvent.keyCode) {
        case keys.UP:
            drawLine(colour, x, y, x, y - movement, paper);
            y = y - movement;
        break;
        case keys.DOWN:
            drawLine(colour, x, y, x, y + movement, paper);
            y = y + movement;
        break;
        case keys.RIGHT:
            drawLine(colour, x, y, x + movement, y, paper);
            x = x + movement;
        break;
        case keys.LEFT:
            drawLine(colour, x, y, x - movement, y, paper);
            x = x - movement
        break;
        default:
            console.log("Pulsa otra tecla");
        break;
    }
}




