//----------1. bigLetter---------------//
// Напишите функцию bigLetter(str), которая возвращает строку str с заглавным первым символом
// function bigLetter(str) {
// 	return str.charAt(0).toUpperCase() + str.substring(1);
// }
// console.log(bigLetter('my phrase'));
//Solving:

//----------1. bigLetter---------------//

//----------2. zEbRa---------------//
// Напишите функцию zebra(str), которая возвращает строку str с заглавными символома под непарными номерами
// Модифицируйте функции zebra(str, flag), которая возвращает строку str с заглавными символома под непарными номерами,
// если аргумент flag отсутствует или false, если флаг true - заглавные символы под парными номерами.
// (0 определять как парное число)

//Solving:
// 'use strict';
// function zebra(str, flag) {
// 	var string = '';
// 	if(flag === false){
// 		for(var i = 1; i <= str.length; i++){
// 			if(i % 2 != 0){
// 				string += str[i-1].toUpperCase();
// 			} else {
// 				string += str[i-1];
// 			}
// 		}
// 		return string;
// 	} else {
// 		for(var b = 1; b <= str.length; b++){
// 			if(b % 2 == 0){
// 				string += str[b-1].toUpperCase();
// 			} else {
// 				string += str[b-1];
// 			}
// 		}
// 		return string;
// 	}
// }
// console.log(zebra('hello world', false)); // "HeLlO WoRlD"
// console.log(zebra('hello world', true)); // "HeLlO WoRlD"
//----------2. zEbRa---------------//


//----------3. includes---------------//
// Напишите функцию includes(base, str), проверяет,
// включает ли одна строка в себя другую, возвращает true/false. (фичи ES6 использовать нельзя)

//Solving:
// function includes(base, str) {
// 	var reg_exp = new RegExp(str, 'i');
// 	var result = base.match(reg_exp);
// 	console.log(result);
// }
// includes('hello world', 'wor');
//----------3. includes---------------//


//----------4. endsWith---------------//
//Напишите функцию endsWith(base, str), возвращает true, если строка base заканчивается подстрокой str.
// (фичи ES6 использовать нельзя)

//Solving:
// function endsWith(base, str){
//     var baseLength = base.length;
//     var strLength = str.length;
//     if (baseLength >= strLength){
//         var number = baseLength - strLength;
//         var check = false;
//         for (var i = number, j = 0; i < baseLength; i++, j++){
//             if (base[i] === str[j]){
//                 check = true;
//             } else {
//                 return false;
//             }
//         }
//         if(check){
//             return check;
//         }
//     }
// }
// var baseString = 'returning';
// var substring = 'ning';
// console.log('Base string = "' + baseString + '"; substring = "' + substring + '"');
// console.log('Result:');
// console.log(endsWith(baseString, substring));
//----------4. endsWith---------------//


//----------5. startsWith---------------//
// Напишите функцию startsWith(base, str), возвращает true, если строка base начинается со строки str.
// (фичи ES6 использовать нельзя)

//Solving:
// function startsWith(base, str) {
//     var baseLength = base.length;
//     var strLength = str.length;
//     if (baseLength >= strLength){
//         var check = false;
//         for (var i = 0, j = 0; i < strLength; i++, j++){
//             if (base[i] === str[j]){
//                 check = true;
//             } else {
//                 return false;
//             }
//         }
//         if(check){
//             return check;
//         }
//     }
// }
// var baseString = 'returning';
// var substring = 'retur';
// console.log('Base string = "' + baseString + '"; substring = "' + substring + '"');
// console.log('Result:');
// console.log(startsWith(baseString, substring));
//----------5. startsWith---------------//


//----------6. repeatString---------------//
// Напишите функцию repeat(str, times), возвращает результат повторения строки str times раз.
// Внутри функции делать проверку аргумента : [times is целое число; times is Number; times > 0;
// times != NaN; times != Infinity]. Если times == 0 вернуть пустую строку.
// (фичи ES6 использовать нельзя)


