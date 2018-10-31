let tab = [-2, 1, 4];

function soustrait(x) {
    return ((x - 2) >= 0) ? x - 2 : "Nombre negatif !";
}

function affiche() {
    document.getElementById("calcul1").innerHTML = soustrait(tab[0]);
    document.getElementById("calcul2").innerHTML = soustrait(tab[tab.length-1]);
}