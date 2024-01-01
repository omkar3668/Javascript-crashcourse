
// push() adds new items to the end of an array
// pop remove last element from array 
// shift() removes the first item of an array:
// unshift() adds new items to the beginning of an array:
// concat adding two arrays
// spread is also same adding multiple array in single array [...arr1, ...arr2]
// Array.slice() returns selected array elements as a new array:
// The Array.splice() method adds array elements:

const mynum = [1,2,3,4]
console.log(mynum.pop());
console.log(mynum);

console.log(mynum.push(6));
console.log(mynum);

console.log(mynum.shift());
console.log(mynum);

console.log(mynum.unshift(0));
console.log(mynum);

const netflix = ["dark", "strangerthings", "bluelock"]
const hotstar = ["GOT", "prisonbreak", "12th fail"]
const amazonprime = ["flame", "Hosteldays", "familyman"]

const OTT = netflix.concat(hotstar);

console.log(OTT);

const OTT1 = [...amazonprime, ...hotstar, ...netflix];

console.log(OTT1);


const newArr = new Array (12222,222,333,5555,7777);

console.log(newArr.slice(1,3));
console.log(newArr.splice(1,3));

