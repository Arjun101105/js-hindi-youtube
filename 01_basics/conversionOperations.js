let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
// output shows NaN(not a numeber, because "33abc" is not a pure number)
// in case of null output is object , object , number 0
// in case of undefined output is undefined , undefined, number Nan
// in case of boolean value output is boolean boolean number 1
// "33" => 33
// "33abc" NaN
// "true" => 1 ; "false" => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0=> flase
// "" => false
// "Arjun" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

// *************** Operations ***************//

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2**2) => 2 to the power to , similarly 2**3 => 2 to the power 3//

let str1 = "hello"
let str2 = " Arjun"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log("1" + 2 + 2)
console.log(2 + 2 + "1")
// this type of code is very messsy and unreadable.... make use of parenthesis

console.log(+true); // + true => 1 .... and empty parenthesis +"" => 0
console.log(+"")

// prefix and postfix in js mdn

