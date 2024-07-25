//Write a function called factorial that takes a parameter n and returns the factorial of n.
// Call the factorial function with different values of n and print the result.

function factorial(n)
{
    fact=1
    for(i=n;i>1;i--)
    {
        fact=fact*i
    }

    console.log(fact)
}
factorial(8)