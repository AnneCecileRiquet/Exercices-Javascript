function somme() {
    let value = [];
    let iter = 0;

    for (var i = 0; i <= 2; i++) {
        value[i] = prompt("Entrer un nombre :");
        iter += parseFloat(value[i]);
    }
    
    document.getElementById("retour").innerHTML = iter;
}