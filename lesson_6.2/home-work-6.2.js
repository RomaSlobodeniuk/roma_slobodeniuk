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
