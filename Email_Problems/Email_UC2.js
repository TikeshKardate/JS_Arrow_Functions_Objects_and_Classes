/*
Email UC 2
Ensure @ and validate the mandatory 2nd part i.e. bridgelabz
*/

function isValidEmail(email) {
    return /^abc(\.[a-zA-Z0-9]+)?@bridgelabz$/.test(email);
}

function testCases(email) {
    if (isValidEmail(email)) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
    }
}

let email1 = "abc@bridgelabz.co";
testCases(email1);

let email2 = "abc.xyz@bridgelabz.co.in";
testCases(email2);

let email3 = "abc@bridgelabz"; 
testCases(email3);