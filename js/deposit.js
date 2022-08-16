// step-1:add click handler to the deposit buttonn
document.getElementById('btn-deposit').addEventListener('click', function () {
//  step-2: get the deposit amount from the deposit field 
// for input field use .value to get the value inside the input field   
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value
    const newDepositAmount = parseFloat(newDepositAmountString);

    // setp-3: get the current deposit total
    // for non-input (element other than input, textarea) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4: add numbers to set the totatl deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current balance total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balace total
    balanceTotalElement.innerText = currentBalanceTotal
    // step:7 clear the deposit field
    depositField.value = '';
})