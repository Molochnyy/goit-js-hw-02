'use strict';



// type_1

function checkForSpam(message) {
    const a = message.toLowerCase();
    const b = a.includes("spam") || a.includes("sale");
    if (b) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    return b;
}

let d = (checkForSpam("Latest technology news"));
console.log(d);
d = (checkForSpam("JavaScript weekly newsletter"));
console.log(d);
d = (checkForSpam("Get best sale offers now!"));
console.log(d);
d = (checkForSpam("Amazing SalE, only tonight!"));
console.log(d);
d = (checkForSpam("Trust me, this is not a spam message"));
console.log(d);
d = (checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(d);
d = (checkForSpam("[SPAM] How to earn fast money?"));
console.log(d);

// type_2

function checkForSpam1(message1) {
    const a1 = message1.toLowerCase();
    const b1 = a1.includes("spam");
    const c1 = a1.includes("sale");
    if (b1) {
        console.log(true);
    }
    else if (c1) {
        console.log(true);
    }
    else {
        console.log(false);
    }
    return;
}

let d1 = (checkForSpam1("Latest technology news"));
console.log(d1);
d1 = (checkForSpam1("JavaScript weekly newsletter"));
console.log(d1);
d1 = (checkForSpam1("Get best sale offers now!"));
console.log(d1);
d1 = (checkForSpam1("Amazing SalE, only tonight!"));
console.log(d1);
d1 = (checkForSpam1("Trust me, this is not a spam message"));
console.log(d1);
d1 = (checkForSpam1("Get rid of sPaM emails. Our book in on sale!"));
console.log(d1);
d1 = (checkForSpam1("[SPAM] How to earn fast money?"));
console.log(d1);


// type_3

function checkForSpam2(message2) {
    const a2 = message2.toLowerCase();
    const b2 = a2.trim();
    return b2.includes("spam") || b2.includes("sale") ? true : false;

}

let d2 = (checkForSpam2("Latest technology news"));
console.log(d2);
d2 = (checkForSpam2("JavaScript weekly newsletter"));
console.log(d2);
d2 = (checkForSpam2("Get best sale offers now!"));
console.log(d2);
d2 = (checkForSpam2("Amazing SalE, only tonight!"));
console.log(d2);
d2 = (checkForSpam2("Trust me, this is not a spam message"));
console.log(d2);
d2 = (checkForSpam2("Get rid of sPaM emails. Our book in on sale!"));
console.log(d2);
d2 = (checkForSpam2("[SPAM] How to earn fast money?"));
console.log(d2);