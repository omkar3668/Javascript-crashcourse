//map method use for operations
const nums = [1,2,3,4,5,6,7,8,9,10];

// const addedNum = nums.map((num)=> num + 10)
// console.log(addedNum);

//Chaning


const result = nums.map((num)=> num * 10).map((num)=> num + 1).filter((num)=> num > 40)
console.log(result);