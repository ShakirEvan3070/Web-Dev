console.log("Hello from JS")
console.log(document)
const liCOllection =  document.getElementsByTagName('li')
// console.log(liCOllection)
for (const li of liCOllection){
    console.log(li.innerText)
}
const h1Collection = document.getElementsByTagName('h1')
for (const h1 of h1Collection){
    // console.log(h1)
    console.log(h1.innerText)
}
const newElement = document.getElementById('Places').innerText = "New Place Added"
console.log(newElement)

