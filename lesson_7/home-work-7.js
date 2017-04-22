//----------1. nodeList---------------//
// 'use strict';
// var list = document.querySelectorAll('*');
// console.log(list);

// 1. Выведите в консоль количество элементов на странице. (тут вам поможет цикл for..in)
// var total_count = 0;
// for (var key in list) {
// 	if( ''+(+key) !== 'NaN'){
// 		total_count = parseInt(key) + 1;
// 	}
// }
// console.log(total_count);

// 2. Выведите в консоль каждый HTML-элемент страницы. (тот же перебор через цикл for..in)
// for (var key in list) {
// 	if( ''+(+key) !== 'NaN'){
// 		console.log(list[key]);
// 		console.log(list[key].nodeName);
// 	}
// }

// 3. Выведите в консоль тип каждого элемента страницы. (console.log(typeof...));
// for (var key in list) {
// 	if( ''+(+key) !== 'NaN'){
// 		console.log(typeof list[key]);
// 	}
// }

//4. Создайте пустую строку, и в нее в столбик конкатенируйте название HTML-элемента.
// (list[key].nodeName - вернет вам название тега)
// var strWithNodeNames = '';
// for (var key in list) {
//     if ('' + (+key) !== 'NaN') {
//         strWithNodeNames += list[key].nodeName + '\n';
//     }
// }
// console.log('The string with node names = \n"\n' + strWithNodeNames + '"');

// 5. Узнайте сколько тегов span, div, p и a на странице (реализовать в 2 способа:
// indexof в цикле по строке, и перебор for..in по list c if совет: проверку вынести в функцию)

//>>>>>>>>>>>common_chunk_of_code_for_both_variants<<<<<<<<<<<<<<<//
// function checkIfThereIsATag(str, tagName) {
//     var foundPos = str.indexOf(tagName, 0);
//     return (foundPos != -1);
// }
// var arrayWithTagNames = ['span', 'div', 'p', 'a'];
//>>>>>>>>>>>common_chunk_of_code_for_both_variants<<<<<<<<<<<<<<<//

//>>>>>>>>>>>The_first_variant<<<<<<<<<<<<//
// function getTheNumberOfTagsOnThePage(tagName) {
//     var total_count = 0;
//     for (var key in list) {
//         if ('' + (+key) !== 'NaN') {
//             total_count = parseInt(key) + 1;
//         }
//     }
//     var inner_counter = 0;
//     for (var i = 0; i < total_count; i++) {
//         inner_counter += +checkIfThereIsATag(list[i].nodeName.toLocaleLowerCase(), tagName);
//     }
//     return inner_counter;
// }
// for (var c = 0; c < arrayWithTagNames.length; c++){
//     console.log('The number of "' + arrayWithTagNames[c] + '" tags on this page is: ' + getTheNumberOfTagsOnThePage(arrayWithTagNames[c]));
// }
//>>>>>>>>>>>The_first_variant<<<<<<<<<<<<//

//>>>>>>>>>>>The_second_variant<<<<<<<<<<<<//
// function showTheNumberOfTags(arr_tag_names) {
//     arr_tag_names.forEach(function (tag, i, arr) {
//         var counter = 0;
//         for (var key in list){
//             if (typeof list[key] !== 'function' && typeof list[key] !== 'number'){
//                 counter += +checkIfThereIsATag(list[key].nodeName.toLocaleLowerCase(), tag);
//             }
//         }
//         console.log('The number of "' + arr[i] + '" tags on this page is: ' + counter);
//     });
// }
//
// showTheNumberOfTags(arrayWithTagNames);
//>>>>>>>>>>>The_second_variant<<<<<<<<<<<<//

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
// var me = {
// 	name : 'Roma',
// 	surname : 'Slobodeniuk',
// 	birthday : '16.08.1991',
// 	coins: 95
// };
//
// var i = 0;
// for (var key in me){
// 	console.log(i + ' ' + key + ' ' + me[key]);
// 	i++;
// }
//
// delete me.coins;
//----------2. idCard---------------//