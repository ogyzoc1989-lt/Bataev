// Получаем необходимые элементы DOM
const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");

// Функция обновления счётчика задач
function updateCounter() {
    taskCount.textContent = taskList.children.length;
}

// Функция добавления новой задачи
function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Введите текст задачи!");
        return;
    }

    // Создаём элемент списка (li)
    const li = document.createElement("li");
    li.textContent = text;

    // Создаём кнопку удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";

    // Навешиваем событие удаления на кнопку
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCounter();
    });

    // Вставляем кнопку в элемент списка, а элемент — в <ul>
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Очищаем поле ввода и обновляем счётчик
    taskInput.value = "";
    updateCounter();
}

// Обработчик клика по кнопке «Добавить»
addButton.addEventListener("click", addTask);

// Добавление задачи по нажатию клавиши Enter
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});