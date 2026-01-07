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


// const numbers = [1,2,3,4,5,6,7,8,9,10]
//  let sum = 0;
// function sumOffOddNumbers (number){
//     for (const number of numbers){
//         if( number % 2 !== 0){
//             // console.log(number)
//             sum = sum + number;
//         }
//     }
// }
// sumOffOddNumbers(numbers);
// console.log("Sum of all odd numbers are ", sum)


// function oddAverage(numbers){
//     const odds = [];
//     for (const number of numbers){
//         if (number %2 !==0){
//             // console.log(number)
//             odds.push(number);
//         }
//     }
//     let sum = 0;
//     for (const odd of odds){
//         // console.log(odd)
//         sum = sum + odd;
//     }
//     const length = odds.length;
//     // const average = sum / length
//     console.log(sum, average)
//     // console.log(odds)
// }
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const average = oddAverage(numbers);
// console.log("Average of these odd numbers are: ", average)

// Returns an object with the sum and average of odd numbers from `arr`
// function oddAverage(arr) {
//   const odds = arr.filter(n => typeof n === 'number' && Math.abs(n) % 2 === 1);
//   const sum = odds.reduce((acc, v) => acc + v, 0);
//   const average = odds.length ? sum / odds.length : 0; // 0 if no odd numbers
//   return { sum, average, count: odds.length, odds };
// }

// Example usage:
// const array = [1, 2, 3, 4, 5, -7, 8];
// const result = oddAverage(array);

// console.log('Odd numbers:', result.odds);          // [1, 3, 5, -7]
// console.log('Sum of odd numbers:', result.sum);   // 2
// console.log('Average of odd numbers:', result.average); // 0.5


// const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy","Heidi", "Ivan", "Frank"];
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,10,20,30];

// function noDuplicate (array){
//   const unique = [];
//   for(const item of array){
//     if(unique.includes(item) == false){
//       unique.push(item);
//     }
//   }
//   console.log(unique)
//   // console.log(array)
// }
// const uniqueArray = noDuplicate(names);
// console.log(uniqueArray)




// const min = Math.min(10,20,5,3,50,1);
// console.log(min)
// const max = Math.max(10,20,5,3,50,1);
// console.log(max)

// const abs = Math.abs(-3);
// console.log(abs)

// const ceil = Math.ceil(4.2);
// console.log(ceil)
// console.log(Math.PI)
// const floor = Math.floor(4.7);
// console.log(floor)
// const random = Math.random();
// console.log(random)

// const today = new Date()
// console.log(today)

// const date = new Date('2024-06-15T10:30:00')
// console.log(date.getMonth())


// a = 5;
// b =7;
// const temp = a;
// a = b;
// b= temp;

// console.log(a,b)
// console.log(b,a)

// function getMax (num1 , num2){
//     if(num1 > num2){
//         return num1;
//     }
//     else if (num1<num2){
//         return num2;
//     }
//     else{
//         return "Both are equal"
//     }
// }
// const maximum = getMax(10,10);
// console.log("The number that you are looking for is ", maximum)


function getMin (num1 , num2){
    if(num1 < num2){
        return num1;
    }
    else if(num1 > num2){
        return num1;
    }
    else{
        return "Both are equal"
    }
    
}
const minimum = getMin(5,10);
// return minimum;
console.log("The minimum number among them is ", minimum)

















