
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


            
    
    ctx.beginPath();
    ctx.moveTo(150,300);
    ctx.lineTo(200,230);
    ctx.lineTo(250,300);
    ctx.lineTo(250,270);
    ctx.lineTo(250,380);
    ctx.lineTo(150,380);
    ctx.lineTo(150,300);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    ctx.stroke();
    








