"use strict";

const movies = [
  {name: 'Гнев человеческий', rating: 8},
  {name: 'Перевозчик', rating: 6},
  {name: 'Форсаж 7', rating: 5},
  {name: 'Операция Фортуна', rating: 9},
  {name: 'Большой куш', rating: 10},
  {name: 'Механик', rating: 8},
  {name: 'Шпион', rating: 7}
];

function showGoodFilms(arr) {
  return arr.filter(item => item.rating >= 8);
}

function showListOfFilms(arr) {
  return arr
    .map(item => Object.entries(item))
    .map(item => item[0][1])
    .reduce((sum, current) => `${sum}, ${current}`);
}

function hisShowListOfFilms(arr) {
  return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

function setFilmsIds(arr) {
  return arr.map((item, i) => {
    item.id = i;
    return item;
  });
}

const transformedArray = setFilmsIds(movies);

function checkFilms(arr) {
  return arr.every(item => item.id || item.id === 0);
}

// console.log(setFilmsIds(movies));
// console.log(showGoodFilms(movies));
// console.log(showListOfFilms(movies));
// console.log(checkFilms(transformedArray));
