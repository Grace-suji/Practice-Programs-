//Given two integer numbers return their product. If the product is greater than 500, then return their sum.
function numbers(a,b)
{
    ans=a*b
    if(ans>=500)
    {
        return (a+b)
    }
}
let result=numbers(50,40)
console.log(result)