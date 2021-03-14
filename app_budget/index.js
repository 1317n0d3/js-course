'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let calculateButton = document.getElementById('start'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
    totalResults = document.getElementsByClassName('result-total'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    targetMonthValue = document.querySelector('.target_month-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    incomeItem = document.querySelectorAll('.income-items'),
    periodAmout = document.querySelector('.period-amount');


let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function(){
        appData.budget = +salaryAmount.value;
        console.log(appData.budget);

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        
        appData.showResult();
    },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.floor(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesAdd.style.display = 'none';
        }
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        incomeItem = document.querySelectorAll('.income-items');
        if(incomeItem.length === 3){
            incomeAdd.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function(){
        incomeItem.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
        });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItems.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function (){
        let sum = 0;

        for (let expens in appData.expenses) {
            sum += appData.expenses[expens];
        }
        appData.expensesMonth = sum;
    },
    getBudget: function (){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function (){
        // let res = Math.ceil(appData.mission / appData.budgetMonth);
        // if(res > 0){
        //     return 'Цель будет достигнута';
        // } else {
        //     return 'Цель не будет достигнута';
        // }
        return targetAmount.value / appData.budgetMonth;
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
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            while(!isNumber(appData.percentDeposit)){
                appData.percentDeposit = prompt('Какой годовой процент? (Введите корректное значение)', '10');
            }
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while(!isNumber(appData.moneyDeposit)){
                appData.moneyDeposit = prompt('Какая сумма заложена? (Введите корректное значение)', 10000);
            }
        }
    },
    calcPeriod: function(){
        return appData.budgetMonth * periodSelect.value;
    },
    updateRangeValue: function(e){
        periodAmout.textContent = e.target.value;
    }
};

calculateButton.addEventListener('click', function(){
    if(salaryAmount.value !== ''){
        appData.start();
    }
});

expensesAdd.addEventListener('click', appData.addExpensesBlock);

incomeAdd.addEventListener('click', appData.addIncomeBlock);

periodSelect.addEventListener('input', appData.updateRangeValue);

periodSelect.addEventListener('input', function(){
    incomePeriodValue.value = appData.calcPeriod();
});

// for (let key in appData) {
//     console.log(key + " " + appData[key]);
// }

// console.log(appData.addExpenses.join(', '));