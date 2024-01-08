// ---------------------------- Traversing DOM Tree -------------------------------------------------

const rootNode = document.getRootNode()
console.log(rootNode)

// ---------------- childNodes

// const htmlElementNode = rootNode.childNodes
// console.log(htmlElementNode)

// const h = htmlElementNode[1].childNodes
// console.log(h)

// const headElementNode = htmlElementNode[1].childNodes[0]
// console.log(headElementNode)
// const textNode = htmlElementNode[1].childNodes[1]
// console.log(textNode)
// const bodyElementNode = htmlElementNode[1].childNodes[2]
// console.log(bodyElementNode)

// ---------------- parentNodes 

// const htmlElementNode = rootNode.childNodes

// const headElementNode = htmlElementNode[1].childNodes[0]
// console.log(headElementNode.parentNode)

// --------------- sibling
// const htmlElementNode = rootNode.childNodes[1]

// const h = htmlElementNode.childNodes
// console.log(h)

// const headElementNode = htmlElementNode.childNodes[0]
// console.log(headElementNode)

// console.log(headElementNode.nextSibling)
// console.log(headElementNode.nextSibling.nextSibling)

// nextsibling also access text node , so we want only element sibling then we use nextElementSibling
// console.log(headElementNode.nextElementSibling)