//string length 

let str="grace suji"
console.log(str.length)

// convert uppercase--->toUpperCase()

let string="grace suji"
let name= string.toUpperCase()
console.log(name)

// convert lowercase--->toLowerCase()

let str2="Grace Suji"
let name2= str2.toLowerCase()
console.log(name2)

//trim() method removes whitespace from both sides of a string

let a="      karka     "
b=a.trim()
console.log (b)
console.log(a)
console.log(b.length)
console.log(a.length)

//trimStart() method removes whitespace from starting only
//trimEnd() method removes whitespace from end of the string

let place="   sarel"
let college="    xaviers    "
console.log(place.length)
console.log(college.length)
console.log(place.trimStart())
console.log(college.trimEnd())
place1=place.trimStart()
college1=college.trimEnd()
console.log(place1.length)
console.log(college1.length)

//concat to merge  multiple strings

let a_name ="anbu"
let b_name="dhas"
let c_name="selavam"
console.log(a_name.concat(" ", b_name, " ", c_name))

//pad method -->padEnd(),padStart()
let vow ="app"
vow2 =vow.padStart(4,"s")
console.log(vow2)




