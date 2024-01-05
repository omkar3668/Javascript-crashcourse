//Reduce Method.

const nums = [1,2,3,4]

const total = nums.reduce((acc , curval )=>{ return acc + curval},0)

console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetoPay = shoppingCart.reduce((acc, curval)=> acc + curval.price ,0)

console.log(pricetoPay);