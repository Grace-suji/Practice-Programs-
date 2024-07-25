//Write a program to count the occurence of even numbers and odd numbers between the range 10 – 55.
let even=[]
let odd=[]
for(i=10;i<=55;i++)
{
    if(i%2==0)
    {
        even.push(i)
    }
    else{
        odd.push(i)
    }
}
console.log(even)
console.log(even.length)
console.log(odd)
console.log(odd.length)