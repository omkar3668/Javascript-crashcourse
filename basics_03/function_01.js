

//function syntax
function addTwoNum(num1, num2){
   return num1 +num2
}

console.log(addTwoNum(4,6));

function loginUserMessage (userName){
    if(!userName){
        return `hi please enter user name ${userName}`
    }
    return `${userName} just logeed in.`
}
console.log(loginUserMessage("omkar"))


function loginUserMessage (userName){
    if(userName === undefined){
        return `hi please enter your user name ${userName}`
    }
    return `${userName} just logeed in.`
}
console.log(loginUserMessage())
 
//rest operator ... look similar like spread operator based on usecase.
// cart example
function newArr (...val){
return val
}
console.log(newArr(200,500,1000,5000).pop());

//Objects in functions

myobj = {
    firstName:"omkar",
    lastName:"sable",
    rollNo:88
}

function handelobject (anyObj){
return `My Name is  ${anyObj.firstName} ${anyObj.lastName} & roll no is ${anyObj.rollNo}. `
}

console.log(handelobject(myobj));

//Arrays in function

let myArr = ["red", "yellow" ,"orage", "green"]

function handelArray (anyArray){
   return anyArray[1];
}

console.log(handelArray(myArr));

