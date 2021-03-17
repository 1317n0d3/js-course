'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let calculateButton = document.getElementById('start'),
    cancelButton = document.getElementById('cancel'),
    inputElems = document.querySelectorAll('input[type=text]'),
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


const AppData = function(){
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
};

AppData.prototype.start = function(){
    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    
    this.showResult();

    inputElems.forEach(function(item){
        item.setAttribute('disabled', '');
    });
    calculateButton.style.display = 'none';
    cancelButton.style.display = 'block';
};

AppData.prototype.showResult = function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
};
AppData.prototype.addExpensesBlock = function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.childNodes.forEach(function(item){
        item.value = '';
    });
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
        expensesAdd.style.display = 'none';
    }
};
AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    cloneIncomeItem.childNodes.forEach(function(item){
        item.value = '';
    });
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
    incomeItem = document.querySelectorAll('.income-items');
    if(incomeItem.length === 3){
        incomeAdd.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function(){
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;

        if(itemExpenses !== '' && cashExpenses !== ''){
            this.expenses[itemExpenses] = cashExpenses;
        }
    }, this);
};
AppData.prototype.getIncome = function(){
    incomeItem.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;

        if(itemIncome !== '' && cashIncome !== ''){
            this.income[itemIncome] = cashIncome;
        }
    }, this);
};
AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            this.addExpenses.push(item);
        }
    }, this);
};
AppData.prototype.getAddIncome = function(){
    additionalIncomeItems.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            this.addIncome.push(itemValue);
        }
    }, this);
};
AppData.prototype.getExpensesMonth = function (){
    let sum = 0;

    for (let expens in this.expenses) {
        sum += +this.expenses[expens];
    }
    this.expensesMonth = sum;
};
AppData.prototype.getBudget = function (){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function (){
    return targetAmount.value / this.budgetMonth;
};
AppData.prototype.getStatusIncome = function(){
    if(this.budgetDay >= 1200) {
        return ('Высокий уровень дохода');
    }
    else if(this.budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    }
    else if(this.budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    }
    else if(this.budgetDay < 0) {
        return ('Что то пошло не так');
    }
};
AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){
        this.percentDeposit = prompt('Какой годовой процент?', '10');
        while(!isNumber(this.percentDeposit)){
            this.percentDeposit = prompt('Какой годовой процент? (Введите корректное значение)', '10');
        }
        this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        while(!isNumber(this.moneyDeposit)){
            this.moneyDeposit = prompt('Какая сумма заложена? (Введите корректное значение)', 10000);
        }
    }
};
AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.updateRangeValue = function(e){
    periodAmout.textContent = e.target.value;
};
AppData.prototype.reset = function(){

    budgetMonthValue.value = 0;
    budgetDayValue.value = 0;
    expensesMonthValue.value = 0;
    additionalExpensesValue.value = 'Наименование';
    additionalIncomeValue.value = 'Наименование';
    targetMonthValue.value = 'Срок';
    incomePeriodValue.value = 0;

    inputElems.forEach(function(item){
        item.removeAttribute('disabled');
    });
    calculateButton.style.display = 'block';
    cancelButton.style.display = 'none';
};

AppData.prototype.eventsListeners = function(){
    const __this = this;
    calculateButton.addEventListener('click', function(){
        if(salaryAmount.value !== ''){
            __this.start();
        }
    });

    cancelButton.addEventListener('click', __this.reset);

    expensesAdd.addEventListener('click', __this.addExpensesBlock);

    incomeAdd.addEventListener('click', __this.addIncomeBlock);

    periodSelect.addEventListener('input', __this.updateRangeValue);

    periodSelect.addEventListener('input', function(){
        incomePeriodValue.value = __this.calcPeriod();
    });
};

const appData = new AppData();
appData.eventsListeners();

