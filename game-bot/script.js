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

let checkAnswerWithAttempts = function(){
    let answer = Math.floor(Math.random() * 100);
    let attempt = 10;

    let reset = function(){
        answer = Math.floor(Math.random() * 100);
        attempt = 10;
    };

    let again = function(number){
        if(number === null){
            return alert('The end.');
        } else if(isNaN(number)){
            again(prompt("Введи число!"));
        }

        attempt--;
        if(attempt < 0){
            return alert('Попыток больше нет');
        }
        
        if(number < answer){
            again(prompt('Загаданное число больше, осталось попыток: ' + attempt));
        } else if(number > answer){
            again(prompt('Загаданное число меньше, осталось попыток: ' + attempt));
        } else {
            alert('Вы угадали, осталось попыток: ' + attempt);
            if(confirm('Хотите сыграть еще?')){
                reset();
                return again(prompt("Угадай число от 1 до 100"));
            } else {
                return alert('The end.');
            }
        }
    };


    return again(prompt("Угадай число от 1 до 100"));
}


checkAnswerWithAttempts();