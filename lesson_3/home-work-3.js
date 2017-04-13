//-------------------------1."Hello world"----------------------------//
// Вывести в консоль "Hello world" без использования латиницы.

//Solving:
// \u0061\u006c\u0065\u0072\u0074('\u0068\u0065\u006c\u006c\u006f\u0020\u0077\u006f\u0072\u006c\u0064');
//-------------------------1."Hello world"----------------------------//


//-------------------------2.Error----------------------------//
// Вывести в консоль Error.

//Solving:
// console.error('Вы лоханулись!');
//-------------------------2.Error----------------------------//


//-------------------------3.Literals----------------------------//
// Вывести в консоль литералы JS: Null, Boolean Literals(оба), Numeric Literals(всех систем счисления), String Literals(3 базовых)

//Solving:
// console.log(null);
// console.log(false);
// console.log(true);
// console.log(1);
// console.log(1.2);
// console.log(0b11011101);
// console.log(0o02447);
// console.log(0x822f4d);
//-------------------------3.Literals----------------------------//


//-------------------------4.Group----------------------------//
// Сгрупировать все литералы по типу и вывести группу с подписью конкретной группы.

//Solving:
// console.group('null literal');
// console.log(null);
// console.groupEnd();
//
// console.group('boolean literals');
// console.log(false);
// console.log(true);
// console.groupEnd();
//
// console.group('numeric literals');
// console.log(1);
// console.log(1.2);
// console.log(0b11011101);
// console.log(0o02447);
// console.log(0x822f4d);
// console.groupEnd();
// 
// console.group('string literals')
// console.log('hello')
// console.log('Error')
// console.log('mess="error"')
// console.groupEnd();
//-------------------------4.Group----------------------------//


//-------------------------5.Time----------------------------//
// Засечь время выполнения кода из задания 4.

//Solving:
// console.time('timeScriptExecuting');
// console.group('null literal');
// console.log(null);
// console.groupEnd();

// console.group('boolean literals');
// console.log(false);
// console.log(true);
// console.groupEnd();

// console.group('numeric literals');
// console.log(1);
// console.log(1.2);
// console.log(0b11011101);
// console.log(0o02447);
// console.log(0x822f4d);
// console.groupEnd();

// console.group('string literals')
// console.log('hello')
// console.log('Error')
// console.log('mess="error"')
// console.groupEnd();
// console.timeEnd('timeScriptExecuting');
//-------------------------5.Time----------------------------//


//-------------------------6.Age----------------------------//
// Спросить у пользователя сколько ему лет. Результат вывести в консоль

//Solving:
// var a = prompt('Hey, dude, what is your name?');
// console.log('The dude\'s name is: ' + a);
//-------------------------6.Age----------------------------//


//-------------------------7.18-----------------------------//
// Спросить у пользователя есть ли ему 18. Результат вывести в консоль.

//Solving:
// var b = confirm('Hey, dude, are you 18 years already?');
// if(b){
//     console.log('The dude\'s name is: ' + 'Yes');
// } else {
//     console.log('The dude\'s name is: ' + 'No');
// }
//-------------------------7.18-----------------------------//


//-------------------------8.Info-----------------------------//
// Спросить у пользователя имя, фамилию, возраст и пол. Результат записать в переменную и вывести в консоль одной строкой как поле info.

//Solving:
// var arr = ['имя', 'фамилию', 'возраст', 'пол'];
// var array = [];
// arr.forEach(function(element){
// 	let a  = 'Ваш';
// 	if(element === 'фамилию'){
// 		a = 'Вашу';
// 	}
//     array[element] = prompt('Введите ' + a + ' ' + element);
// });
// var b = '';
// arr.forEach(function(i){
// 	if(i === 'пол'){
// 		b += array[i];
// 	} else {
// 		b += array[i] + ', ';
// 	}
// });
// console.info(b);
//-------------------------8.Info-----------------------------//


//-------------------------9.Global-----------------------------//
// Вывести в консоль window. Изучить результат.

//Solving:
// console.log(window);
//-------------------------9.Global-----------------------------//


//-------------------------10.DOM-----------------------------//
// Вывести в консоль document в 2 вариантах: dir и log. Сравнить результат.

//Solving:
// console.dir(document);
// console.log(document);
//-------------------------10.DOM-----------------------------//


//-------------------------11.Dude-----------------------------//
// Создать переменную чувак без оператора var и вывести в консоль window. 
// Ctrl+F в консоли, найти чувака в window. 
// Перезапустить страницу, сделать то же но с оператором var. Изучить результат.

//Solving:
// console.log(чувак = 2);
// var чувак = 90;
// console.log(чувак);
//-------------------------11.Dude-----------------------------//


//-------------------------12.Strict Dude-----------------------------//
// Повторить задание 11 с директивой "use strict". Изучить результат.

//Solving:
// 'use strict'
// console.log(чувак = 2);
// var чувак = 90;
// console.log(чувак);
//-------------------------12.Strict Dude-----------------------------//