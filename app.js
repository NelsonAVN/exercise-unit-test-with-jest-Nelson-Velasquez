const sum =(a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87, // libra esterlina
};

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
    
}

// We include fromEuroToDollar here as well because it needs to be exported

 
// Yen to dollar
const fromDollarToYen = function(valueInEuro) {
   let valueInYen = valueInEuro * 156.5 / 1.07
   return valueInYen;
}



const fromYenToPound = function (valueInEuro) {
    let valueInPound = valueInEuro * 0.87 / 156.5
    return valueInPound
}

console.log(fromDollarToYen(100)); // Convertir 100 dólares a yen
console.log(fromEuroToDollar(100)); // Convertir 100 euros a dólares
console.log(fromYenToPound(10000)); // Convertir 10000 yenes a libras


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
