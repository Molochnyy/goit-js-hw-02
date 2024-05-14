'use strict';


function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = pricePerDroid * quantity;

    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;

}
let message = (makeTransaction(5, 3000));
console.log(message);
message = (makeTransaction(3, 1000));
console.log(message);
message = (makeTransaction(10, 500));
console.log(message);

