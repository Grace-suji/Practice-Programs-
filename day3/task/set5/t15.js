//Write a program that takes an array of numbers and calculates the factorial of each element using a for loop, then prints the results.
let arr = [5, 3, 7, 2, 4];
function Factorials(arr) 
{
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        let fact = 1;
        for (let j = n; j>1; j--) {
            fact *= j;
        }
        results.push(fact);
    }
    return results;
}
const factorials = Factorials(arr);
console.log(factorials);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]! = arr[j]);
// }