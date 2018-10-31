let score = 0;
let clic = document.querySelector("#clic");
let affichage = document.querySelector("#affichage");
let boost = document.querySelector("#multiplier");
let autoclick = document.querySelector("#autoclic")
let bonus = document.querySelector("#bonus");
let multiplicateur = 1;
let prix = 50;
let interval;
let autoclickOn = 0;

let increaseScore = () => {
    score += 1 * multiplicateur;
    affichage.innerHTML = score;
    //console.log(score);
    if (score >= prix) {
        boost.disabled = false;
    }
    if (score >= 500) {
        autoclick.disabled = false;
    }
    if (autoclickOn > 0) {
        autoclick.disabled = true;
    }
    if (score >= 5000) {
        bonus.disabled = false;
    }
    
}

let augmenterMultiplicateur = () => {
    score -= prix;
    prix = prix * 2;
    multiplicateur += 1;
    affichage.innerHTML = score;
    multiplier.innerHTML = `X${multiplicateur+1} =  ${prix} clics`;
    if (score < prix) {
        boost.disabled = true;
    }
    if (autoclickOn > 0) {
        autoclick.disabled = true;
    }
    if (score < 5000) {
       bonus.disabled = true; 
    }
}

let autoClicker = () => {
    score -= 500;
    autoclickOn += 1
    if (autoclickOn > 0) {
        autoclick.disabled = true;
    }
    if (score >= prix) {
        boost.disabled = false;
    }
    if (score < prix) {
        boost.disabled = true;
    }
    if (score < 5000) {
        bonus.disabled = true;
    }
    interval = setInterval(increaseScore, 1000);
    auto.innerHTML = 'DEJA ACHETE';
}

let bonusTime = () => {
    




    score -= 5000
    if (score < 5000) {
        bonus.disabled = true;
    }

    if (score < prix) {
        boost.disabled = true;
    }
    if (score < 500) {
        autoclick.disabled = true;
    }
    bonusScore(); // Exécute la fonction bonusScore
    setTimeout(bonusScoreEnd, 10000); // Exécute la fonction bonusScoreEnd après X secondes   
}

let bonusScore = () => {
    multiplicateur = multiplicateur * 2;
    console.log(multiplicateur);
}

let bonusScoreEnd = () => {
    multiplicateur = multiplicateur / 2;
    console.log (multiplicateur);
}









let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.ellipse(180, 100, 50, 150, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.fillStyle = "rgb(204, 102, 0)";
ctx.strokeStyle = "rgb(153, 51, 0)";
ctx.lineWidth = 5;
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.ellipse(180, 100, 8, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();      
ctx.fillStyle = "rgb(102, 51, 0)"; 
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.ellipse(100, 70, 8, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();      
ctx.fillStyle = "rgb(102, 51, 0)"; 
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.ellipse(80, 120, 8, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();      
ctx.fillStyle = "rgb(102, 51, 0)"; 
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.ellipse(250, 120, 8, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();      
ctx.fillStyle = "rgb(102, 51, 0)"; 
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.ellipse(230, 80, 8, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();      
ctx.fillStyle = "rgb(102, 51, 0)"; 
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.ellipse(120, 120, 10, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();      
ctx.fillStyle = "rgb(102, 51, 0)"; 
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.ellipse(290, 100, 10, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();      
ctx.fillStyle = "rgb(102, 51, 0)"; 
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.ellipse(160, 60, 10, 12, 90 * Math.PI/180, 0, 2 * Math.PI);
ctx.closePath();      
ctx.fillStyle = "rgb(102, 51, 0)"; 
ctx.fill(); 
ctx.stroke();
