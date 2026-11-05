// 1. Создаем два объекта student1 и student2
const student1 = { name: 'Алина', group: 'ВЕБ-21' };
const student2 = { name: 'Максим', group: 'ВЕБ-22' };

// 2. Создаем отдельную функцию showInfo(), которая выводит имя и группу через this
function showInfo() {
    console.log(`Имя: ${this.name}, Группа: ${this.group}`);
}

// 3. Добавляем функцию showInfo в оба объекта как метод
student1.showInfo = showInfo;
student2.showInfo = showInfo;

// 4. Вызываем методы объектов
console.log("--- Вызов через методы объектов ---");
student1.showInfo(); // Выведет: Имя: Алина, Группа: ВЕБ-21
student2.showInfo(); // Выведет: Имя: Максим, Группа: ВЕБ-22

// 5. Сохраняем student1.showInfo в отдельную переменную и вызываем её
console.log("--- Вызов через отдельную переменную ---");
const looseShowInfo = student1.showInfo;
looseShowInfo(); // Выведет: Имя: undefined, Группа: undefined (или ошибку в строгом режиме use strict)