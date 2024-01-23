const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

Object.defineProperty(Math,"PI", {
    writable:true,
    enumerable: true,
    configurable: true
})

console.log(descriptor);