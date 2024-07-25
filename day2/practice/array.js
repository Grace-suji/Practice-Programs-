
let a =[1,2,3,4,5,6,7,8]
a[8]=10
a[9]=a[2]-a[1]
console.log(a)
console.log(a[1])

//string
let b =["abi","suji","ren"]
b[2]="ish"
console.log(b)

//length function (does not have ())
let c=[2,3,4,5,6,7,8,9,1,2,3,4,2,3,2,32,232,32,323,,23232,232,4,4,556]
console.log(c.length)

// function with array
function array()
{
    let  d=[ 1,2,3,4,5,6,7,8,9]
    return d
}
let z = array()
console.log(z)


//array convert to string
let e =["apple","is","a","fruit"]
f=e.toString()
console.log(e.toString())
console.log(f.length)

// add value using push()----> will add at last

let h =["suji", "apple", "orange"]
h.push("ren","ish")
console.log(h)

//// add value using pop()----> will delete at last value only

let g =["suji", "apple"]
g.pop()
console.log(g)

// add the value at first of the array---->unshift()
let bikes=["yamaha","KTM","TVS","RE"]
bikes.unshift("ducati","volttron")
console.log(bikes)

//delete the value at first of the array---->shift() delete one value at a time
let bikes1=["yamaha","KTM","TVS","RE"]
bikes1.shift()
bikes1.shift()
console.log(bikes1)

//sort/reverse    order the values

let cars=["Swift","bmw","audi","benz"]
cars.sort()
console.log(cars)
cars.reverse()
console.log(cars)

let k = [9,99,13,12,14,19,16,18,17,15,20]
console.log(k.sort())
console.log(k.reverse())

// splice method to add new items in array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,1);
console.log(fruits)

//spliced -->toSpliced()

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 2);
console.log(spliced)

//slice --
const clrs = ["Banana", "Orange", "Apple", "Mango"]
console.log(clrs.slice(1,3))

//at method

let alph=["a","b","c","d"]
console.log(alph.at(2))


