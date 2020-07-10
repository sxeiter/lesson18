window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const nowDay = date => {
        const hour = date.getHours();
        const weekDays = ['Восскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const day = weekDays[date.getDay()];

        const localTime = date.toLocaleTimeString('en');
        let changeTime;
        if (hour > 3 && hour < 12) {
            changeTime = 'Доброе утро';
        } else if (hour >= 12 && hour < 18) {
            changeTime = 'Добрый день';
        } else if (hour >= 18 && hour < 22) {
            changeTime = 'Добрый вечер';
        } else if (hour > 22 && hour < 3) {
            changeTime = 'Доброй ночи';
        }
        return {
            hour,
            day,
            localTime,
            changeTime
        };
    };
    const calcNewYear = Math.ceil(((((new Date(2021, 0, 1) - new Date()) / 1000) / 60) / 60) / 24);
    const watchOnDisplay = () => {
        const addInfo = nowDay(new Date());

        const newInfo = document.createElement('a');
        newInfo.innerHTML = `${addInfo.changeTime}           <br>
                        Сегодня: ${addInfo.day}              <br>
                        Текущее время: ${addInfo.localTime}  <br>
                        До нового года осталось: ${calcNewYear} дней`;
        const newInfoTime = document.getElementById('newInfoTime');
        newInfoTime.appendChild(newInfo);
    };

    watchOnDisplay();
});