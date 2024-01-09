function setUserName(username){
  this.username = username
  console.log("called");
  console.log(this.username);
}

function user(username, email ,password){
   setUserName.call(this, username)
    console.log(`${this.username}`);
    this.email = email
    this.password = password
}

const user1 = new user("omkar", "omsable@gmail.com", "1234") 
console.log(user1);