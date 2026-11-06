async function getWeather() {
    console.log('Начинаем запрос погоды...'); // Проверка запуска
    try {
        let response = await fetch('https://wttr.in/Moscow?format=j1');
        console.log('Ответ от сервера получен, статус:', response.status); // Проверка ответа
        
        let data = await response.json();
        console.log('Данные успешно преобразуны в JSON:', data); // Итоговый объект
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}