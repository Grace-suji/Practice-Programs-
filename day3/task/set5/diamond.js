////Write a program that uses nested for loops to draw patterns  diamonds

let size = 3
for(i=0;i<size;i++)
{
let row=""
    for(j=0;j<size;j++)
    {
        if( i==0  && j==1)
        {
            row+=" * "
        }
        else if( i==1)
        {
            row+=" * "
        }
        else{
            row=""
        }
        
    }
    console.log(row)
}