// // 1. Write a function the returns the area of a triangle

// function areaOfTriangle(b, h) {
//   let area = b * h;
//   return area;
// }
// console.log(areaOfTriangle(3, 8));

// // 2. write a function that returns the area of a rectangle

// function areaOfRectangle(l, b) {
//   let Area = l * b;
//   return Area;
// }
// console.log(areaOfRectangle(10, 10));

// // 3. write a function that returns the area of a trapezium given as 1/2(a+b+c)

// // function areaOfTrapezium((h,(a,b))){
// //     let area = (0.5*h*(a+b));
// //     if(area==="float"){
// //         math.floor(area);
// //     }
// //     return area;
// // }
// // console.log(areaOfTrapezium(5,(6,6)))

// // 4. Implement a function secondLargest(arr) that takes an array of numbers and returns the second largest number.
// // Example 1: secondLargest([6,3,0,30,7])

// function secondLargest(arr) {
//   arr.sort((a, b) => b - a);
//   return arr[1];
// }
// console.log(secondLargest([6, 3, 0, 30, 7]));

// // Example 5: secondLargest([71,33,3,51,18,6])
// // Examples 6: secondLargest([42,68,22,60,7])

// // solution 5:
// function secondLargest(arr) {
//   arr.sort((a, b) => b - a);
//   return arr[1];
// }

// console.log(secondLargest([71, 33, 3, 51, 18, 6]));

// // solution 6:

// function secondLargest(arr) {
//   arr.sort((a, b) => b - a);
//   return arr[1];
// }

// console.log(secondLargest([42, 68, 22, 60, 7]));

// // 7. Implement a function thirdLargest(arr) that takes an array of numbers and returns the third largest number.
// // i. thirdLargest([6,3,0,30,7])

// function thirdLargest(arr) {
//   arr.sort((a, b) => b - a);
//   return arr[2];
// }
// console.log(thirdLargest([6, 3, 0, 30, 7]));

// //8. Implement a function the that takes the letter of an alphabet and returns the reverse alphabets.
// // A.
// function wordSort(str) {
//   str.split("").sort().join("");
//   return str[1];
// }
// console.log(wordSort("promise"));

// // Ai.

// // function reverseWord3(str){
// //     return str.split('').reverse().join('');

// // }
// // console.log(reverseWord3("abcdefgh"));

// // B.

// // function reverseWord2(str){
// //     let strs = str.split("");
// //     let result = "";
// //     for (let i= strs.length - 1; i>=0; i--){
// //         result += strs[i];
// //     }
// //     return result;
// // };

// // console.log(reverseWord2("olujacobs"));

// //9. Write a function that returns a passed string with letters in alphabetical order.

// // function alphabetOrder(str){
// //     let alphabetOrder ="";
// //     return str.split('').sort().join('');
// // };

// // console.log(alphabetOrder("ademola"));

// // Write a function that returns array of an object that contains  name, age and gender of students(male and female) whose total ages is less than 25.

// // function studentAge(std){
// //     let male = 0;
// //     let female = 0;
// //     for(let i=0; i< std.length; i++){
// //         let stds = std[i];
// //         if(stds.age>25){
// //             if(stds.gender==="male"){
// //                 male += stds.age
// //             }
// //             else{
// //                 female +=stds.age
// //             }
// //         }
// //     }

// //     return{male:male,female:female};
// // }

// // console.log(studentAge([{name:"promise", age:12, gender:"male"}, {name:"femi", age:13, gender:"female"}, {name:"kunle", age:15, gender:"male"}, {name:"Ayo", age:31, gender:"female"}]));

// // //  Write a function that returns array of an object that contains  name, age and gender of students(male and female) whose total ages is less than 25.

// // function student_age(stds){
// //     let male = 0;
// //     let female = 0;
// //     for(let i=0; i<stds.length; i++){
// //         if(stds.age<=25){
// //             if(stds.gender==="female"){
// //                 female += stds.age;
// //             }
// //             else{
// //                 male +=stds.age;
// //             }
// //         }

// //     }

// //     return{male:male, female:female};
// // };

// // console.log(student_age([{name:"Promise", Age:11, gender:"Male"}, {name:"John", Age:13, gender:"Female"}, {name:"Phillip", Age:14, gender:"Male"}, {name:"kunle", Age:14, gender:"Female"}]));

