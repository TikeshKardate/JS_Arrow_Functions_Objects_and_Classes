/*
PIN Code UC 3
Restrict the PIN code from taking alphabets or special characters at the End.
Check for 400088B – this should fail
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

let pin = "400088B";
testCases(pin);

console.log();

let pin2 = "400088";
testCases(pin2);