//Solving:
// function isInteger(number) {
//     var a = '' + number;
//     var check = true;
//     for(var i = 0; i < a.length; i++){
//         if (a[i] === '.'){
//             check = false;
//         }
//     }
//     return check;
// }
//
// function repeat(str, times) {
//     if(isInteger(times) && typeof times === 'number' && times > 0 && times !== NaN && times !== Infinity ){
//         var string = '';
//         for(var b = 0; b < times; b++){
//             string += str;
//         }
//         return string;
//     } else if(times === 0){
//         return '';
//     }
// }
//
// console.log(repeat('String', 9));
//----------6. repeatString---------------//


//----------7. reversit---------------//
// Напишите функцию reversit(str), которая переворачивает строку str. Используйте цикл for,
// который меняет местами первый и последний символы, затем следующие и т. д. до предпоследнего.
// Строка str должна передаваться в функцию reversit(str) как аргумент.
// Также организовать безопасность типов - проверять есть ли аргумент str строкой и преобразовать str в строку явно.

//Solving:
// function reversit(str) {
//     var toString = '' + str;
//     if(typeof toString === 'string' ){
//         var splittedStr = toString.split('');
//         for( var i = 0, j = -1; i < Math.round(toString.length / 2); i++){
//             if(i === 0){
//                 splittedStr[i] = toString.slice(-(i+1));
//             } else {
//                 splittedStr[i] = toString.slice(-(i+1), j);
//                 j--;
//             }
//             splittedStr[splittedStr.length - i - 1] = toString[i];
//         }
//         var newString = '';
//         splittedStr.forEach(function (element) {
//             newString += element;
//         });
//         return newString;
//     }
// }
// var inputStr = 'The long long string here';
// console.log('Input string = "' + inputStr + '", output string = "' + reversit(inputStr) + '"');
//----------7. reversit---------------//


//----------8. getCharJavaScriptUltra+100500DoubleVersion---------------//
// Напишите функцию require(n) предназначенную для получения денег данных от пользователя.
// Функция получает аргумент n - количество символов, которые нужно получить от пользователя.
// Использовать цикл и prompt, каждый раз запрашивать количество символов которое "должен" пользователь.

//Solving:
// var number = prompt('Enter the number of symbols:', '');
// require(number);
// function require(n) {
//     var string = prompt('Enter the string according to number:', '');
//     // console.log(string);
//     while (string.length !== parseInt(n)){
//        string = prompt('Stupid boy, enter the correct number of symbols!', '');
//     }
//     return console.log('Good boy, you have entered the right number of symbols, your string is = "' + string + '", its length = "' + n + '"');
// }
//----------8. getCharJavaScriptUltra+100500DoubleVersion---------------//


//----------9. randomStr---------------//
// Напишите функцию randomStr(n), n - длина строки из случайно сгенерированных символов.

//Solving:
// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function randomStr(n) {
//     var str = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoP pQqRrSsTtUuVvWwXxYyZz0123456789';
//     var randStr = '';
//     for (var i = 0; i < n; i++){
//         randStr += str[getRandomArbitrary(0, (str.length - 1))];
//     }
//     return randStr;
// }
// console.log(randomStr(32));
//----------9. randomStr---------------//


//----------10. sliceKingdom (с анг. slices - скибочки:)---------------//
// Создайте строку randomStr(100). Разбейте эту строку на отдельные слова случайной длины и выведите в консоль.

//Solving:
// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function randomStr(n) {
//     var str = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
//     var randStr = '';
//     for (var i = 0; i < n; i++){
//         randStr += str[getRandomArbitrary(0, (str.length - 1))];
//     }
//     return randStr;
// }
//
// var randString100 = randomStr(100);
// var array = [];
// var the_splitted_string = '';
// for (var b = 0; b < randString100.length; ){
//     console.log('b = ' + b);
//     let randNum = getRandomArbitrary(b, 100);
//     console.log('randNum = ' + randNum);
//     the_splitted_string += randString100.slice(b, randNum) + '--';
//     b += (randNum - b);
// }
// the_splitted_string = the_splitted_string.slice(0, the_splitted_string.length - 2);

