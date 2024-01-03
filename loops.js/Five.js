// foreach

const coding = [ "ruby", "C", "C++", "java", "Js"]

coding.forEach(element => {
    // 
    console.log(element);
});

coding.forEach( function (val){
    //  console.log(`new element is ${val}`);
} )

//by using arrow function

coding.forEach((item,index, array)=>{
//   console.log(`${item} of ${index} & includes ${array}`);
})

const myCoding = [

    {
        langauageName: "java",
        fileName:".java"
    },
    {
        langauageName: "javascript",
        fileName:".js"
    },
    {
        langauageName: "c",
        fileName:".c"
    },
    {
        langauageName: "html",
        fileName:".html"
    },
]

myCoding.forEach((item)=>{
   console.log(`the langauge name is ${item.langauageName} & there extension are ${item.fileName} following. `);
})