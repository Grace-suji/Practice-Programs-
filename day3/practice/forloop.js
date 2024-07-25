//print seperately array

let a=[1,3,4,5,7,8,0,3,2,5]
let even=[]
let odd=[]
for(i=0;i<a.length;i++)
{
    if(a[i]%2==0)
    {
        even.push(a[i])
    }
    else{
        odd.push(a[i])
    }
}
console.log(even)
console.log(odd)

// to print array values seperately

let nums=[1,2,3,4,5,6,7,8,9]
for(i=0;i<nums.length;i++)
{
    console.log(a[i])
}