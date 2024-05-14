'use strict';

function getShippingCost(country) {
    let price = [100, 250, 170, 120];

    switch (country) {
        case "China":
            console.log(`Shipping to ${country} will cost ${price[0]} credits`);
            break;
        case "Australia":
            console.log(`Shipping to ${country} will cost ${price[2]} credits`);
            break;
        case "Chile":
            console.log(`Shipping to ${country} will cost ${price[1]} credits`);
            break;
        case "Jamaica":
            console.log(`Shipping to ${country} will cost ${price[3]} credits`);
            break;
        default:
            console.log("Sorry, there is no delivery to your country");
    }
    return country;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));