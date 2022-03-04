function f1() {
    var canvas = document.getElementById("canvas1");
    context = canvas.getContext("2d");
    context.fillStyle = "red";
    context.fillRect(50, 50, 50, 50);
}

function f2() {
    var canvas = document.getElementById("canvas2");
    context = canvas.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(30, 30, 100, 100);
}