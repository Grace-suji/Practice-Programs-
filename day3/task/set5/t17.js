//Write a program to print the greatest of two numbers.

function findGreatest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const greatest = findGreatest(20,30);
console.log("The greatest number is:", greatest);