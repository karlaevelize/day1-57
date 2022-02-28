# Topics

- Terminal Commands
- Data Types
- JS Operators
- If Statements / Ternary
- Functions / Arrow Functions

## Terminal Commands

- cd: navigate directions
- ls: list 
- touch: create file
- mkdir: create directory
- pwd: print working directory
- rm: remove a file
- rm -rf: deletes directory (!! be careful)
- sudo: outruns permissions/privileges (!! be careful)
- clear: cleans terminal
- exit: close the terminal

- ctr + a || ctr + e: end and beginning of line
- ctr + c
- tab
- option + clicl (select area)
- whoami

- node: run the files
- code: opens VSCCode

## JavaScript Data Types

- Number `(1, 2, 5)`
- String `"hello", "bye"`  

```js
const template = `Hello, ${name}`
const badHabit = "Hello, " + name
```

- Boolean `true, false`
- Object `collections`

```js
const name = "Karla"
const age = 26
const hasPets = true
//object
const person = {
  name: "Karla",
  age: 26,
  hasPets: true
}

//array
const people = [
  {
  name: "Karla",
  age: 26,
  hasPets: true
  },
  {
  name: "Karla",
  age: 26,
  hasPets: true
  }
]

```
- Undefined

- Null

## Comparison Operators

- && `when both sides are true`
- || `when one of the statements is true`
- = (assigns) / == (compares only value) / === (compares value AND data type)

```js
 5 === parseInt("5") ? "equal" : "not equal" //resolves to equal
 5 + 5 //rsolves to 10
 5 + "5" //resolves to 55
```

- ! `not operator` != (only compares value) !== (compares value AND data type)
- >, <, >=, <=
