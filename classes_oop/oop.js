// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function user (username, islogin){
    this.username = username
    this.islogin = islogin

    const greeting = function(){
        console.log(`welcome ${this.username}`);
    }
}

const user1 = new user("omkar", true)
const user2 = new user("rohit", true)

console.log(user1);
console.log(user2);