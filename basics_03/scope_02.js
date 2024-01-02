//let ,const, var
//here let & const follows the concept of block scope var not follow

if (true){

    let a= 4;
    const b= 5;
    var c = 6;
    console.log(a);
    console.log(b);
}

console.log(c);


//if we add function inside function inside function can get values from outside
//child can get from parent but parent can't get from child.
function addOne (num1){
    console.log(num1 +1);
    function addTwo(num2) {
        console.log(num2 + num1);
    }
   addTwo(2);
}
addOne(1);