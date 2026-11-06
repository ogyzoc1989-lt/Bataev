// Функция fetchWithTimeout согласно условию задания
function fetchWithTimeout(url, ms) {
    const fetchPromise = fetch(url);
    
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Таймаут')), ms)
    );

    return Promise.race([fetchPromise, timeoutPromise]);
}

// Функция для запуска и отображения результатов обоих тестов
async function runTests() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Выполнение запросов...\n';

    const url = 'https://wttr.in/Moscow?format=j1';

    // 1. Тест с маленьким таймаутом (ms = 100) — должен сработать таймаут[span_1](start_span)[span_1](end_span)
    try {
        resultDiv.textContent += '\nТест 1 (ms = 100): ожидаем таймаут...\n';
        await fetchWithTimeout(url, 100);
    } catch (error) {
        resultDiv.textContent += `Результат 1: Ошибка — ${error.message} (сработал таймаут)\n`;
        console.log('Тест 1 ошибка:', error);
    }

    // 2. Тест с достаточным таймаутом (ms = 5000) — данные должны прийти[span_2](start_span)[span_2](end_span)
    try {
        resultDiv.textContent += '\nТест 2 (ms = 5000): ожидаем данные...\n';
        const response = await fetchWithTimeout(url, 5000);
        const data = await response.json();
        
        const temp = data.current_condition[0].temp_C;
        resultDiv.textContent += `Результат 2: Успех! Температура в Москве: ${temp}°C\n`;
        console.log(`Тест 2 успех, температура: ${temp}°C`);
    } catch (error) {
        resultDiv.textContent += `Результат 2: Ошибка — ${error.message}\n`;
        console.error('Тест 2 ошибка:', error);
    }
}

document.getElementById('testTimeoutBtn').addEventListener('click', runTests);