let message = alert("Trouve le juste prix");
let nb_coup = 1;
let min = 20;
let max = 80;
let nombre = Math.floor(Math.random() * 60) + 20;
let nb = "";

function nb_aleatoire(min, max){
    let nb = min + (max-min+1)*Math.random();
    return Math.floor(nb);
    }	

function jeu() {
nb = nb_aleatoire(min, max);
//alert(nb); //pour vérifier

    while(nombre != nb) {
        var nombre = prompt("Entrer un nombre [essai n° : "+ nb_coup +"]");

        
        if(nombre < min) {
        alert(+ nombre + " Il faut un nombre entre 20 et 80 !");
        }
        else if(nombre > max) {
        alert(+ nombre + " Il faut un nombre entre 20 et 80 !");
        }
        else if(nombre < nb) {
        alert("C'est plus !");
        nb_coup ++;
        }
        else if(nombre > nb) {
        alert("C'est moins !");
        nb_coup ++;
        }
        else if(nombre == nb) {
        alert("Bravo c'était bien le "+ nb + " trouvé en " + nb_coup + " coups");
        
        }
        
    }
}



