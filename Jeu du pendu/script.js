let start = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];

let essai = ['_', '_', '_', '_', '_', '_', '_'];

let pendu = [''];

function guessLetter(mot) {
    let state = true
    while(state) {
        let input = prompt("Choisi une lettre :")
        while(input.length > 1)
            input = prompt("Je n'ai pas compris votre réponse :")
        input = input.toUpperCase()
        for(let i = 0; i < pendu.length; i++) {
            while(pendu[i] == input) {
                input = prompt("Choisi une autre lettre :")
                input = input.toUpperCase()
            } 
        }
        pendu.push(input)
        console.log(pendu)
        for(let i = 0; i < mot.length; i++) {
            if (input == mot[i]) {
                alert("Bravo, continue tu as trouvé le: "+ mot[i]);
                essai[i] = mot[i];
            }
            if (essai.toString().replace(/\,/g, "") == "BONJOUR")
                state = false
        }
    }
    confirm("BRAVO, vous avez trouvé le mot : "+essai.toString().replace(/\,/gi, "") + "\nEn : "+(pendu.length-1) + "coups")
}