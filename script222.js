function checkWeather(temperature) {
    return new Promise((resolve, reject) => {
        // Задержка 1 секунда
        setTimeout(() => {
            if (temperature > 0) {
                resolve("Тепло!");
            } else {
                reject(new Error("Холодно!"));
            }
        }, 1000);
    });
}

// 1. Вызов с temperature = 5 (сработает .then)
checkWeather(5)
    .then(result => {
        console.log("Результат:", result);
    })
    .catch(error => {
        console.error("Ошибка:", error.message);
    });

// 2. Вызов с temperature = -5 (сработает .catch)
checkWeather(-5)
    .then(result => {
        console.log("Результат:", result);
    })
    .catch(error => {
        console.error("Ошибка:", error.message);
    });