'use strict';

function getShippingCost(country) {
    let price = [100, 250, 170, 120];

    switch (country) {
        case "China":
            return `Shipping to ${country} will cost ${price[0]} credits`;
            break;
        case "Australia":
            return `Shipping to ${country} will cost ${price[2]} credits`;
            break;
        case "Chile":
            return `Shipping to ${country} will cost ${price[1]} credits`;
            break;
        case "Jamaica":
            return `Shipping to ${country} will cost ${price[3]} credits`;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
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