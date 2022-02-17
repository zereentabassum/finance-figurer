// Income
const incomeValue = document.getElementById('income-value');

// Expenses
const foodValue = document.getElementById('food-value');
const rentValue = document.getElementById('rent-value');
const clothesValue = document.getElementById('clothes-value');

// Total expenses and Balance Output
let totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');


//---- total expenses calculation function----
function expenseCalculate(foodValue, rentValue, clothesValue){
   totalExpenses.innerText = parseInt(foodValue.value) + parseInt(rentValue.value) + parseInt(clothesValue.value);
   foodValue.value = '';
   rentValue.value = ''; 
   clothesValue.value = '';
}
//------- Balance and Remaining Balance calculation function-------
function remainingMoney(firstValue, secondValue, balanceRemained) {
    return parseInt(secondValue) - parseInt(firstValue);
}


//------ Calculate Button click events 
// Total Expenses 
document.getElementById('calculate').addEventListener('click', function() {
  expenseCalculate(foodValue, rentValue, clothesValue);
  
//   Balance
 const balanceOutput = remainingMoney(totalExpenses.innerText, incomeValue.value);
 balance.innerText = balanceOutput;
 incomeValue.value = '';
})