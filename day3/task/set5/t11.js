//iterate the given array of numbers and print only those numbers which are divisible by 5.

let numbers=[21,45,67,65,95,55,37,24,10,50,95,33]
console.log("numbers which are divisible by 5:")
for(i=0;i<numbers.length;i++)
{
    if(numbers[i]%5==0)
    {
        console.log(numbers[i])
    }

}
