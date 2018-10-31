
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


            
    ctx.fillStyle = "black";
    ctx.fillRect(100,130,50,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(150,130,50,100);
    ctx.fillStyle = "red";
    ctx.fillRect(200,130,50,100);
    ctx.beginPath();
    ctx.moveTo(100,350);
    ctx.lineTo(100,130);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.stroke();
    








