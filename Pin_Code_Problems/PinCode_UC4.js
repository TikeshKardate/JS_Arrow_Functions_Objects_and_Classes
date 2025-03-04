/*
PIN Code UC 4
Make sure 400 088 is also valid along with 400088
*/

function isValidPin(pin) {
    return /^[1-9][0-9]{2}\s?[0-9]{3}$/.test(pin);
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

let pin2 = "400 088";
testCases(pin2);