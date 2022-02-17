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

    if ( foodValue.value<0 || rentValue.value<0 || clothesValue.value<0 || incomeValue.value<0) {
        let errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
    else if (foodValue.value==0 || rentValue.value==0 || clothesValue.value==0 || incomeValue.value==0){
        let failMessage = document.getElementById('fail-message');
        failMessage.style.display = 'block';
    }
    
    else{
   totalExpenses.innerText = Number(foodValue.value) + Number(rentValue.value) + Number(clothesValue.value);
   foodValue.value = '';
   rentValue.value = ''; 
   clothesValue.value = '';
}
}
//------- Balance and Remaining Balance calculation function-------
function remainingMoney(firstValue, secondValue) {
    return Number(secondValue - firstValue);
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