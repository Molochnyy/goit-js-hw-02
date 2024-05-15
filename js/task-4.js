'use strict';

function getShippingCost(country) {
    let price = [100, 250, 170, 120];

    switch (country) {
        case "China":
            let message = `Shipping to ${country} will cost ${price[0]} credits`;
            console.log(message);
            break;
        case "Australia":
            message = `Shipping to ${country} will cost ${price[2]} credits`;
            console.log(message);
            break;
        case "Chile":
            message = `Shipping to ${country} will cost ${price[1]} credits`;
            console.log(message);
            break;
        case "Jamaica":
            message = `Shipping to ${country} will cost ${price[3]} credits`;
            console.log(message);
            break;
        default:
            message = "Sorry, there is no delivery to your country";
            console.log(message);
    }
    return message;
}

let a = (getShippingCost("Australia"));
console.log(a);
a = (getShippingCost("Germany"));
console.log(a);
a = (getShippingCost("China"));
console.log(a);
a = (getShippingCost("Chile"));
console.log(a);
a = (getShippingCost("Jamaica"));
console.log(a);
a = (getShippingCost("Sweden"));
console.log(a);