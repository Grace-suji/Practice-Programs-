//find minimum element in array

let a=[10,8,2,3,6,9]
let min=a[0]

for(i=1;i<a.length;i++)
{
    if(a[i]>min)
    min=a[i]
}
console.log(min)

