let motdepasse = document.getElementById("motdepasse");
let confirmation = document.getElementById("confirmation");

function verif(){
    if (motdepasse.value == confirmation.value) {
    motdepasse.style.border ="3px solid green ";
    confirmation.style.border ="3px solid green ";
    }
    else {
    motdepasse.style.border ="3px solid red";
    confirmation.style.border ="3px solid red";

    }
};




