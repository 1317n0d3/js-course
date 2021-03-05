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

let appData = {
    income: {},
    addIncome: [],
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
        for(let i = 0; i < 2; i++){
            appData.expenses[prompt('Введите обязательную статью расходов?')] = +prompt('Во сколько это обойдется?');
        }
    },
    getExpensesMonth: function (){
        let sum = 0;

        for (let expens in appData.expenses) {
            sum += appData.expenses[expens];
        }
        appData.expensesMonth = sum;
    },
    getBudget: function (){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function (){
        let res = Math.ceil(appData.mission / appData.budgetMonth);
        if(res > 0){
            return 'Цель будет достигнута';
        } else {
            return 'Цель не будет достигнута';
        }
    },
    getStatusIncome: function(){
        if(appData.budgetDay >= 1200) {
            return ('Высокий уровень дохода');
        }
        else if(appData.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        }
        else if(appData.budgetDay < 600) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        }
        else if(appData.budgetDay < 0) {
            return ('Что то пошло не так');
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

for (let key in appData) {
    console.log(key + " " + appData[key]);
}