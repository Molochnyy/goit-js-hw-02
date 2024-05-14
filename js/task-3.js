'use strict';



function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;

}
let message = getElementWidth("50px", "8px", "4px");
console.log(message);
message = getElementWidth("60px", "12px", "8.5px");
console.log(message);
message = getElementWidth("200px", "0px", "0px");
console.log(message);