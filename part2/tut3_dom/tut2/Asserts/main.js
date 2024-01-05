// console.log(document)
// console.dir(document)

// -------------------

// let myh2 = document.querySelector('#myh2')
// console.log(myh2)
// console.dir(myh2)
// myh2.textContent = 'change by ravi'

// -------------------
// -- note => we can access inner text using .textcontent and .innerText
// let myh2 = document.getElementById('myh2')
// console.log(myh2)
// console.log(myh2.textContent)
// console.log(myh2.innerText)

// -- note => major diffrent in textcontent and innertext when we display none , textcontent print if the content display none but innertext not print if the content display none
// let myh2 = document.getElementById('myh2')
// console.log(myh2)
// console.log(myh2.textContent)  // print also display none content text
// console.log(myh2.innerText)    // not print display none content text


// ------------
// let myli = document.querySelectorAll('.myli')
// console.log(myli)


// ------------------------------------------------------------------------------

// ----------------

// target innertag using querySelector
// let mydiv = document.querySelector('div h2')
// console.log(mydiv)


// ---------------
// when we target css using javascript so we use this
// let a =document.getElementById('myh2')
// a.style.color = "yellow"

// but when we use those css Properties which make two charactor mean background-color then we not direct use in javascript , when we use these properties then we write in camelCase

// let a = document.getElementById('myh2')
// a.style.background-color = 'yellow'      //this is wrong
// a.style.backgroundColor = 'yellow'       // this is right





// -------------------------------------------- Get and Set Attributes ------------------------------


// ------------- Get Attributes
// get Attrubutes help access all attrubutes of any element in html

// let myh2 = document.querySelector('#myh2')
// console.log(myh2.getAttribute("class"))    // get class attrubtes using Get Attributes


// ------------- Set Attributes
// set Attributes help to change attributes value of any element in html
// myh2.setAttribute('class','this_is_my_h2_class')   //change class name using Set Attributes
// console.log(myh2.getAttribute('class'))





// ------------------------------------------------------------------------------------------------
// ----- get multiple elements using getElements by class Name and using querySelectorAll()

// --- get element by class name , this return HTML COLLECTION and we say array like object mean we access by index , but this is not actually array

// let myli = document.getElementsByClassName('myli')
// console.log(myli)


// ---- querySelectorAll - this return NodeList
// let myli2 = document.querySelectorAll('.myli')
// console.log(myli2)



