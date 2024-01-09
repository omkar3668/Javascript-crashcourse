
//promise syntax

const promise = new Promise(function(resolve, reject){
   setTimeout(function(){
    console.log('promise genreated')
    resolve()
   },2000)
})

promise.then(function(){
   console.log('promise is consumed')
})

new Promise ( function(resolve, reject){
    setTimeout(function(){
      console.log('promise 2 genreated')
      resolve()
    },2000)
}).then(function(){
   console.log('promise 2 is consumed')
})

const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
      resolve({username: "Chai", email: "chai@example.com"})
  }, 1000)
})

promiseThree.then(function(user){
   console.log(user);
   console.log(`my ${user.username} is this & my password is ${user.email}`);
})


const promisFour = new Promise(function(resolve,reject){
   setTimeout(function(){
     let error = false;
     if(!error){
       resolve({username: "Coffee", pass:"435"})
     }else {
      reject('ERROR: Something went wrong')
     }
   },2000)
})

promisFour.then(function(user){
   console.log(user);
   return user
}).then(function(user){
   console.log(`my ${user.username} is ready & pass is ${user.pass} `);
}).catch(function(error){
   console.log(error);
}).finally(function(){
   console.log("The promise is either resolved or rejected")
})


const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
       let error = false
       if (!error) {
           resolve({username: "javascript", password: "123"})
       } else {
           reject('ERROR: JS went wrong')
       }
   }, 1000)
});

async function consumePromiseFive(){
   try {
       const response = await promiseFive
       console.log(response);
   } catch (error) {
       console.log(error);
   }
}

consumePromiseFive()


async function getDetails (){
   try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      console.log(res);
   } catch (error) {
      console.log('something went wrong');
   }
}

getDetails()

fetch ('https://api.github.com/users/omkarsable') 
.then(function(response){
   return response.json()
}).then(function(data){
   console.log(data.login);
}).catch(function(){
   console.log(error);
})