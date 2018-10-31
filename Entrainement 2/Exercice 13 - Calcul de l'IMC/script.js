
    
    

    function calculIMC() {
        let poids = document.getElementById("poids").value;
        let taille = document.getElementById("taille").value;
        let imc = poids / (taille*taille);
        
   
    if (imc < 16.5) {
        alert( "IMC = " + imc.toFixed(2) + " Trop maigre ou famine");
    }
    else if (imc >= 16.5 && imc < 18.5) {
        alert( "IMC = " +  imc.toFixed(2) + " Maigre a surveiller");
    }
    else if (imc >= 18.5 && imc < 25) {
        alert( "IMC = " +  imc.toFixed(2) + " Dans la moyenne");
    }
    else if (imc >=25 && imc < 30) {
        alert( "IMC = " + imc.toFixed(2) + " Aie leger surpoids, attention");
    }
    else if (imc >= 30 && imc < 35) {
        alert( "IMC = " + imc.toFixed(2) + " Obesite modere, ce n'est pas irrattrapable");
    }
    else if (imc >=30 && imc < 40) {
        alert( "IMC = " + imc.toFixed(2) + " Obesite severe, il faut maigrir au plus vite");
    }
    else if (imc >= 40) {
        alert( "IMC = " + imc.toFixed(2) + " Obesite morbide, il est temps de consulter!");
    }
}
