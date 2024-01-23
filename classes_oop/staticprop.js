class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }

    static createId(){
       return '123'
    }
}

const omkar = new user("Omkar")

// console.log(omkar.createId());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "I@Paymen.com")
iphone.logMe()
console.log(iphone.createId())