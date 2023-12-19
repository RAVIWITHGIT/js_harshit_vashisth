// -------------------------------------- class keyword ---------------------------------------------

// in the previous tutorial , when we had to create a method , we created it outside the function. whereas by using the class keyword we can create the method inside the class itself.

class CreateUser{
    constructor(firstName,lastName,email,age,address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address
    }
    about(){
        return `${this.firstName} is ${this.age} year old`
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return "la la la la"
    }
}

let user1 = new CreateUser('ravi','lakshakar','myemail',21,'bassi')
// console.log(user1)
// console.log(user1.firstName)
// console.log(user1.about())
// console.log(Object.getPrototypeOf(user1))



// ------------***************** some practise
// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true
//     }
// }

// const animall = new Animal('tom',1)
// console.log(animall)
// console.log(animall.eat())
// console.log(animall.isSuperCute())


// ---------------------- inhertance in class --------------------------------------------

// animal is parent class

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true
    }
}


// dog is sub class
class dog extends Animal{

}
let dog1 = new dog('tommy',22)
console.log(dog1)
console.log(dog1.isSuperCute())
console.log(dog1.eat())