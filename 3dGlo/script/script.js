window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function countTimer(deadline) {
        const timeHours = document.querySelector('#timer-hours'),
            timeMinute = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');

        const getTimeReamning = () => {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeReamning = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeReamning % 60),
                minutes = Math.floor((timeReamning / 60) % 60),
                hours = Math.floor(timeReamning / 60 / 60);
            return {
                timeReamning,
                hours,
                minutes,
                seconds
            };
        };
        const updateClock = () => {
            const timer = getTimeReamning();

            timeHours.textContent = timer.hours;
            timeMinute.textContent = timer.minutes;
            timeSeconds.textContent = timer.seconds;

            if (timer.hours < 10) {
                timeHours.textContent = "0" + timer.hours;
            } else if (timer.minute < 10) {
                timeMinute.textContent = "0" + timer.minutes;
            }
            if (timer.seconds < 10) {
                timeSeconds.textContent = "0" + timer.seconds;
            }
            if (timer.hours < 0) {
                timeHours.textContent = 0;
                timeMinute.textContent = 0;
                timeSeconds.textContent = 0;
            }
            if (timer.timeReamning > 0) {
                setTimeout(updateClock, 1000);
            }
        };
        updateClock();
    }
    countTimer('1 july 2020');


    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItem = document.querySelectorAll('ul>li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItem.forEach((elem) => elem.addEventListener('click', handlerMenu));

    };
    toggleMenu();

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');

        let count = 0,
            count1 = 100;

        const openPopup = () => {
            const popupanimate = requestAnimationFrame(openPopup);

            count1 += 10;
            popup.style.display = 'block';
            if (popup.style.opacity < 5) {


                popup.style.opacity = count += 0.155;
                popupContent.style.left = count1 * 2 + 'px';

            } else {
                cancelAnimationFrame(popupanimate);
            }
        };

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (window.innerWidth >= 768) {
                    openPopup();
                } else {
                    popup.style.display = '';
                }
            });

            popupClose.addEventListener('click', () => {
                popup.style.display = '';
            });

        });
    };
    togglePopUp();


});