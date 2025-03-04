/*
Email UC 1
Validate Email address with a regex. The email consists of minimum 3 and optional 2 more
parts with mandatory @ and . abc.xyz@bridgelabz.co.in
Here abc, bridgelabz and co are mandatory and the remaining 2 are optional
To begin with lets validate the mandatory part and start with abc
*/

function isValidEmail(email) {
    return /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/.test(email);
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

let email3 = "xyz@bridgelabz.co.in"; 
testCases(email3);