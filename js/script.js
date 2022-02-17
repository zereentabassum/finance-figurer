// Income
const incomeValue = document.getElementById('income-value');

// Expenses
const foodValue = document.getElementById('food-value');
const rentValue = document.getElementById('rent-value');
const clothesValue = document.getElementById('clothes-value');

// Total expenses and Balance Output
let totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');

// Saving 
const savingInput = document.getElementById('saving-input');

// Saving Amount and Remaining Balance 
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');


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

 //------ Saving Calculation 
function savingsCalculation(incomeValue, savingInput) {
    savingAmount.innerText = Number(incomeValue.value) * Number(savingInput.value)/100;
    savingInput.value = '';
}


//------ ---Calculate Button click events -----------
// Total Expenses 
document.getElementById('calculate').addEventListener('click', function() {
  expenseCalculate(foodValue, rentValue, clothesValue);
  
//   Balance
if (Number(totalExpenses.innerText) > Number(incomeValue.value)) {
    let failError = document.getElementById('fail-error');
    failError.style.display = 'block';
}
else {
 const balanceOutput = remainingMoney(totalExpenses.innerText, incomeValue.value);
 balance.innerText = balanceOutput;
}
})


//---------- Save Button Click Events --------------
document.getElementById('save-button').addEventListener('click', function() {
     // savingAmount 
    if (Number(savingAmount.innerText) > Number(balance.innerText) ) {
        let errorAlert = document.getElementById('error-alert');
        errorAlert.style.display = 'block';
    }
    else {
    savingsCalculation(incomeValue, savingInput);
    
    // Remaining Balance 
    const balanceRemained = remainingMoney(savingAmount.innerText, balance.innerText);
    remainingBalance.innerText = balanceRemained;
    savingInput = '';
    incomeValue = '';
    }
})