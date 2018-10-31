//PNJ
let character = {
    name: "lara Croft", 
    age: 30, 
    items_to_give: ["couteau", "corde", "grapin"],
}

for ( let key in character){
    console.log(character[key]);
}
let random1 = Math.floor(Math.random()* 3) +1;

console.log(random1);
function giveItem(){
    if (random1 == 1){
        console.log(character.items_to_give[0]);
    }else if  (random1 == 2){
        console.log(character.items_to_give[1]);  
    }else{ 
        console.log(character.items_to_give[2]);
    }
}
giveItem();


// Shop

let shop = [{
    title: 'Epée',
    physic: 5,
    magic: 5,
    minLevel: 5,
    available: true,
}, {
    title: 'Hache',
    physic: 10,
    magic: 10,
    minLevel: 10,
    available: false,
}, {
    title: 'Spectre',
    physic: 15,
    magic: 15,
    minLevel: 15,
    available: true
}, {
    title: 'Gems',
    physic: 20,
    magic: 20,
    minLevel: 20,
    available: false
}, {
    title: 'rock',
    physic: 40,
    magic: 10,
    minLevel: 20,
    available: true
}
];
//faire une fonction pour afficher tout les objets

let afficher=() => {
    for ( let key in shop){
        console.log(shop[key]);
    }
}
afficher();

//faire une fonction pour afficher les objets disponibles

let availableItems = () => {
    for (let i in shop) {
        if (shop[i].available === true) {
            console.log(shop[i])
        }
    }
}
    availableItems();

//faire une fonction pour afficher les objets dont le niveau minimum est de 10

let level = () => {
    for (let i in shop) {
        if (shop[i].minLevel >= 10) {
            console.log(shop[i])
        }
    }
}

    level();


// Personnage

let mainCharacter = {
    name: 'Moi Moche Mechant',
	level: 23,
	life: 150,
	weapon: {
		name: 'lazer',
		damage: 75,
    }
}
    
	let attack = () => {
        for ( let key in mainCharacter){
            console.log ((mainCharacter.name) + (mainCharacter.weapon.name) + ((mainCharacter.level * mainCharacter.weapon.damage)))
        }
    
	}

    attack();





    
 