// // 2. a. REVERSE ALL THE WORDS IN A SENTENCE
// function reverseSentence(word) {
//   return word.split("").reverse().join("");
// }
// console.log(reverseSentence("I live in Lagos State"));

// // b.
// function reverse_sentence(word) {
//   let str = " ";
//   let array = word.split("");
//   for (let i = array.length; i >= 0; i--) {
//     str = str + " " + array[i];
//   }

//   return str;
// }

// console.log(reverse_sentence("I will travelled to the United State one day"));

// // Write a function that will return true or false when the reverse of the word in lowercase is exactly the result in lowercase

// function lowercaseWord(word) {
//   let str = word.split("").reverse().join("");
//   if (str.toLowerCase() === word.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(lowercaseWord("PromISE"));

// // Character count
// function charCount(sentence) {
//   let charObject = {};
//   for (let i = 0; i < sentence.length; i++) {
//     let key = sentence[i];
//     if (key === " ") continue;
//     if (charObject[key]) {
//       charObject[key]++;
//     } else {
//       charObject[key] = 1;
//     }
//   }
//   let countArray = Object.values(charObject);
//   let max = Math.max(...countArray);
//   for (let i = 0; i < sentence.length; i++) {
//     let prop = sentence[i];
//     if (charObject[prop] === max) {
//       return prop;
//     }
//   }
// }
// console.log(charCount("hippopoootamus"));

// // i. further examples

// // function anagram(word1, word2){
// //     let arrange1 = word1.split("").sort().join("").toLowerCase().trim();
// //     let arrange2 = word2.split("").sort().join("").toLowerCase().trim();
// //     console.log(arrange1);
// //     console.log(arrange2);
// //     if(arrange1 === arrange2){
// //         return true;
// //     } else{
// //         return false;
// //     }
// // };

// // console.log(anagram("care", "acre"));

// // ii.  Further examples as the one above

// // function anagram(word1, word2){
// //     let result1 = "";
// //     let result2 = "";

// //     let array1 = word1.split("").sort();
// //     let array2 = word2.split("").sort();

// //         for(let i=0; i<array1.length; i++){
// //             result1 += array1[i];
// //             console.log(result1)
// //         }
// //         for(let i=0; i<array2.length; i++){
// //             result2 += array2[i];
// //             console.log(result2)
// //         }
// //         if(result1===result2){
// //             return true;
// //         }
// //         else{
// //             return false;
// //         }
// //     };
// //     console.log(anagram("dormitory", "dirty room"));

// // Write a function that returns the longest word as a string

// // function returnLongest(str){
// //     return Math.max(...str.split(" ").map(x=>x.length));
// // }

// // console.log(returnLongest("This is a beautiful home"));

// // Write a function that return a list of prime numbers

// // program to check if prime number
// // function check_prime(number){
// //     for( let x = 2; x<number; x++){
// //         if(number === 1){
// //             return true;
// //         }else if(number ===2){
// //             return false;
// //         }else{
// //             if(number % x === 0){
// //                 return false;
// //             }
// //         }
// //         return true;
// //     }
// // }
// // console.log(check_prime(10))

// // program to check if a number is prime

// // function checkPrime(number){
// //     if(number === 1 ){
// //         return true;
// //     }
// //     else if(number === 2){
// //         return false;
// //     }else{
// //         for(var x = 2; x<number; x++){
// //             if(number % x === 0){
// //                 return false;
// //             }
// //         }
// //         return true;
// //     }
// // }
// // console.log(checkPrime(10));

// // program to check even number

// // function checkEven(number){
// //     for(let x = 2; x<number; x++){
// //         if(number === 0){
// //             return true;
// //         }else if(number === 1){
// //             return false;
// //         }
// //         else{
// //             if(number % x === 0){
// //                 return true;
// //             }
// //         }
// //         return false
// //     }
// // }

// // console.log(checkEven(5));

// // function to sum all numbers within a range

// function sumNum(num) {
//   let result = 0;
//   for (let i = 0; i < num.length; i++) {
//     result += i;
//   }
//   return result;
// }

// console.log(sumNum([1, 3, 4, 5, 6]));

// // program to minus the number in a range

