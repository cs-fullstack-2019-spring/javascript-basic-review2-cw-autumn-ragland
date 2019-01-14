//Create a function that returns 5 more than the integer sent to it.
// Assume the user only enters integers.
// Challenge: If the wrong data type is sent to one of the functions print "ERROR".

function addFive(input)
{
    if (isNaN(input))
    {
        return "ERROR"
    }
    else
    {
        return input + 5
    }
}
var input = parseInt(prompt("Enter a number"));
console.log(addFive(input));

// Create a different function that adds " is awesome" to any strings sent to it.
// Challenge: If the wrong data type is sent to one of the functions print "ERROR".


function addAwesome(string)
{
    if (!isNaN(string))
    {
        return "ERROR"
    }
    else
    {
        return(string + " is awesome")
    }
}
var string = prompt("Enter your name");
console.log(addAwesome(string));