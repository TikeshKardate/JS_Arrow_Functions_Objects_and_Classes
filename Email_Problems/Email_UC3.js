/*
Email UC 3
Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co
*/

function isValidEmail(email) {
    return /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co$/.test(email);
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