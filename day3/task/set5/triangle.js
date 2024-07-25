////Write a program that uses nested for loops to draw patterns  triangles

let size=5
for(i=0;i<size;i++)
{
    row=" "
    for(j=0;j<=i;j++)
    {
        row+=" * "
    }
    console.log(row)
}
