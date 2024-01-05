//filter is use to filter based on condition true false.

let Nums = [1,2,3,4,5]

// const allNums = Nums.forEach((num)=>{
//   console.log(num);
//   return num;
// })

// console.log(allNums);

// Above is the problem in for each we didn't get value when we store definatioin in new varible.

// ...Filters....

// const newFilter = Nums.filter((num)=>{
//   console.log(num);
//   return num;
// })
// console.log(newFilter);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const readerResult = books.filter((bn)=>{
    return bn.genre === 'Science'
  })
  
   const pubilshResult = books.filter((bn)=>{
      return bn.publish <= 2009
   })
  console.log(readerResult);
  console.log(pubilshResult);