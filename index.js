// If / Else statements

if (4 > 5){
  console.log("it's bigger")
} else {
  console.log("not bigger")
}

//condition ? if it's true, it comes here : else part
const myTernary = 4 > 5 
  ? "it's bigger" 
  : "not bigger"

const chained = 4 > 5 
  ? "it's bigger" 
  : 4 < 5 
  ? "do this"
  : "boo"

//Functions

//1. Separate block of code that runs when called

//declared a function
function add(a, b){ //gave it parameters
  console.log(a + b) // I can't save this value
  return a + b //perfom a task
}

const sum = add(3, 4) //call the function
console.log("sum", sum) //console.logging the result

const addArrow = () => { return a + b }

function subtract(a, b){ //gave it parameters
  return a - b //perfom a task
}

const subtractArrow = (a, b) => { 
  return a - b //perfom a task
} 

const subtractArrowOneLine = (a, b) => a - b

