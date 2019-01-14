//Create a function that is sent two integers, then print from the first integer to the second integer.
// Assume the first integer is less than the second integer.

function counting(num1,num2)
{
    for (i=num1; i<=num2; i++)
    {
        console.log(i)
    }
}

var num1 = 1;
var num2 = 15;

counting(num1,num2);