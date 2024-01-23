class user {
    constructor(username){
        this.username = username
    }

    userlogin(){
        return `${this.username} is login`
    }
}

class Teacher extends user {
    constructor(username,email, password){
        super(username)
        this.email = email
        this.password = password
    }

    teacherlogin(){
        return `${this.email} is teacher of student is ${this.username}.`
    }
}

const student = new user("omkar")
const teacher = new Teacher("omi","hitesh@gmail.com", 335566)

console.log(student.userlogin());
console.log(teacher.teacherlogin());