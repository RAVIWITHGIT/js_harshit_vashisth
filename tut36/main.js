// --------------------------------------- Set() -------------------------------------------

/*
1. set is same as list becasue set also store data like array
2. we can not store duplicate value in set()
3. syntex is - new Set()
4. we can not access set value using index number
5. we can write iterable object in set , exa - array ,string
*/

// ------************ we can store diffrent data type in set
let mySet = new Set([1,2,3,4])
// let mySet = new Set('ravi')
// console.log(mySet)
// console.log(typeof mySet)


// ------********* we can only iterable object write in set()
// let mySet2 = new Set(1,2,3,4)
// console.log(mySet2)

// ------********* we can not access set value using index number
// let mySet3 = new Set([1,2,3,4])
// console.log(mySet3[1])

// ------********* we can not write duplicat value in set()
// let mySet4 = new Set([1,2,3,1,5,6,4,3,2,8,7,9,1,1])
// console.log(mySet4)

// -----********* we can make empty set and add value using add method
// let mySet5 = new Set()
// mySet5.add(1)
// mySet5.add(2)
// mySet5.add(3)
// console.log(mySet5)

// ------****** we can not add same array multiple time
// let myarr = [1,2,3,4,5]
// let mySet6 = new Set()
// mySet6.add('ravi')
// mySet6.add(myarr)
// mySet6.add(myarr)
// console.log(mySet6)

// -----***** we can add same array in Set multiple time if all array id is not same
// let myarr1 = [1,2,3,4,5,6]
// let myarr2 = [1,2,3,4,5,6]
// let myarr3 = [1,2,3,4,5,6]
// let mySet7 = new Set()
// mySet7.add('hello')
// mySet7.add(myarr1)
// mySet7.add(myarr2)
// mySet7.add(myarr3)
// console.log(mySet7)


//-----
// let mySet8 = new Set()
// mySet8.add('hello')
// mySet8.add([1,2,3,4,5,6])
// mySet8.add([1,2,3,4,5,6])
// mySet8.add([1,2,3,4,5,6])
// console.log(mySet8)

// ------*************** check element present in set using has method
// let mySet9 = new Set([1,2,3,4,'ravi'])
// console.log(mySet9.has(1))
// console.log(mySet9.has('ravi'))

// -----************* we can iterate Set element using loop
// let mySet10 = new Set([1,2,3,4,'ravi'])
// for(let i of mySet10){
//     console.log(i)
// }

// -----************ we can not access length of set using length properties but we can use size method to access how many element present in set
// let mySet11 = new Set([1,2,3,4,'shiv'])
// console.log(mySet11.length)
// console.log(mySet11.size)







