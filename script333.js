function getMoscowWeather() {
    fetch('https://wttr.in/Moscow?format=j1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then(data => {
        return data.current_condition[0];
      })
      .then(condition => {
        return condition.temp_C;
      })
      .then(temp => {
        console.log(`Температура: ${temp}°C`);
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      })
      .finally(() => {
        console.log('Запрос завершён');
      });
  }