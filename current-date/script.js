'use strict';

let detailDate = function(){
    let date = new Date();

    let fixTime = function(timeValue, type){
        if(timeValue % 10 === 1 && Math.floor(timeValue / 10) !== 1){
            switch(type){
                case 'hour':
                    return timeValue + ' час ';
                case 'min':
                    return timeValue + ' минута ';
                case 'sec':
                    return timeValue + ' секунда ';
            }
        } else if(timeValue % 10 > 1 && timeValue % 10 < 5 && Math.floor(timeValue / 10) !== 1){
            switch(type){
                case 'hour':
                    return timeValue + ' часа ';
                case 'min':
                    return timeValue + ' минуты ';
                case 'sec':
                    return timeValue + ' секунды ';
            }
        } else {
            switch(type){
                case 'hour':
                    return timeValue + ' часов ';
                case 'min':
                    return timeValue + ' минут ';
                case 'sec':
                    return timeValue + ' секунд ';
            }
        }
    };
    
    let daysOfWeek = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    ];

    let months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    return 'Сегодня '
                + daysOfWeek[date.getDay() - 1] + ', '
                + date.getDate() + ' '
                + months[date.getMonth()] + ' '
                + date.getFullYear() + ' года, '
                + fixTime(date.getHours(), 'hour')
                + fixTime(date.getMinutes(), 'min')
                + fixTime(date.getSeconds(), 'sec');
};

let simpleDate = function(){
    let date = new Date();

    let dualNumber = function(number){
        if(String(number).length < 2){
            return '0' + number;
        } else {
            return number;
        }
    };

    return dualNumber(date.getDate()) + '.' + dualNumber(date.getMonth()) + '.' + date.getFullYear() + ' - '
            + dualNumber(date.getHours()) + ':' + dualNumber(date.getMinutes()) + ':' + dualNumber(date.getSeconds());
};


let showDate = function (){
    let date = document.querySelector('.date');
    date.innerHTML = `${detailDate()}<br><br>${simpleDate()}`;
};

showDate();

setInterval(showDate, 1000);