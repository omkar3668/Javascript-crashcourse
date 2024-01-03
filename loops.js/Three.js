
//for of loop


myarr =[1,2,3,4,5]

for (const item of myarr) {
    // console.log(item);
}


const greetings = "hello world"

for (const greet of greetings) {
    // console.log(greet);
}

//Map

const map = new Map();

map.set('IN', "India" )
map.set('UK', "England")
map.set('FR', "France")

console.log(map);

for (const [key ,value] of map) {
   console.log(`${key} is short form of ${value}`);
}


//....Note>>> Object is not itertable in for of loop.
// myobject = {
//     firstName:" omkar",
//     lastName : "sable"
// }

// for (const item of myobject) {
//     console.log(item);
// }
