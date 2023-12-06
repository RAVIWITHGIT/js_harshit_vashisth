// ------------------------------- find method -----------------------------------------------------

let myArr = ['ravi','sh','ram','shyam']

function islength(str){
    return str.length ===3

}
// console.log(islength('cat'))
let getValue = myArr.find(islength)
// console.log(getValue)

// ---------
let myArr2 = ['ravi','sh','ram','shyam']

function islength(str){
    return str.length ===3

}
let getValue2 = myArr.find((str)=>{
    return str.length===2
})
// console.log(getValue2)


// --------------------------- REAL LIFE EXAMPLE
let user = [
    {userId:1,userName:'ravi'},
    {userId:2,userName:'shiv'},
    {userId:3,userName:'ram'},
    {userId:4,userName:'shyam'},
    {userId:5,userName:'ranu'},
]

let find_userId = user.find((str)=> str.userId===4)
// console.log(find_userId)