// console.log(the_splitted_string);
//----------10. sliceKingdom (с анг. slices - скибочки:)---------------//


//----------11. subKingdom---------------//
// Используя результаты задания 10:
// - Выведите в консоль подстроку с 6 по 20 символ включительно
// - Выведите в консоль подстроку начиная с 3 символа, длиной 8 символов


//Solving:
// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function randomStr(n) {
//     var str = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
//     var randStr = '';
//     for (var i = 0; i < n; i++){
//         randStr += str[getRandomArbitrary(0, (str.length - 1))];
//     }
//     return randStr;
// }
// function split_str_by_splitter(boundary){
//     var randString100 = randomStr(100);
//     var the_split_string = '';
//     for (var b = 0; b < randString100.length; ){
//         let randNum = getRandomArbitrary(b, 100);
//         the_split_string += randString100.slice(b, randNum) + boundary;
//         b += (randNum - b);
//     }
//     return the_split_string.slice(0, the_split_string.length - boundary.length);
// }
//
// var str = split_str_by_splitter('/--/');
//
// console.log('Random string = "' + str + '"');
// console.log('The substring from 6th to 20th position, including the last one = "' + str.slice(6, (20+1)) + '"');
// console.log('The substring in size of 8 symbols from the 3rd position = "' + str.substr(3, 8) + '"');
//----------11. subKingdom---------------//


//----------12. phoneNumber---------------//
// Дано телефонный номер в формате "0682091234".
// Нужно его преобразовать в формат "+38 (068) 209-12-34".
// Создайте функцию, которая выполняет эту задачу.

//Solving:
// function phoneTypeConversion(phone_number) {
//     var phone_str = '' + phone_number;
//     return '+38 (' + phone_str.slice(0, 3) + ') ' + phone_str.slice(3, 6) + '-' + phone_str.slice(6, 8) + '-' + phone_str.slice(8, 10);
// }
// console.log(phoneTypeConversion("0682091234"));
//----------12. phoneNumber---------------//


//----------13. myTrim---------------//
// Функция Trim обрезает пробельные символы в начале и в конце строки. Часть стандарта ECMAScript 5,
// но функции trimLeft() и trimRight() не стандартизированы. Напишите свои реализации trimLeft(str) и trimRight(str):
// - trimLeft - Обрезает пробельные символы с левой стороны строки
// - trimRight - Обрезает пробельные символы с правой стороны строки.

//Solving:
// function trimLeft(str) {
//     var checking_value = 0;
//     for (var i = 0; i < str.length; i++){
//         if(str[i] === ' '){
//             checking_value = i;
//         } else if (str[i] !== ' '){
//             return str.slice(i, str.length);
//         }
//     }
//     if (checking_value === str.length - 1){
//         return 'Your string consists of spaces!';
//     } else if (checking_value === 0){
//         return 'Your string is empty!';
//     }
// }
// var strToLeftTrim = '   This is the string which we must to trim starting from the left side...';
// console.log('The initial string we are going to trim = "' + strToLeftTrim + '"');
// console.log('My left trimmed string = "' + trimLeft(strToLeftTrim) + '"');
//
// function trimRight(str) {
//     var reversed_str = str.split("").reverse().join("");
//     reversed_str = trimLeft(reversed_str);
//     return reversed_str.split("").reverse().join("");
// }
// var strToRightTrim = 'This is the string which we must to trim starting from the end   ';
// console.log('The initial string we are going to trim = "' + strToRightTrim + '"');
// console.log('My right trimmed string = "' + trimRight(strToRightTrim) + '"');
//----------13. myTrim---------------//


//----------14. indexOfAll---------------//
// Напишите функцию indexOfAll(base, str), которая возвращает список всех вхождений str в строке base

//Solving:
// var str = 'the steing here';
// var substr = 'e';
// var array = [];
// for (var i = 0; i < str.length; i++) {
//     let the_entry = str.indexOf(substr, i);
//     array.push(the_entry);
//     i = the_entry + 1;
// }
// console.log(array);
//----------14. indexOfAll---------------//







