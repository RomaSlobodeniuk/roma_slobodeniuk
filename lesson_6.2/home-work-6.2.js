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
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomStr(n) {
    var str = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoP pQqRrSsTtUuVvWwXxYyZz0123456789';
    var randStr = '';
    for (var i = 0; i < n; i++){
        randStr += str[getRandomArbitrary(0, (str.length - 1))];
    }
    return randStr;
}

var randString100 = randomStr(100);
var array = [];
for (var b = 0; b < randString100.length; b++){
    // array.push(randString100.slice())
}

console.log(randomStr(100));
//----------10. sliceKingdom (с анг. slices - скибочки:)---------------//





