'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше имя');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

// \D - не числа
// \W - не буквы
// \S - не пробелы

// \d - поиск цифр
// \w - поиск слов
// \s - поиск пробелов

// i - регистр
// g - все совпадения
// m

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ":"));

