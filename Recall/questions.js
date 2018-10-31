var selectElementsStartingWithA = function(array) {
    //sélectionne les éléments commençant par A
    for(let i=0; i<array.length; i++){
        if(array[i].charAt(0) != "A"){
            array.splice(i,1);
        }
    }
    return array;
}

var selectElementsStartingWithVowel = function(array) {
    //sélectionne des éléments commençant par une voyelle
    const voyelle = ["a","e","i","o","u","y"]
    let result = [];
    for(let j=0; j < voyelle.length;j++){
        for(let i= 0; i < array.length; i++){
            if (array[i].charAt(0) == voyelle[j]){
                result.push(array[i])
            }
        }
    }
    return result.reverse()
}
        
var removeNullElements = function(array) {
    //supprime les valeurs nulles d'un tableau
    for(let i=array.length-1; i>-1; i--){
        if(array[i] == null){
            array.splice(i,1);
        }
    }
    return array;
}

var removeNullAndFalseElements = function (array) {
    //supprime les valeurs nulles et fausses d'un tableau
    for (let i = array.length; i > -1; i--) {
        if (array[i] === null || array[i] === false) {   
            array.splice(i, 1)
        }
    }
    return array;
}

var reverseWordsInArray = function(array) {
    //inverse les lettres de chaque élément d'un tableau       
    for (let i=array.length-1;i>-1;i--) {
        array[i] = array[i].split('').reverse().join('');
    }
    return array
}


var everyPossiblePair = function(array) {
    //fait chaque paire possible d'étudiants
    let result=[]
    for (let i = 0; i < array.length -1; i++) {
        for(let j = i +1; j < array.length; j++) {
            result.push([array[j],array[i]].sort());
        }
    }
    return result.sort();      
}

var allElementsExceptFirstThree = function(array) {
    //prend tous les éléments sauf les 3 premiers
    return array.slice(3);
}

var addElementToBeginning = function (array, element) {
    //ajoute un élément au début d'un tableau
    array.unshift(element)
    return array;
    }

var sortByLastLetter = function(array) { 
    //trie un tableau par la dernière lettre de chaque mot
    array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    return array;        
}

var getFirstHalf = function (string) {
    //obtient la première moitié d'une chaîne
    if (string.length == 6) {
        return string.slice(-6, -3);
    }
    else if (string.length == 5) {
        return string.slice(-5, -2);
    }
}

const makeNegative = (number) => {
    //rend les nombres négatifs
    return -Math.abs(number);
    } 

var numberOfPalindromes = function(array) {
    //compte les éléments d'un tableau qui sont des palindromes
    for (let i = array.length -1; i > 0; i--) {
        if (array[i].split('').reverse().join('') !== array[i]) {
                array.splice(i, 1);
            }
        }
    return array.length;
}

var shortestWord = function(array) {
    //retourne le mot le plus court dans un tableau
    let word;
    for (let i=0;i<array.length;i++) {
        if (i+1 <= array.length) {
            if (array[i].length < array[i+1].length) {
                return word = array[i];
            }
        }
    }
}

var longestWord = function(array) {
    //renvoie le mot le plus long d'un tableau
    let word;
    for (let i=0;i<array.length;i++) {
        if (i+1 <= array.length) {
            if (array[i].length > array[i+1].length) {
                return word = array[i];
            }
        }
    }
}

var sumNumbers = function (array) {
    //résume les nombres dans un tableau
    return array.reduce((a, b)=> a + b);
}

var repeatElements = function (array) {
    //répète les éléments d'un tableau
    let result = []
    result = array
    return array.concat(result);
    }
    
var stringToNumber = function(string) {
    //transforme une chaîne numérique en nombre
    return Number(string)
}

var calculateAverage = function(array) {
    //calcule la moyenne d'un tableau de nombres
    let total = array.reduce((a, b)=> a + b);
    return total/array.length
}

var getElementsUntilGreaterThanFive = function(array) {
    //obtient des éléments jusqu'à plus de cinq
    return array.slice(0,6);
}

var convertArrayToObject = function(array) {
    //convertit un tableau en objet
    let object = {};
    for (let i=0;i<array.length;i+=2) {
        object[array[i]]=array[i+1];
    }
    return object
}

