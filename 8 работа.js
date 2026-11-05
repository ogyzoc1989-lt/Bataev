const employee = {
    name: 'Дмитрий',
    position: 'Веб-разработчик',
    showInfo() {
        console.log(`Сотрудник: ${this.name}, Должность: ${this.position}`);
    }
};

console.log("1. Обычный вызов метода ");

employee.showInfo(); 

console.log("\n 2. Сохранение в переменную (потеря контекста)");
const detachedShowInfo = employee.showInfo;
detachedShowInfo(); 

console.log("\n3. Использование bind()");
const boundShowInfo = employee.showInfo.bind(employee);

boundShowInfo();

console.log("\n 4. Дополнительно: Второй сотрудник");
const employee2 = {
    name: 'Анна',
    position: 'UI/UX Дизайнер'
};

const boundShowInfo2 = employee.showInfo.bind(employee2);
boundShowInfo2();