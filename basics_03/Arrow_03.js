
//Ways of writing function 
//normal function

function chai(){
return`I want chai`
}
console.log(chai());

//function expression

    const newChai = function(){
        return`I want chai`
        }
    console.log(newChai());

// this keyword refering current object
myTapri ={ 
    chai:"black chai",
    coffe:"cold coffee",

     order : function (){
        console.log(`Today I wanted 1 ${this.chai} & 2 ${this.coffe} please!`); 
    }
}
myTapri.order();
myTapri.coffe = "hot coffee"
myTapri.order();

//Arrow function
// () => {}
//()=>()
//we don't use this keyword inside arrow function
const addTwo = (num1, num2) => {
     console.log(num1 + num2);
}
addTwo(5,9);
