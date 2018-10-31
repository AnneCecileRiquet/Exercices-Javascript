function testWhile() {
    let value = "";
    while (value.indexOf("p")) {
        value = prompt("Tapez un texte contenant le lettre 'p' :")
    }
    document.getElementById("retour").innerHTML = "\""+value+"\"";
    
}