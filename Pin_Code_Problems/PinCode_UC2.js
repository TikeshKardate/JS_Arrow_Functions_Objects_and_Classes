/*
PIN Code UC 2
Restrict the PIN code from taking alphabets or special
characters at the beginning.
Check for A400088 – this should fail
*/

function isValidPin(pin) {
    return /^[0-9][0-9]*$/
    .test(pin); 
}
function testCases(pin){

if (isValidPin(pin)) {
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN");
}
}

let pin = "A400088";
testCases(pin);

console.log();

let pin2 = "400088";
testCases(pin2);