// // function minusNum(number){
// //     let result = 0;
// //     for(var i=0; i>number.length; i--){
// //         result -= number[i];
// //     }
// //     return result;
// // }

// // console.log(minusNum([1,3,4,5,6,19]));

// // Sum Numbers in range

// function sumInRange(a, b) {
//   let result = 0;
//   for (let i = a + 1; i < b; i++) {
//     result += i;
//   }

//   return result;
// }

// console.log(sumInRange(4, 7));

// // Function to sum number and string

// function sumOrMultiply(arr) {
//   let total = 0;
//   for (let i = 0; arr.length < i; i++) {
//     let val = arr[i];
//     if (typeof val === "number") {
//       total += val;
//     } else if (typeof val === "string") {
//       total *= val;
//     }
//     return total;
//   }
// }
// console.log(sumOrMultiply([1, "2", 3, "4", 5]));

// // another way to write a function that returns a even number

// function checkEven(number) {
//   for (let x = 2; x < number; x++) {
//     if (number === 0) {
//       return true;
//     } else if (number === 1) {
//       return false;
//     } else {
//       if (number % x === 0) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// console.log(checkEven(5));

// // function to check odd
// function checkOdd(num) {
//   for (let x = 2; x < num; x++) {
//     if (num === 0) {
//       return false;
//     } else if (num % x === 1) {
//       return true;
//     }
//     return false;
//   }
// }

// console.log(checkOdd(11))

// // Print all even numbers from 0 to 10

// function evenNumbers(arr){
//   const arr = [1,2,3,4,5,6,7,8,9,10];
//   for(num of arr){
//     if(num % 2 === 0){
//       document.write(num + "<p$/>");
//     }
//   }
// };

// // function 
// // function getEvenNumbers(num){
// //   if(num % 2 === 0){
// //     document.writeln(num + "<br />");
// //   }
// //   var arr = [0,1,2,3,4,5,6,7,8,9,10];
// //   arr.forEach(getEvenNumbers);
// // }
// // function evenNum(){
// //   const arr = [1, 2, 3, 4, 5, 6, 7,8,9,10];
// //   const even = [];
// //   arr.forEach(number){
// //     if(number % 2===0){
// //       even.push(number);
// //   }
  
// // }

// // }
// // evenNum();

// // function repeatVowel(vowel, multiplier){
// //   const str = "";
// //   const count = 0;
// //   vowel.forEach(letter){
// //     if(letter !== "consonant"){
// //       count +=1;
// //       multiplier.repeatVowel.repeat(n);
// //       str.push();
// //     }
// //   }
// //   return str;
// // }
// // repeatVowel();

// function repeatVowel(word, multiplier){
//   for(let i=0; i<word.length; i++){
//       let words = word[i];
//       if(consonants.includes(words));
//       return(words.repeat(multiplier));
//   }
// }
// repeatVowel();




// function save(){
//   console.log(count)
// }
// save()







// document.getElementById("welcome-el").innerText ="Message";
let welcomeEl = document.getElementById("welcome-el");
let name = prompt("Enter name");
let greet = "Hi, Welcome ";
let greeting = greet + name;

function welcome(){
  let myGreeting = greeting;
  welcomeEl.textContent = myGreeting;
}
// welcome()

// document.getElementById("count-el").innerText = 0;
 let count = 0;
 let newCount = document.getElementById("count-el");
  function increment(){
  count +=1;
  newCount.textContent = count;
}
// increment()

// document.getElementById("save-el").innerText = "Morning Attendance";
let saveEl = document.getElementById("save-el");
function save(){
  let saveName = name + " - ";
  // let countStr = count + " - ";
  saveEl.textContent += saveName;
  newCount.textContent = 0;
  count = 0;

}

// function that display an Error Message
// document.getElementById("error").innerText = "message";
let purchaseEl = document.getElementById("error-el");
let errorMsg = "Sorry something went wrong, please try again later!";
function purchase(){
  let myErrorMsg = errorMsg;
  purchaseEl.textContent = myErrorMsg;
}
// purchase()

// Function calculator

let num1 = 16;
let num2 = 15;
// let totalNum = num1 + num2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// document.getElementById("sum-el").innerText = sum;
let sumEl = document.getElementById("sum-el");

function add(){
  let result = num1 + num2;
  sumEl.textContent = "sum: " + result;
}

