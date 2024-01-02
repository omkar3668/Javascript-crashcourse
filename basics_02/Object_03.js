
//singleton - object made by using constructor.

// const myuser = new Object();
// console.log(myuser);

const newUser = {
    isLoggedIn: false,
    userId:1233,
    userName:"omkar"
}
console.log(newUser);

//by using spread operator you can add multiple object
const user1 ={ 1:"a", 2:"b"}
const user2 = {3:"c", 4:"d"}

const user3 = {...user1 ,...user2}

console.log(user3);

// by assign 

const user4 = Object.assign({}, user1, user2)
console.log(user4);

//we can get all keys of object inside array
console.log(Object.keys(newUser));


//we can get all values of object inside array
console.log(Object.values(newUser));

newUser.userName = "shubham"
console.log(newUser);