//-------------------------1. Минимум----------------------------//
// В предыдущей главе была упомянута функция Math.min, возвращающая самый маленький из аргументов.
// Теперь мы можем написать такую функцию сами. Напишите функцию min, принимающую два аргумента, и 
// возвращающую минимальный из них.

//Solving:
// function showMin(a, b){
// 	if(a < b){
// 		return 'Min number is: ' + a;
// 	}
// 	if(a > b){
// 		return 'Min number is: ' + b;
// 	}
// 	if(a === b){
// 		return 'The numbers are equal';
// 	}
// }
// var number1 = prompt("введите два числа ", "");
// var number2 = prompt("введите два числа ", "");
// console.log(showMin(parseInt(number1), parseInt(number2)));
//-------------------------1. Минимум----------------------------//


//-------------------------2. Even number----------------------------//
// Создайте функцию isEven, которая возвращает 
// значение true или false в зависимости от того является ли аргумент x парным.

//Solving:
// function isEven(x){
// 	return (x % 2 == 0) ? true : false;
// }
// var num = prompt("Ented the number, please");
// console.log(isEven(num));
//-------------------------2. Even number----------------------------//


//-------------------------3. dayOfWeek----------------------------//
// Создайте функцию, которая принимает в себя число x э [1; 7]
// и возвращает название дня недели. Используйте switch-case.

//Solving:
function dayOfWeek(x){
	switch (x){
		case 1:
			a = 'Sunday';
			break;
		case 2:
			a = 'Monday';
			break;
		case 3:
			a = 'Tuesday';
			break;
		case 4:
			a = 'Wednesday';
			break;
		case 5:
			a = 'Thursday';
			break;
		case 6:
			a = 'Friday';
			break;
		case 7:
			a = 'Saturday';
			break;
		default:
			a = 'Sir, You\'re an Idiot, it has beed said to enter the value in range [1,7]';
		}
	return a;
}
var a = prompt('enter the number from 1 to 7', "");
console.log(dayOfWeek(parseInt(a)));
//-------------------------3. dayOfWeek----------------------------//


//-------------------------4. charSum----------------------------//
// Пользователь вводит целое положительное число m (prompt),
// найти сумму цифр и вывести в консоль.

//Solving:
// var a = 0;
// for(var i = 0; i < 3; i++){
// 	 var b = prompt('введите целое число');
// 	 a += parseInt(b);
// }
// console.log(a);

//-------------------------4. charSum----------------------------//


//-------------------------5. Prime number----------------------------//
// Пользователь вводит целое положительное число m (prompt),
// является ли число m простым? Результат вывести в консоль.

//Solving:

// for(var i = 0; i < 3; i++){
// 	var b = prompt('введите целое число');
// 	var c = String(b);
// 	if(c.length > 1 && c != ''){
// 		console.log('the number ' + b + ' is NOT simple');
// 	} else if(c.length == 1 && c != '') {
// 		console.log('the number ' + b + ' is simple');
// 	} else if(c == ''){
// 		console.log('you have entered an empty string');
// 	}
// }
//-------------------------5. Prime number----------------------------//


//-------------------------6. Sausagefest----------------------------//
// Выведите в консоль индекс буквы "З" в фразе "Мы приехали в Запорожье".

//Solving:
// var str = 'Мы приехали в Запорожье';
// console.log('index of symbol "З" in phrase "' + str +'" = ' + str.indexOf('З'));
//-------------------------6. Sausagefest----------------------------//