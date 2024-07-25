let a=[1,3,5,7,3,9]

for(i=0;i<a.length;i++)
{
    fact=1
    for(j=a[i];j>1;j--)
    {
        fact*=j
    }
    console.log(fact)
}