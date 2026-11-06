function getAllCitiesWeather() {
    console.log("Начинаем загрузку погоды для трёх городов...");

    const urls = [
        'https://wttr.in/Moscow?format=j1',
        'https://wttr.in/London?format=j1',
        'https://wttr.in/Paris?format=j1'
    ];

    const cityNames = ['Москва', 'Лондон', 'Париж'];

    const promises = urls.map(url => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status}`);
                }
                return response.json(); 
            });
    });

    Promise.all(promises)
        .then(results => {
            console.log("Все данные получены!");
 
            results.forEach((data, index) => {
             
                const temp = data.current_condition[0].temp_C;
                const cityName = cityNames[index];
                
                console.log(`Температура в городе ${cityName}: ${temp}°C.`);
            });
        })
        .catch(error => {
         
            console.error('Не удалось получить данные:', error.message);
        });
}