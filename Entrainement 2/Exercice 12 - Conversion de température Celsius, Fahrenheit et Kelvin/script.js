function calcul(val, type) {
    if (type == 1)
        return ((val*1.8)+32).toFixed(2);
    else if (type == 2)
        return (val+273.15).toFixed(2);
    else if (type == 3)
        return ((val-32)/1.8).toFixed(2);
    else if (type == 4)
        return ((((val-32)/1.8)+273.15)).toFixed(2);
    else if (type == 5)
        return (val-273.15).toFixed(2);
    else if (type == 6)
        return (((val-273.15)*1.8)+32).toFixed(2);
}

function conversionTemperature() {
    let choice = 1;
    let value = 0;
    while(parseInt(choice) != 0) {
        choice = prompt("Choisissez votre conversion :");

        if (parseInt(choice) == 1) {
            value = prompt("Votre temperature en Celcius :")
            alert(parseFloat(value).toFixed(2)+" Celcius = "+calcul(parseFloat(value).toFixed(2), parseFloat(choice).toFixed(2))+" Fahrenheit");
        } 
        else if (parseInt(choice) == 2) {
            value = prompt("Votre temperature en Celcius :")
            alert(parseFloat(value).toFixed(2)+" Celsius = "+calcul(parseFloat(value).toFixed(2), parseFloat(choice).toFixed(2))+" Kelvin");
        } 
        else if (parseInt(choice) == 3) {
            value = prompt("Votre temperature en Fahrenheit :")
            alert(parseFloat(value).toFixed(2)+" Fahrenheit = "+calcul(parseFloat(value).toFixed(2), parseFloat(choice).toFixed(2))+" Celsius");
        } 
        else if (parseInt(choice) == 4) {
            value = prompt("Votre temperature en Fahrenheit :")
            alert(parseFloat(value).toFixed(2)+" Fahrenheit = "+calcul(parseFloat(value).toFixed(2), parseFloat(choice).toFixed(2))+" Kelvin");
        } 
        else if (parseInt(choice) == 5) {
            value = prompt("Votre temperature en Kelvin :")
            alert(parseFloat(value).toFixed(2)+" Kelvin = "+calcul(parseFloat(value).toFixed(2), parseFloat(choice).toFixed(2))+" Celsius");
        } 
        else if (parseInt(choice) == 6) {
            value = prompt("Votre temperature en Kelvin :")
            alert(parseFloat(value).toFixed(2)+" Kelvin = "+calcul(parseFloat(value).toFixed(2), parseFloat(choice).toFixed(2))+" Fahrenheit");
        } 
        else if (parseInt(choice) == 0) {
           break
        }
    }
}