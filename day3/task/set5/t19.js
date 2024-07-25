//Write a program to separate positive and negative numbers from a list.
	//Input:  Given x = [23, 4, -6, 23, -9, 21, 3, -45, -8]
 let x= [23, 4, -6, 23, -9, 21, 3, -45, -8] 
 let positive=[]
 let negative=[]
for(i=0;i<x.length;i++)
{
    if(x[i]<0)
    {
        positive.push(i)
    }
    else{
        negative.push(i)
    }

} 
console.log(positive)
console.log(negative)

