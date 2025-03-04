/*
PIN Code UC 1
The Postal Index Number (PIN) or PIN Code is a 6
digit code of Post Office numbering used by India Post.
Create a regex pattern to validate PIN code 400088 PIN Code UC 1
*/

function isValidPin(pin) {
    return /^[1-9][0-9]{5}$/.test(pin);
}
function testCases(pin){
if (isValidPin(pin)) {
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN");
}
}

let pin2 = "400088";
testCases(pin2);