//Write a Python program that determines if a given year is a leap year.Enter a year as input. Use conditional statements to check if the year satisfies the leap year conditions: 
//The year should be divisible by 4 but not divisible by 100, or The year should be divisible by 400. 
//Use appropriate logical operators and conditions to implement the leap year logic. 
//Display an appropriate message indicating whether the year is a leap year or not. 
//Example output: Enter the year=2024 2024 is a leap year

// function leapYear(year)
// {
//     if((year%4==0 &&year%100!=0) && (year%400==0))
//      {
//         console.log(year+ " is a leap year")
//      }
//     else
//     {
//         console.log(year+ "is not a leap year")
//     }
// }
// // let year = parseInt(prompt("Enter the year:"))
// leapYear(2044)

//python

// year = int(input("Enter the year: "))

// if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
//     print(f"{year} is a leap year")
// else:
//     print(f"{year} is not a leap year")
let arr=[1,2,3,4,10,11]
let ans=arr.reduce((acc,val)=>acc+val,0)
console.log(ans)