function getWeatherWithAllSettled() {
    // Создаем массив URL, где один из них заведомо неверный[span_0](start_span)[span_0](end_span)
    const urls = [
        'https://wttr.in/Moscow?format=j1',
        'https://wttr.in/InvalidCityName12345?format=j1', // заведомо неверный URL/город
        'https://wttr.in/Paris?format=j1'
    ];

    const requests = urls.map(url => 
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then(data => data.current_condition[0].temp_C)
    );

    return Promise.allSettled(requests) //[span_1](start_span)[span_1](end_span)
        .then(results => {
            let output = '';
            
            results.forEach((result, index) => {
                // Если status === 'fulfilled' — выводим температуру[span_2](start_span)[span_2](end_span)
                if (result.status === 'fulfilled') {
                    output += `Запрос ${index + 1}: Температура: ${result.value}°C\n`;
                    console.log(`Запрос ${index + 1}: Температура: ${result.value}°C`);
                } 
                // Если status === 'rejected' — выводим сообщение об ошибке[span_3](start_span)[span_3](end_span)
                else if (result.status === 'rejected') {
                    output += `Запрос ${index + 1}: Ошибка — ${result.reason.message}\n`;
                    console.error(`Запрос ${index + 1}: Ошибка —`, result.reason);
                }
            });

            return output;
        });
}

document.getElementById('getWeatherBtn').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Загрузка...';
    
    const weatherResults = await getWeatherWithAllSettled();
    resultDiv.textContent = weatherResults;
});