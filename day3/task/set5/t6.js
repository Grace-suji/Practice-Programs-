//Write a program that calculates the average of numbers in an array using a for loop.

let a=[1,2,3,4,5,6,7]
let sum=0
let ans=0
let b=a.length
for(i=0;i<b;i++)
{
    sum=sum+a[i]
    ans =sum/b

}
console.log(sum)
console.log(ans)