/*
Email UC 5
Finally lets close the expression with supporting optional parts.
Note: Top Level Domains (TLD) in the last part is the optional country code and its 2 characters only
*/


function isValidEmail(email) {
    return /^abc([._+\-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/.test(email);
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