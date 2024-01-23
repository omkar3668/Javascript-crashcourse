//ES6

// class user {
//     constructor(username, email, password){
//          this.username = username
//          this.email = email
//          this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abcd`;
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai" ,"chai@gamil.com", "1223")
// console.log(chai.encryptPassword())
// console.log(chai.changeUserName())


//////////behind the scence ////////////

function user (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abcd`;
}

const tea = new user("tea" ,"tea@gamil.com", "122aa3")

console.log(tea.encryptPassword())