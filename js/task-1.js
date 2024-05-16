'use strict';


function makeTransaction1(quantity1, pricePerDroid1, customerCredits1) {
    const totalPrice1 = pricePerDroid1 * quantity1;
    if (totalPrice1 > customerCredits1) {
        return ("Insufficient funds!");
    }
    else {
        return (`You ordered ${quantity1} droids worth ${totalPrice1} credits!`);
    }
}
let message1 = (makeTransaction1(5, 3000, 23000));
console.log(message1);
message1 = (makeTransaction1(3, 1000, 15000));
console.log(message1);
message1 = (makeTransaction1(10, 5000, 8000));
console.log(message1);
message1 = (makeTransaction1(8, 2000, 10000));
console.log(message1);
message1 = (makeTransaction1(10, 500, 5000));
console.log(message1);




function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = pricePerDroid * quantity;
    return totalPrice > customerCredits ? "Insufficient funds!" : `You ordered ${quantity} droids worth ${totalPrice} credits!`;

}

let message = (makeTransaction(5, 3000, 23000));
console.log(message);
message = (makeTransaction(3, 1000, 15000));
console.log(message);
message = (makeTransaction(10, 5000, 8000));
console.log(message);
message = (makeTransaction(8, 2000, 10000));
console.log(message);
message = (makeTransaction(10, 500, 5000));
console.log(message);