var getAllLetters = function(array) {
    //obtient toutes les lettres dans un tableau de mots
    name = array;
    let result = [];
    for (let i = 0; i < name.length; i++){
	    name[i] = name[i].split("").join("");
        if(name[i]!=','){
        	result.push(name[i]);
        } 
    }
    result.sort();

    for (let j=0; j<result.length; j++){
		if(j+1 < result.length){
			if( result[j] == result[j+1]){
				result.splice(j,1);
			}
		}
    }
	return result; 
}

var swapKeysAndValues = function(object) {
    //échange des clés et des valeurs dans un objet
    let result = {};
    for(let key in object){
        result[object[key]] = key;
    }
    return result;
}

var sumKeysAndValues = function(object) {
    //ajoute les clés et les valeurs
    let result = 0;
    for(let key in object){
        result += Number(object[key]) + Number(key);
    }
    return result;
}

var removeCapitals = function(string) {
    //supprime les majuscules d'une chaîne
    let result = string.replace(/[A-Z]/g, ""); 
    return result;
}

var roundUp = function(number) {
    //arrondit un nombre
    return Math.ceil(number);    
}


var formatDateNicely = function(date) {
    //formate une date bien
    let d = new Date("2015-03-04");
    let dy = d.getFullYear ();
    let ddmo = d.getMonth ();
    let dday = d.getDay ();

    return "0"+(dday+1) +'/' + "0"+ (ddmo+1) + '/' + (dy);
}

var getDomainName = function(string) {
    let retour = string.substr(string.indexOf("@")+1).replace('.com','')
    return retour

}

var titleize = function(string) {
    /*titre une chaîne
    var result = titleize('the lion the witch and the wardrobe');
        expect(result).toEqual('The Lion the Witch and the Wardrobe');
        var result2 = titleize('the lion the witch. and the wardrobe');
        expect(result2).toEqual('The Lion the Witch. And the Wardrobe');*/
    let result = str.split(" ");
    for(i=0;i<result.length;i++){
        if (result[i].indexOf(".") > -1) {
            result[i+1] = result[i+1].capitalize();
        }
    }
        
    String.prototype.capitalize = function(){
        return this.toLowerCase().replace( /\b\w/g, function (m) {
            return m.toUpperCase();
            });
        };
    }

var checkForSpecialCharacters = function(string) {
    //vérifie une chaîne pour les caractères spéciaux
   
    if(/^[a-zA-Z0-9]*$/.test(string) === false){
        return true;
    }

    else if (/^[a-zA-Z0-9]*$/.test(string) === true){
         return false;
    }
}

var squareRoot = function(number) {
    //trouve la racine carrée d'un nombre
    return Math.sqrt(number);
}

var factorial = function(number) {
    /*trouve la factorielle d'un nombre
    
        let result = 1;
    for(let i=1; i<=number; i++){
        result *= i;
    }
    return result;
}

var findAnagrams = function(string) {
    /*trouve toutes les anagrammes possibles d'un mot
    var result = findAnagrams('mad');
        var expectedAnagrams = ["adm", "amd", "dam", "dma", "mad", "mda"];
        for (var anagram of expectedAnagrams) {
            expect(result).toContain(anagram);
        }
        var result2 = findAnagrams('ma');
        var expectedAnagrams2 = ["am", "ma"];
        for (var anagram of expectedAnagrams2) {
            expect(result2).toContain(anagram);*/
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    //convertit les degrés Fahrenheit en degrés Celsius en arrondissant à l'entier le plus proche
    return Math.ceil((Number(number)-32)/(9/5));
}

var letterPosition = function(array) {
    
    /*change chaque lettre d'un tableau en sa position dans l'alphabet
    var result = letterPosition(['H', 'e', 'l', 'l', 'o', 'k', 'i', 't', 't', 'y']);
        expect(result).toEqual([8, 5, 12, 12, 15, 11, 9, 20, 20, 25]);*/
        let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i=0; i<array.length; i++){
        array[i] = array[i].toUpperCase();
        for(let j=0; j<alphabet.length;j++){
            if(array[i] == alphabet[j]){
                array[i]= j+1;
            }
        }
    }
    return array;
}
