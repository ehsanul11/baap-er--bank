// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawValueString = withdrawField.value;
    // also make sure to convert the input into a number by using parseFloat
    const withdrawFieldValue = parseFloat(newWithdrawValueString);   
    // step- type amount and remove  withdraw amount input field
    withdrawField.value = '';

    if (isNaN(withdrawFieldValue)) {
        alert('provide a valid number');
        return;
    }

    // step-3: get the privious withdrawtotal by id
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawPreviousString = withdrawTotal.innerText;
    const withdrawPreviousValue = parseFloat(withdrawPreviousString);
   
   

    //  step-6: get the previous banlace total
    const balanceTotal = document.getElementById('balance-total');
    const balaceTotalString = balanceTotal.innerText;
    const balancePreviousValue = parseFloat(balaceTotalString);

 
    if (withdrawFieldValue > balancePreviousValue) {
        alert('insufficient Balance');
        return;
        
     }

     // step-4:calculate total withdraw amount 
     const currentWithdrawTotal = withdrawFieldValue + withdrawPreviousValue;

     // step-5: set withdraw amount in withdraw balance
     withdrawTotal.innerText = currentWithdrawTotal;
    
    
    // step-7: calculate new balace total and set the new balace total

    const newBalance = balancePreviousValue - withdrawFieldValue;
    balanceTotal.innerText = newBalance;

    
})