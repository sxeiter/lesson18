const deleteWord = () => {
    'use strict';
    const calcItem = document.querySelectorAll('.calc-item');
    calcItem.forEach(check => {
        check.addEventListener('input', () => {
            check.value = check.value.replace(/[^0-9]/, '');
        });
    });
};

export default deleteWord;