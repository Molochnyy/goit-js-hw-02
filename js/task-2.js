'use strict';


function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        message;
    }
    else {
        message.slice(0, maxLength) + "...";
    }
}
let b = (formatMessage("Curabitur ligula sapien", 16));
console.log(b);
b = (formatMessage("Curabitur ligula sapien", 23));
console.log(b);
b = (formatMessage("Vestibulum facilisis purus nec", 20));
console.log(b);
b = (formatMessage("Vestibulum facilisis purus nec", 30));
console.log(b);
b = (formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(b);
b = (formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
console.log(b);


function formatMessage1(message1, maxLength1) {
    return message1.length <= maxLength1 ? message1 : message1.slice(0, maxLength1) + "...";
}
console.log(formatMessage1("Curabitur ligula sapien", 16));
console.log(formatMessage1("Curabitur ligula sapien", 23));
console.log(formatMessage1("Vestibulum facilisis purus nec", 20));
console.log(formatMessage1("Vestibulum facilisis purus nec", 30));
console.log(formatMessage1("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage1("Nunc sed turpis a felis in nunc fringilla", 41));