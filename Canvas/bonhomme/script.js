
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//tete
            
ctx.beginPath();
ctx.lineWidth = 2;
ctx.arc(175, 75, 50, 0, Math.PI * 2, true);  
ctx.moveTo(210,75);
ctx.arc(175, 75, 35, 0, Math.PI, false);  
ctx.moveTo(165, 65);
ctx.arc(160, 65, 5, 0, Math.PI * 2, true);  
ctx.moveTo(195, 65);
ctx.arc(190, 65, 5, 0, Math.PI * 2, true);  
ctx.stroke();

//corp

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(175,280);
ctx.lineTo(175,125);
ctx.moveTo(175,280);
ctx.lineTo(100,350);
ctx.moveTo(175,280);
ctx.lineTo(250,350);
ctx.moveTo(175,150); // bras gauche
ctx.lineTo(100,220);
ctx.moveTo(175,150); //bras droit
ctx.lineTo(275,125);
    ctx.stroke();







