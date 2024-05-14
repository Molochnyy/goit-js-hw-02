'use strict';



// type_1

function checkForSpam(message) {
    const a = message.toLowerCase();
    const b = a.includes(spam) || a.includes(sale);
    if (b) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    return b;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));

// type_2

function checkForSpam(message) {
    const a = message.toLowerCase();
    const b = a.includes(spam);
    const c = a.includes(sale);
    if (b) {
        console.log(true);
    }
    else if (c) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    return a;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));


// type_3

function checkForSpam(message) {
    const a = message.toLowerCase();
    const b = a.trim();
    return b.includes(spam) || b.includes(sale) ? true : false;

}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));