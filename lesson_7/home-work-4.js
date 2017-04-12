//----------1. nodeList---------------//

// for(key in list){
//     if(typeof list[key] != 'function'){
//         console.dir(list[key]);
//     }
// }
//----------1. nodeList---------------//

//----------2. idCard---------------//
// Создайте объект с информацией о себе: имя, фамилия, дата рождения, количество копеек в кармане.
// Переберите циклом все свойства и выведите их в консоль в виде:
// 'use strict';
// 0 name Дима
// 1 fname Учкин
// 2 coins 0
// 3 дата рождения 05.10.1982
// ...

//Solving:
var me = {
	name : 'Roma',
	surname : 'Slobodeniuk',
	birthday : '16.08.1991',
	coins: 95
};

var i = 0;
for (key in me){
	console.log(i + ' ' + key + ' ' + me[key]);
	i++;
}

delete me.coins;
//----------2. idCard---------------//