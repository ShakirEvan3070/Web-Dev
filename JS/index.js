// console.log("Hello JavaScript")
// let x = ["Apple", "Banana", "Cherry", 1,2,3]
// console.log(x)
// let y = [];
// x.push(...x);
// console.log(y);
// x[1]= "Orange"
// console.log(x[0])
// console.log(x[1])
// console.log(x[2])
// console.log(x[3])
// console.log(x[4])
// console.log(x[5])
// let source = [1,2,3,4,5,6,7,8,9,10]
// let target = []
// target.push(...source)
// console.log(source)
// console.log(target)

// let num =1
// let sum =0
// while (num <=10){
//     console.log(num)
//     console.log(sum)
//     sum = sum + num
//     console.log("sum:",sum)
//     num++;
// }

// let num = 1;
// while ( num <= 10){
//     console.log(num);
//     if (num % 2 === 0){
//         console.log("Even Number:", num);
//      }
//             num++; 
// }

// let sum = 0
// for ( let i = 11; i<=20; i++){
//     sum = sum + i;
//     console.log(i, "s are", i);
// }
// console.log("Sum of these numbers are:", sum)


// let num = 11;
// let sum = 0;
// while (num <=20){
//     sum = sum + num;
//     num++;
//     console.log(num)
// }
// console.log("Sum of these numbers are ", sum)

// multiplication table 
// let number = 5
// for(let i =1; i<=10;i++){
//     let result = number * i;
//     console.log(`${number} x ${i} = ${result}`);
// }

// const address =  "Faridabad Dhaka"
// const part = address.slice(2,9)
// console.log(part)


// const sentence = " I am a good boy"
// console.log(sentence.split(""))

// const friendStr = "Alice,Bob,Charlie,David"
// const friends =friendStr.split(",")
// console.log(friends)

// let RealFriends = friendStr.toUpperCase()
// console.log(RealFriends)
// console.log(RealFriends.join())
// const realFriend = ["Alice", "Bob", "Charlie", "David"]
// console.log(realFriend)
// console.log(realFriend.join("|"))
// console.log(realFriend.join("-"))

// const first = "Abid"
// const last = "Hossain"

// const first2 = "Kabir"
// const last2 = "Khan"

// const fullName = `${first} ${last}`
// console.log(fullName)

// const fullName = first + " " + last
// console.log(fullName)


// const fullname2 = first2.concat(" " , last2)
// console.log(fullname2)



// const sentence = "I am learning web Dev"

// let reverse = ""
// for (const letter of sentence){
//     reverse = letter + reverse 
// }
// console.log(reverse)
// let sentence = "I am learning web development"

// const bottle = {
//     brand : "apple",
//     price : 2000,
//     color : "white",
//     isClean : false
// }

// const subject = {
//     name : 'biology',
//     teacher : "Aus Shakir Ahmed Evan",
//     marks : 85,
//     isHard : true,
//     chapters : ['first', 'second','Third','Fourth'],
//     address : {
//         city : "Dhaka",
//         area : "Uttara",
//         road : "12"
//     }
// }

// console.log(bottle.brand)
// console.log(bottle.price)
// console.log(bottle.color)
// console.log(bottle.isClean)

// console.log(subject.name)
// console.log(subject.teacher)
// console.log(subject.marks)
// console.log(subject.isHard)
// console.log(subject.chapters[0])
// console.log(subject.address.city)
// console.log(subject.address.area)
// console.log(subject.address.road)

// const mobile = {
//     Brand : "Samsung",
//     Price : 25000,
//     color : 'Black',
//     camera : "12mp",
//     isNew : true
// }
// for (const prop in mobile){
//     console.log(prop)
//     console.log(mobile[prop])
// }

// const fruits = ["Apple", "Banana", "Orange", "Mango"]
// for (let i=0; i<fruits.length; i++){
//     console.log(`Index ${i}: ${fruits[i]}`)
// }

// const fruiit1 = ["Apple", "Banana", "Orange", "Mango"]
// let i = 0;

// while (i < fruiit1.length){
//     console.log(`Index ${i}: ${fruiit1[i]}`);
//     i++;
// }


// let arr = [10,20,30,40,50]
// for (let i=0; i<arr.length; i++){
//     console.log(arr)
// }
// const fruits = ["Apple", "Banana", "Orange", "Mango"]

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers)
// numbers.reverse()
// console.log(numbers)


// function myFunction(p1,p2){
//     return p1 * p2;
// }
// let x = myFunction(4,3);
// console.log(x)
// function greet(name, age){
//     return `Hello ${name} , How are you? Your age is ${age} years old`
// }
// console.log(greet("Evan", 25))
// console.log(greet("Jidan", 27))
// console.log(greet("Ripa", 34))

// function square(num){
//     let borgo = num * num;
//     let cube = num * num * num;
//     console.log(`the square of the number  ${num} is ${borgo}`)
//     console.log(`the cube of the number  ${num} is ${cube}`)
// }
// square(5)
// square(10)
// square(15)


// function number(num1 , num2 , num3){
//     let add = num1 + num2 + num3;
//     let sub = num1 - num2 - num3;
//     let mul = num1 * num2 * num3;
//     let div = num1 / num2 / num3;
//     console.log(`The addition of the ${num1},${num2},${num3} are : ${add}`);
//     console.log(`The subtraction of the ${num1},${num2},${num3} are : ${sub}`);
//     console.log(`The multiplication of the ${num1},${num2},${num3} are : ${mul}`);
//     console.log(`The division of the ${num1},${num2},${num3} are : ${div}`);
// }
// number(30,10,5)


// sum of even numbers 


// const numbers = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0;
// function sumOfEvenNumbers(number){
//     for (const number of numbers){
//         if(number % 2 === 0){
//             // console.log(number)
//             sum = sum + number;
//         }
//     }
// }
// let result = sumOfEvenNumbers(numbers);
// console.log("Sum of even numbers are ", sum)


const numbers = [1,2,3,4,5,6,7,8,9,10]
 let sum = 0;
function sumOffOddNumbers (number){
    for (const number of numbers){
        if( number % 2 !== 0){
            // console.log(number)
            sum = sum + number;
        }
    }
}
sumOffOddNumbers(numbers);
console.log("Sum of all odd numbers are ", sum)








