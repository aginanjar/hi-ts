// # String Type
var message: string = "Hello world!!"
let intro: string = `${message} Today is ${(new Date()).toString()}`
console.log(intro)

// # Number Type
// var myNumber: number = "1" // error TS2322: Type '"1"' is not assignable to type 'number'.
var myNumber: number = 1
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(myNumber)
console.log(decimal, hex, binary, octal)

// let letNumber: number = '13' // Displaying error ..
let letNumber: number = 13
letNumber = 14
console.log(letNumber)

// # Boolean Type
const constBoolean: boolean = true
// constBoolean = false // Displaying error : TS2588: Cannot assign to 'constBoolean' because it is a constant.
console.log(constBoolean)

// # Array
let arrayNumber: number[] = [1,2,4]
console.log(arrayNumber)
let arrayString: string[] = ['11', 'twelve']
console.log(arrayString)
let anotherArray: Array<number> = [5,6,7]
console.log(anotherArray)
// Multidimentional array
let matrixArr: number[][] = [[1], [2]]
console.log(matrixArr)

// # Tuple
let tupleExample: [string, number]
tupleExample = ['id', 20]
// tupleExample = [20, 'id'] // Displaying error ...

// # Enum
enum Food{ Rendang, Burger, Steak }
let enumRendang: Food = Food.Rendang
console.log(Food)
console.log(enumRendang)

// # Any 
let anyType: any;
anyType = 2
console.log(anyType)

anyType = `This is string message`
console.log(anyType)

anyType = false
console.log(anyType)

let anyArray: any[]  = [0.99, 'Sure', true]
console.log(anyArray)

let anyOtherArray: Array<any> = [90]
console.log(anyOtherArray)

anyOtherArray = ['Typescript']
console.log(anyOtherArray)


// # Object
let obj: object
obj = undefined || {}
obj = { fullname : 'John Doe' }
console.log(obj)

// # Scoping (var, let, const)
// # var
function testVar(index: number): number {
  for(var i = 0; i < index; i++) {}

  return i
}

console.log(testVar(4))

// # let
function testLet(index: number): number {
  let result = 0
  for(let l = 0; l < index; l++) {
    result = l
  }

  try {
    return result
  }
  catch(e) {
    console.log(e)
  }

  // return l // Will displaying error, because l wasn't declared. l was declared on for statement
}

console.log(testLet(0))
console.log(testLet(4))

// # Type Aliases
type customType = string | number
function whatTypeIs(x: customType) {
  return x
}

console.log(whatTypeIs('lel'))
console.log(whatTypeIs(86))
