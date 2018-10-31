
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//voile
            
ctx.beginPath();      
ctx.moveTo(150,80);   
ctx.lineTo(300,230);  
ctx.lineTo(150,230);  
ctx.closePath();      
ctx.fillStyle = "rgb(255, 204, 0)"; 
ctx.fill();         

//bateau    

ctx.beginPath();      
ctx.moveTo(50,250);
ctx.lineTo(100,300);
ctx.lineTo(250,300);
ctx.lineTo(300,250);
ctx.fillStyle = "rgb(204, 102, 0)";
ctx.strokeStyle = "rgb(153, 51, 0)"; 
ctx.lineWidth = 5;        
ctx.fill();            
ctx.stroke();          

//mat

ctx.beginPath();
ctx.moveTo(140,50);
ctx.lineTo(140,250);
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.stroke();

//hublo

ctx.beginPath();
ctx.arc(125, 270, 10, 0, 2 * Math.PI);
ctx.strokeStyle = "rgb(102, 51, 0)"; 
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.arc(175, 270, 10, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.stroke();

ctx.beginPath();
ctx.arc(225, 270, 10, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.stroke();