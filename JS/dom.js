// console.log("Hello from JS")
// console.log(document)
// const liCOllection =  document.getElementsByTagName('li')
// console.log(liCOllection)
// for (const li of liCOllection){
//     console.log(li.innerText)
// }
// const h1Collection = document.getElementsByTagName('h1')
// for (const h1 of h1Collection){
    // console.log(h1)
//     console.log(h1.innerText)
// }
// const newElement = document.getElementById('Places').innerText = "New Place Added"
// console.log(newElement)


// const someLi = document.querySelectorAll('.fruits-container li');
// for (const li of someLi){
//     console.log(li.innerText)
// }




const places = document.getElementById('places-liked');
const li = document.createElement('li');
li.innerText = "Mondir er Goli";
const li1 = document.createElement('li');
li1.innerText = "Mosjid er Goli";
const li2 = document.createElement('li');
li2.innerText = "Nodir par er Goli";
places.appendChild(li);
places.appendChild(li1);
places.appendChild(li2);



