function subtract(){
  let result = num1 - num2;
  sumEl.textContent = "sum: " + result;
  }

function divide(){
  let result = num1 / num2;
  sumEl.textContent = "sum: " + result;
}

function multiply(){
  let result = num1 * num2;
  sumEl.textContent = "sum: " + result;
}

// Logic of a black jack game

// let age = 21;
// function age(){
//   if(age < 21){
//     console.log("You can not enter the club");
//    } else{
//     console.log("Welcome");
//    }
// }

// let age = 100;
// 
//   if(age < 100){
//     console.log("Not Eligble");
//   } else if(age === 100){
//     console.log("Here is your birthday card from the king");
//   } else{
//     console.log("Not Eligible, you've gotten one already");
//   }
// 

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let sum = 0;
// let cards = [];
// let isAlive = false;
// let hasBlackJack = false;
// let message = " ";
// let messageEl = document.getElementById("message-el");
// let sumCard = document.getElementById("#sum-el");
// let cardsEl = document.getElementById("cards-el");
// let player = {
//    name : "Promise",
//    chip : 500
// }


// let playerEl = document.getElementById("player-el");
// playerEl.textContent=player.name + ": $" + player.chip 

// function getRandomCard(){
//   let randomNumbers = Math.floor(Math.random()* 13) + 1;
//   if(randomNumbers===1){
//     return 11;
//   }else if(randomNumbers > 10){
//     return 10;
//   }
//   else{
//     return randomNumbers
//   }
// }
 
// function startGame(){
//   isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   renderGame();
// }

// function renderGame(){
//   cardsEl.textContent ="Cards: " 
//   for(let i=0; i<cards.length; i++){
//     cardsEl.textContent = cards[i] + " ";
//   }

//   if(sum <= 20){
//     message = "Do you want to draw a new card?";
//   }else if(sum === 20){
//     message = "wohoo, you've got Blackjack!";
//   }else{
//     message = "You're out of the game!";
//     isAlive = false;
//   }
//   messageEl.textContent = message;
//   sumCard.textContent = "Sum: " + sum;
 
// }
// // startGame();

// function newCard(){
//   // console.log("Drawing a new card from the deck");
//   if(isAlive === true && hasBlackJack === false){
//   let card = getRandomCard();
//   sum += card;
//   cards.push(card);
//   console.log(cards)
//   renderGame()
//   }
  
// };


// function arrayList(){
//   let array = [0,1,2,3,4,5,6,7,8,9,10];
//   let arr = [];
//   for(let i = 0; i<array.length; i++){
//     let arrays = array[i];
//     if(array[i] % 2 === 0){
//       arr.filter(array);
//     }
//   }
// };
// arrayList()


//  Create a for loop that counts 10 to 100 in steps of 10

// for(let count = 10; count<100; count+=10){
//   console.log(count);
// }


// let text = [
//   "Hey, how's it going?",
// "I'm great, thank you! How about you?",
// "All good. Been working on my portfolia lately.",
// "Same here!", "Great to hear",
// "Thank you!"
// ]

// for(let i =0; i<text.length; i++){
//   console.log(text);
// }


// let kard = [7, 3, 9];
//  for(let i =0; i<kard.length; i+=1){
//   console.log(kard[i]);
//  }

//  let sentence = ["Hello", "my","name", "is" , "Promise"]
//  let boomEl = document.getElementById("sentence-el");
//  for(let i=0; i<sentence.length; i+=1){
//   boomEl.textContent += sentence[i] + "";
//  }

// write a function that returns total race time

// let race1Time = 103;
// let race2Time = 107;
// function totalRaceTime(){
//   if(race1Time < race2Time){
//     return race1Time;
//   }else if(race2Time < race1Time){
//     return race2Time;
//   }else{
//     return race1Time;
//   }
// }

// let totalRace = totalRaceTime();
// console.log(totalRace);

// // function get total race time

// function getTotalRaceTime(){
//   return race1Time + race2Time
// }

// let totalRaceTime = getTotalRaceTime();
// console.log(totalRaceTime);


// function that generated random numbers





// function rollDice(){
//   let randomNumbers = Math.floor(Math.random() * 6) + 1;
//   return randomNumbers;
// } 
// console.log(rollDice());


