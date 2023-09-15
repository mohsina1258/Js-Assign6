// Functions

// 1. Write a function that displays current date & time in your
// browser.
// function date() {   
//     var timeAndDate=new Date();
//     return timeAndDate;
// }
// console.log(date())


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function name() {   
//     var    firstName=prompt("Enter first name")
//     var lastName=prompt("Enter last name")
//     var fullName= firstName +" "+ lastName
//     return fullName    
// }
// console.log(name())


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum(){
//     var num1=parseInt(prompt("Enter num one"))
//     var num2=parseInt(prompt("Enter num two"))
//     return num1 + num2
// }
// console.log(sum())


// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function sum(a,b,c){
//     return a*b-c;

// }
// console.log(sum(5,9,15))


// 5. Write a function that squares its argument.
// function sum(a){
//     return a*a;        
// }
//  console.log(sum(5))


// 6. Write a function that computes factorial of a number.
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// const result = factorial(5); // This will return 120
// console.log(result);


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// function countNumbers() {
//     var start=parseInt(prompt("Enter num one"))
//     var end=parseInt(prompt("Enter num two"))
//     if (start <= end) {
//       for (let i = start; i <= end; i++) {
//         console.log(i);
//       }
//       return
//   }
// }
// console.log(countNumbers());



// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// function area(width,height){
//     return width * height
// }
// console.log(area(3,4))

// ii. Arguments as variables
// function area(){
//     var width=6;
//     var height=8
//     return width * height
// }
// console.log(area())


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?

// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);

// console.log(value)


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// function capitalizeWords(str) {
//     const words = str.split(' ');
//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
// }
// const inputString = 'the quick brown fox';
// const capitalizedString = capitalizeWords(inputString);
// console.log(capitalizedString); // 'The Quick Brown Fox'


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     let longestLength = 0;
//     for (const word of words) {
//       const wordLength = word.length;
//       if (wordLength > longestLength) {
//         longestLength = wordLength;
//         longestWord = word;
//       }
//     }
//     return longestWord;
//   }
//   const inputString = 'Web Development Tutorial';
//   const longestWord = findLongestWord(inputString);
//   console.log("Longest word:" ,longestWord); // 'Development'


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// function countOccurrences(str, letter) {
//     letter = letter.toLowerCase();
//     str = str.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// const inputString = 'JSResourceS.com';
// const searchLetter = 'o';
// const occurrences = countOccurrences(inputString, searchLetter);
// console.log("Occurrences of", searchLetter ,"in", inputString, ":", occurrences);

