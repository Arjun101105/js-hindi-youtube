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