// function showSolution(){
//   if(hasSolvedChallenge === false && hasHintLeft === false){

//   }
// }

// showSolution();


// let person = {
//   name: "Promise",
//   age: 34,
//   country: "Nigeria"
// }

// let data = person.name + " is " + person.age + " years old and lives in " + person.country;
// function logData(){
//   console.log(data)
// }
// logData();

// let age = 56;
// if(age < 6){
//   console.log("free");
// } else if(age< 18){
//   console.log("child discount");
// } else if(age < 27){
//   console.log("student discount");
// }else if(age < 67){
//   console.log("full price");
// }else{
//   console.log("senior citizen discount");
// }
// console.log(age)

// let age = Math.random(6, 68);
// console.log(age);


// let largeCountries = ["china", "India", "USA", "Indonesia", "Pakistan"];
//   console.log("The 5 largest countries in the World");
//   for(let i = 0; i<largeCountries.length; i++)
//    console.log("-" + largeCountries[i]);
    
  //  let largeCountries = ["china", "India", "USA", "Indonesia", "Pakistan"];largeCountries.pop();
  //  console.log(largeCountries);
  //  largeCountries.push("Nigeria")
  //  console.log(largeCountries);

  //  largeCountries.shift("china")
  //  console.log(largeCountries)

  //  largeCountries.unshift("Ghana");
  //  console.log(largeCountries);

  // let hands = ["rock", "paper", "scissor"];
  // function randomItem(){
  //   for(let i=0; i<hands.length; i++){
  //     let randomIndex = [Math.floor(Math.random() * 3)]
  //   return hands[randomIndex];
  //  }
  // };
  // console.log(randomItem());

  // // another way to the above problem
  // let items = ["rock", "paper", "scissor"];

  // function randomIt(){
  //   return items[Math.floor(Math.random()*items.length)];
  // }
  // console.log(randomIt())

// function to Sort Fruits in their given shelves
// let fruits = ["apple","mango", "orange", "apple", "orange", "apple", "orange", "mango"];
//  let appleShelf = document.getElementById("apple-shelf");
//  let orangeShelf = document.getElementById("orange-shelf");
//  let mangoShelf = document.getElementById("mango-shelf");

//  function sortFruit(){
//   for(let i= 0; i<fruits.length; i++){
//     let fruit = fruits[i];
//     if(fruit === "apple"){
//       // fruits.sort();
//       appleShelf.textContent += fruit;
//     }else if(fruit ==="orange"){

//       // fruits.sort();
//       orangeShelf.textContent += fruit;
//     } else if(fruit ==="mango"){
//       // fruits.sort();
//       mangoShelf.textContent += fruit;
//     }
//   }
//   return fruits;
//  }
//  console.log(sortFruit());

//1==> Lead saver chrome extension

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
})


function renderLeads(){
  let listItem = "";
  for(let i= 0; i<myLeads.length; i++){
    // Using a template string/literals ===> change the string quote to a backtick. in this case ("") to be change to a backtick and then do a template strigs on the "myLeads", then break into a new line for easy readability.
    listItem += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    
}
  ulEl.innerHTML = listItem
}

// A for loop to Log out all the items in the myLeads array
// let myLeads = ["www.greatleads.com", "www.yahoo.com", "www.epiclead.com"];
// const ulEl = document.getElementById("ul-el");
// for(let i=0; i<myLeads.length; i++){
//   let myLead = myLeads[i];
//   ulEl.textContent += myLead + " ";
// }

// To Log out the items in the array as a list items
// let myLeads = ["www.greatleads.com", "www.yahoo.com", "www.epiclead.com"];
// const ulEl = document.getElementById("ul-el");
// for(let i=0; i<myLeads.length; i++){
//   let myLead = myLeads[i];
//   ulEl.innerHTML += "<li>" + myLead  + "</li>";
// }

// let container = document.getElementById("container");
// container.innerHTML = "<button onclick='buy()'>Buy!</button>";
//  function buy(){
//   container.innerHTML += "<p>Thank you for buying!</p>";
//  }

//  const li = document.createElement("li")
//  li.textContent += myLead;
//  ulEl.append()

// Using a template string/literals ===> change the string quote to a backtick. in this case ('') represent a backtick
const email = 'Hey ${recipient}! How is it going? cheers'
