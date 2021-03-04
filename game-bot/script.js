'use strict';

let checkAnswer = function(number) {
    if(number === null){
        return alert('The end.');
    } else if(isNaN(number)){
        checkAnswer(prompt("Введи число!"));
    }

    let answer = 41;
    number = parseInt(number);

    if(number < answer){
        checkAnswer(prompt('Загаданное число больше'));
    } else if(number > answer){
        checkAnswer(prompt('Загаданное число меньше'));
    }

    return alert(number);
};


checkAnswer(prompt("Угадай число от 1 до 100"));