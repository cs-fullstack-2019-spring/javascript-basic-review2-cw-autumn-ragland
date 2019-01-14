//Ask the user to enter a 4 digit code. Ask the user to enter the password again.
//If the passwords are the same print "Password is set."
//If the passwords are different print "ERROR, Passwords are different."

var code1 = prompt("Enter your code");
var code2 = prompt("Enter your code again");

if (code1 === code2)
{
    console.log("Password is set.")
}
else
{
    console.log("Error, passwords are diffrent")
}