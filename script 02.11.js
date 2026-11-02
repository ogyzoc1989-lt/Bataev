// 1. Работа с глобальными объектами и информацией (из первой практики)
console.log(window);
console.log(document);
console.log(navigator);
console.log(location.href);

alert("Добро пожаловать!");

let name = prompt("Как вас зовут?");
console.log("Имя пользователя: " + name);

// 2. Демонстрация методов поиска элементов на нашей HTML-странице (из второй практики и слайдов)
console.log("--- Примеры поиска элементов ---");

// Поиск по id (возвращает один элемент)
let mainTitle = document.getElementById("main-title");
console.log("Элемент по id ('main-title'):", mainTitle);

// Поиск по классу (возвращает живую HTMLCollection)
let paragraphs = document.getElementsByClassName("description");
console.log("Элементы по классу ('description'):", paragraphs);

// Поиск по тегу (возвращает живую HTMLCollection)
let listItems = document.getElementsByTagName("li");
console.log("Все элементы списка (тег 'li'):", listItems);

// Универсальный поиск первого подходящего элемента по селектору
let container = document.querySelector("#container");
console.log("Контейнер через querySelector:", container);

// Универсальный поиск всех подходящих элементов (возвращает статический NodeList)
let allParagraphs = document.querySelectorAll("p");
console.log("Все абзацы через querySelectorAll:", allParagraphs);