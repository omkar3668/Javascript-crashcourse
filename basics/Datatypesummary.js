// primative data types = number, bigint, string, symbol, boolean, undefined, null
// non-primative data types = object, array ,function

const pi = 3.14 
console.log(typeof pi);

let sum = 1908882888888888n
console.log(typeof sum);

let firstName ="omkar"
console.log(typeof firstName);

let Id1 = Symbol(443663)
let Id2 = Symbol(443663)
console.log(Id1 == Id2);

let answer = true;
console.log(typeof answer);

let cost;
console.log(typeof cost);

cost = null
console.log(typeof cost);


let info = {
    firstName: "omkar",
    age: 24,
    lastName: "sable"
}
console.log(typeof info);

let average = [24, 34, 55, "88", true]
console.log( typeof average);

let summestion = function addition() {
    4 + 4; 
}
console.log(summestion);
console.log(typeof summestion);