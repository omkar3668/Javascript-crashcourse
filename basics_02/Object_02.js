


//for symbol
const mysym =  Symbol("key1")

//object syntax
const jsUser = {
    userName : "omkar",
    userID : 66778,
    emailId : "omsable3668@gmail.com",
    mobNo: 8668419860,
    [mysym]:"mykey1"
}
//get value
console.log(jsUser.mobNo);
console.log(jsUser["userName"]);
console.log(jsUser[mysym]);

// to freez object
// Object.freeze(jsUser);
//to change value in object
jsUser.userID = 7778899
console.log(jsUser.userID);

jsUser.getMobNum = function(){
    console.log(`my name is ${this.userName} & my new mobile number is ${this.mobNo}`);
}

console.log(jsUser.getMobNum());

