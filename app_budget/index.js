'use strict';

let calculateButton = document.getElementById('start');
let incomeAdd = document.getElementsByTagName('button')[0];
let expensesAdd = document.getElementsByTagName('button')[1];
let depositCheck = document.querySelector('#deposit-check');
let incomeItems = document.querySelectorAll('.additional_income-item');
let totalResults = document.getElementsByClassName('result-total');
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let addExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');