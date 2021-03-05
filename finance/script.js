'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function(){
    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};

start();

let showTypeOf = function (data){
    console.log(data, typeof(data));
};

let expenses = [];

let getExpensesMonth =  function (){
    let sum = 0;

    for(let i = 0; i < 2; i++){

        expenses[i] = prompt('Введите обязательную статью расходов?');

        do {
            sum += +prompt('Во сколько это обойдется?');
        } while (!isNumber(sum));
    }

    return sum;
}

let getAccumulatedMonth = function (money, amount1, amount2){
    return money - getExpensesMonth(amount1, amount2);
}

let getTargetMonth = function (mission, accumulatedMonth){
    let res = Math.ceil(mission / accumulatedMonth);
    if(res > 0){
        return 'Цель будет достигнута';
    } else {
        return 'Цель не будет достигнута';
    }
}

let expensesAmount = getExpensesMonth();

let income = 'Freelance';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000;
let period = 1;
// let expenses1 = prompt('Введите обязательную статью расходов?');
// let amount1 = prompt('Во сколько это обойдется?');
// let expenses2 = prompt('Введите обязательную статью расходов?');
// let amount2 = prompt('Во сколько это обойдется?');
let accumulatedMonth = getAccumulatedMonth(money, Number(amount1), Number(amount2));
let budgetDay = Math.floor(accumulatedMonth / 30);

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getStatusIncome = function(){
    if(budgetDay >= 1200) {
        return ('Высокий уровень дохода');
    }
    else if(budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    }
    else if(budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
    else if(budgetDay < 0) {
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());

console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);