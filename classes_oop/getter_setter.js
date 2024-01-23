class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
       this._password = value.toUpperCase()
    }
}

const omkar = new User("Omkar@gmail.com", "No-mercy")
console.log(omkar.password);