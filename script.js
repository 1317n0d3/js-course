'use strict';

let money = prompt('Ваш месячный доход?', '100');
let income = 'Freelance';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000;
let period = 1;
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = prompt('Во сколько это обойдется?');
let budgetMonth = money - Number(amount1) - Number(amount2);
let budgetDay = Math.floor(budgetMonth / 30);

console.log(Math.ceil(mission / budgetMonth));

if(budgetDay >= 1200) {
    console.log('Высокий уровень дохода');
}
else if(budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
}
else if(budgetDay < 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}
else if(budgetDay < 0) {
    console.log('Что то пошло не так');
}

// console.log(typeof money + ' ' + typeof income + ' ' + typeof deposit);
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + ' рублей');

// console.log(addExpenses.toLowerCase().split(', '));
// console.log(budgetDay);


// let num = 266219;
// let res = 1;
// let arr = String(num);

// for(let i = 0; i < arr.length; i++){
//     res *= Number(arr[i]);
// }
// console.log(res);
// res = res ** 3;

// console.log(res);
// console.log(String(res).substr(0, 2));